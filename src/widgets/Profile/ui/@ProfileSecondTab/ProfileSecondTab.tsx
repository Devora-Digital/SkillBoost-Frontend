'use client'
import { useState, useMemo, useEffect } from 'react'
import styles from './ProfileSecondTab.module.scss'
import { Search, X } from 'lucide-react'
import Sort from '@/shared/ui/SortComponent/Sort'
import Filter, {
  FilterOption,
  FilterState
} from '@/shared/ui/FilterComponent/Filter'
import { CourseCardUser } from '@/shared/ui/CourseCardUser/CourseCardUser'
import Pagination from '@/shared/ui/Pagination/Pagination'

const sortOptions = ['Newness', 'Popularity', 'Rating', 'Price']
const cardsOnPage = 12

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

const courses = [
  {
    id: 1,
    title: "Beginner's Guide to Design",
    creator: 'Ronald Richards',
    imageUrl: '/assets/img-course.png',
    rating: 5,
    totalRatings: 1200,
    progress: 75,
    category: 'Design',
    level: 'Beginner',
    price: 'Paid'
  },
  {
    id: 2,
    title: "Beginner's Guide to Design",
    creator: 'Ronald Richards',
    imageUrl: '/assets/img-course.png',
    rating: 4,
    totalRatings: 850,
    progress: 10,
    category: 'Programming',
    level: 'Beginner',
    price: 'Free'
  },
  {
    id: 3,
    title: "Beginner's Guide to Design",
    creator: 'Ronald Richards',
    imageUrl: '/assets/img-course.png',
    rating: 5,
    totalRatings: 2100,
    progress: 45,
    category: 'Design',
    level: 'Intermediate',
    price: 'Paid'
  },
  {
    id: 4,
    title: "Beginner's Guide to Design",
    creator: 'Ronald Richards',
    imageUrl: '/assets/img-course.png',
    rating: 4,
    totalRatings: 950,
    progress: 100,
    category: 'Programming',
    level: 'Advanced',
    price: 'Paid'
  },
  {
    id: 5,
    title: "Beginner's Guide to Design",
    creator: 'Ronald Richards',
    imageUrl: '/assets/img-course.png',
    rating: 4,
    totalRatings: 950,
    progress: 100,
    category: 'Programming',
    level: 'Advanced',
    price: 'Paid'
  },
  {
    id: 6,
    title: "Beginner's Guide to Design",
    creator: 'Ronald Richards',
    imageUrl: '/assets/img-course.png',
    rating: 4,
    totalRatings: 950,
    progress: 100,
    category: 'Programming',
    level: 'Advanced',
    price: 'Paid'
  },
  {
    id: 7,
    title: "Beginner's Guide to Design",
    creator: 'Ronald Richards',
    imageUrl: '/assets/img-course.png',
    rating: 4,
    totalRatings: 950,
    progress: 100,
    category: 'Programming',
    level: 'Advanced',
    price: 'Paid'
  },
  {
    id: 8,
    title: "Beginner's Guide to Design",
    creator: 'Ronald Richards',
    imageUrl: '/assets/img-course.png',
    rating: 4,
    totalRatings: 950,
    progress: 100,
    category: 'Programming',
    level: 'Advanced',
    price: 'Paid'
  },
  {
    id: 9,
    title: "Beginner's Guide to Design",
    creator: 'Ronald Richards',
    imageUrl: '/assets/img-course.png',
    rating: 4,
    totalRatings: 950,
    progress: 100,
    category: 'Programming',
    level: 'Advanced',
    price: 'Paid'
  },
  {
    id: 10,
    title: "Beginner's Guide to Design",
    creator: 'Ronald Richards',
    imageUrl: '/assets/img-course.png',
    rating: 4,
    totalRatings: 950,
    progress: 100,
    category: 'Programming',
    level: 'Advanced',
    price: 'Paid'
  },
  {
    id: 11,
    title: "Beginner's Guide to Design",
    creator: 'Ronald Richards',
    imageUrl: '/assets/img-course.png',
    rating: 4,
    totalRatings: 950,
    progress: 100,
    category: 'Programming',
    level: 'Advanced',
    price: 'Paid'
  },
  {
    id: 12,
    title: "Beginner's Guide to Design",
    creator: 'Ronald Richards',
    imageUrl: '/assets/img-course.png',
    rating: 4,
    totalRatings: 950,
    progress: 100,
    category: 'Programming',
    level: 'Advanced',
    price: 'Paid'
  },
  {
    id: 13,
    title: "Beginner's Guide to Design",
    creator: 'Ronald Richards',
    imageUrl: '/assets/img-course.png',
    rating: 4,
    totalRatings: 950,
    progress: 100,
    category: 'Programming',
    level: 'Advanced',
    price: 'Paid'
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
  const [currentPage, setCurrentPage] = useState(1)
  const [openDropdown, setOpenDropdown] = useState<'sort' | 'filter' | null>(
    null
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedFilters, searchTerm, selectedSort])

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.creator.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory =
        selectedFilters.category.length === 0 ||
        selectedFilters.category.includes(course.category)
      const matchesLevel =
        selectedFilters.level.length === 0 ||
        selectedFilters.level.includes(course.level)
      const matchesPrice =
        selectedFilters.price.length === 0 ||
        selectedFilters.price.includes(course.price)

      return matchesSearch && matchesCategory && matchesLevel && matchesPrice
    })
  }, [courses, searchTerm, selectedFilters])

  const sortedAndFilteredCourses = useMemo(() => {
    const coursesCopy = [...filteredCourses]

    switch (selectedSort) {
      case 'Popularity':
        return coursesCopy.sort((a, b) => b.totalRatings - a.totalRatings)
      case 'Rating':
        return coursesCopy.sort((a, b) => b.rating - a.rating)
      case 'Price':
        return coursesCopy.sort((a, b) => (a.price === 'Free' ? -1 : 1))
      case 'Newness':
      default:
        return coursesCopy
    }
  }, [filteredCourses, selectedSort])

  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * cardsOnPage
    const endIndex = Math.min(
      startIndex + cardsOnPage,
      sortedAndFilteredCourses.length
    )
    return sortedAndFilteredCourses.slice(startIndex, endIndex)
  }, [currentPage, sortedAndFilteredCourses])

  const totalPages = Math.ceil(sortedAndFilteredCourses.length / cardsOnPage)
  const shouldShowPagination = totalPages > 1

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

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
      <div className={styles.tabTopNav}>
        <h2 className={styles.tabCount}>
          Courses ({sortedAndFilteredCourses.length})
        </h2>

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

      <div className={styles.contentWrapper}>
        <div className={styles.tabBoxCards}>
          {paginatedCourses.length === 0 ? (
            <div className={styles.noCourses}>
              <p className={styles.noCoursesText}>
                No courses found matching your criteria
              </p>
            </div>
          ) : (
            paginatedCourses.map((course) => (
              <CourseCardUser
                key={`${course.id}-${course.title}-${course.creator}`}
                title={course.title}
                creator={course.creator}
                imageUrl={course.imageUrl}
                progress={course.progress}
                rating={course.rating}
                totalRatings={course.totalRatings}
              />
            ))
          )}
        </div>

        {shouldShowPagination && (
          <div className={styles.paginationWrapper}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  )
}
