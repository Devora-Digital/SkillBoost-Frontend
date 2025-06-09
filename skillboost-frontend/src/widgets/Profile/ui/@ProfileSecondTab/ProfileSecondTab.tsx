'use client'
import { useState } from 'react'
import styles from './ProfileSecondTab.module.scss'
import { Search, X } from 'lucide-react'
import Sort from '@/shared/ui/SortComponent/Sort'
import Filter, {
  FilterOption,
  FilterState
} from '@/shared/ui/FilterComponent/Filter'

const sortOptions = ['Newness', 'Popularity', 'Rating', 'Price']

const filterOptions: FilterOption[] = [
  {
    key: 'category',
    label: 'Category',
    values: ['Programming', 'Design', 'Marketing', 'Business']
  },
  {
    key: 'level',
    label: 'Level',
    values: ['Beginner', 'Intermediate', 'Advanced']
  },
  {
    key: 'price',
    label: 'Price',
    values: ['Free', 'Paid']
  }
]

export default function ProfileSecondTab() {
  const [selectedSort, setSelectedSort] = useState('Newness')
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({
    category: [],
    level: [],
    price: []
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [openDropdown, setOpenDropdown] = useState<'sort' | 'filter' | null>(
    null
  )

  const handleSortToggle = () => {
    setOpenDropdown((prev) => (prev === 'sort' ? null : 'sort'))
  }

  const handleFilterToggle = () => {
    setOpenDropdown((prev) => (prev === 'filter' ? null : 'filter'))
  }

  const handleCloseDropdowns = () => {
    setOpenDropdown(null)
  }

  const handleSortSelect = (value: string) => {
    setSelectedSort(value)
  }

  const toggleFilter = (type: string, value: string) => {
    setSelectedFilters((prev) => {
      const currentFilters = [...(prev[type] || [])]
      const index = currentFilters.indexOf(value)

      if (index === -1) {
        currentFilters.push(value)
      } else {
        currentFilters.splice(index, 1)
      }

      return {
        ...prev,
        [type]: currentFilters
      }
    })
  }

  const resetFilters = () => {
    setSelectedFilters({
      category: [],
      level: [],
      price: []
    })
  }

  const removeFilter = (type: string, value: string) => {
    toggleFilter(type, value)
  }

  const getActiveFiltersCount = () => {
    return Object.values(selectedFilters).reduce(
      (total, filters) => total + filters.length,
      0
    )
  }

  const hasActiveFilters = getActiveFiltersCount() > 0

  const getAllActiveFilters = () => {
    const allFilters: Array<{ type: string; value: string }> = []

    Object.entries(selectedFilters).forEach(([type, values]) => {
      values.forEach((value) => {
        allFilters.push({ type, value })
      })
    })

    return allFilters
  }

  return (
    <div className={styles.tabContainer}>
      <h2 className={styles.tabCount}>Courses (0)</h2>

      {hasActiveFilters && (
        <div className={styles.activeFiltersContainer}>
          <div className={styles.activeFilters}>
            {getAllActiveFilters().map(({ type, value }) => (
              <div key={`${type}-${value}`} className={styles.activeFilter}>
                {value}
                <button
                  onClick={() => removeFilter(type, value)}
                  className={styles.removeFilterButton}
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
          <button onClick={resetFilters} className={styles.resetAllButton}>
            Clear all
          </button>
        </div>
      )}

      <div className={styles.tabFilterBox}>
        <div className={styles.tabSearch}>
          <label className={styles.tabSearchLabel}>
            <input
              className={styles.tabSearchInput}
              type='text'
              placeholder='Search Course'
              aria-label='Search Course'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search color='#64748B' size={17} />
          </label>
        </div>

        <div className={styles.tabSort}>
          <Sort
            options={sortOptions}
            selectedValue={selectedSort}
            onSelect={handleSortSelect}
            hasFilters={hasActiveFilters}
            isOpen={openDropdown === 'sort'}
            onToggle={handleSortToggle}
            onClose={handleCloseDropdowns}
          />

          <Filter
            options={filterOptions}
            selectedFilters={selectedFilters}
            onToggleFilter={toggleFilter}
            onResetFilters={resetFilters}
            hasActiveFilters={hasActiveFilters}
            activeFiltersCount={getActiveFiltersCount()}
            isOpen={openDropdown === 'filter'}
            onToggle={handleFilterToggle}
            onClose={handleCloseDropdowns}
          />
        </div>
      </div>
    </div>
  )
}
