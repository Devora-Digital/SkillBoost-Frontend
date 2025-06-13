'use client'
import { useState, useEffect, useRef } from 'react'
import styles from './Filter.module.scss'
import { ListFilter } from 'lucide-react'
import clsx from 'clsx'

export interface FilterOption {
  key: string
  label: string
  values: string[]
}

export interface FilterState {
  [key: string]: string[]
}

interface FilterProps {
  options: FilterOption[]
  selectedFilters: FilterState
  onToggleFilter: (type: string, value: string) => void
  onResetFilters: () => void
  hasActiveFilters?: boolean
  activeFiltersCount?: number
  isOpen?: boolean
  onToggle?: () => void
  onClose?: () => void
}

export default function Filter({ 
  options, 
  selectedFilters, 
  onToggleFilter, 
  onResetFilters,
  hasActiveFilters = false,
  activeFiltersCount = 0,
  isOpen = false,
  onToggle,
  onClose
}: FilterProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<string>(options[0]?.key || '')
  const dropdownRef = useRef<HTMLDivElement>(null)

  const dropdownIsOpen = onToggle ? isOpen : internalIsOpen

  const toggleDropdown = () => {
    if (onToggle) {
      onToggle()
    } else {
      setInternalIsOpen(prev => !prev)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (onClose) {
          onClose()
        } else {
          setInternalIsOpen(false)
        }
      }
    }

    if (dropdownIsOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownIsOpen, onClose])

  const handleResetFilters = () => {
    onResetFilters()
  }

  return (
    <div className={styles.filterWrapper} ref={dropdownRef}>
      <button
        className={clsx(styles.filterButton, {
          [styles.hasFilters]: hasActiveFilters
        })}
        onClick={toggleDropdown}
        aria-expanded={dropdownIsOpen}
      >
        <ListFilter size={16} className={styles.filterIcon} />
        <span className={styles.filterButtonText}>
          Filter{hasActiveFilters ? ` (${activeFiltersCount})` : ''}
        </span>
        <svg
          className={clsx(styles.arrowIcon, {
            [styles.arrowIconOpen]: dropdownIsOpen
          })}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {dropdownIsOpen && (
        <div className={clsx(styles.filterDropdown, styles.filterDropdownOpen)}>
          <div className={styles.filterTabs}>
            {options.map(option => (
              <button
                key={option.key}
                className={clsx(styles.filterTab, {
                  [styles.activeTab]: activeTab === option.key
                })}
                onClick={() => setActiveTab(option.key)}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className={styles.filterOptions}>
            {options.map(option => (
              activeTab === option.key && (
                <div key={option.key} className={styles.filterTags}>
                  {option.values.map(value => (
                    <button
                      key={value}
                      className={clsx(styles.filterTag, {
                        [styles.activeTag]: selectedFilters[option.key]?.includes(value)
                      })}
                      onClick={() => onToggleFilter(option.key, value)}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              )
            ))}
          </div>

          <div className={styles.filterFooter}>
            <button
              className={styles.resetButton}
              onClick={handleResetFilters}
              disabled={!hasActiveFilters}
            >
              Reset All Filters
            </button>
          </div>
        </div>
      )}
    </div>
  )
}