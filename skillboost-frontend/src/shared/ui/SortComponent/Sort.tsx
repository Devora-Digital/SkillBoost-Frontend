'use client'
import { useState, useEffect, useRef } from 'react'
import styles from './Sort.module.scss'
import clsx from 'clsx'

interface SortProps {
  options: string[]
  selectedValue: string
  onSelect: (value: string) => void
  label?: string
  hasFilters?: boolean
  isOpen?: boolean
  onToggle?: () => void
  onClose?: () => void
}

export default function Sort({ 
  options, 
  selectedValue, 
  onSelect, 
  label = "Sort By",
  hasFilters = false,
  isOpen = false,
  onToggle,
  onClose
}: SortProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
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

  const handleSelect = (value: string) => {
    onSelect(value)
    if (onClose) {
      onClose()
    } else {
      setInternalIsOpen(false)
    }
  }

  return (
    <div className={styles.sortContainer} ref={dropdownRef}>
      <p className={styles.sortLabel}>{label}</p>
      
      <div className={styles.selectWrapper}>
        <button
          className={clsx(styles.selectButton, {
            [styles.hasFilters]: hasFilters
          })}
          onClick={toggleDropdown}
          aria-expanded={dropdownIsOpen}
        >
          <span className={styles.selectButtonText}>{selectedValue}</span>
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
          <div className={clsx(styles.selectDropdown, styles.selectDropdownOpen)}>
            {options.map(option => (
              <button
                key={option}
                className={clsx(styles.selectOption, {
                  [styles.activeOption]: option === selectedValue
                })}
                onClick={() => handleSelect(option)}
              >
                <span>{option}</span>
                {option === selectedValue && (
                  <span className={styles.checkmark}>✓</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}