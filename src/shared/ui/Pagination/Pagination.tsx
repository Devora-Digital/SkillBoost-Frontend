import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './Pagination.module.scss'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = ''
}: PaginationProps) {
  if (totalPages <= 1) {
    return null
  }

  const getVisiblePages = () => {
    const pages: (number | string)[] = []
    const maxVisible = 5
    const halfVisible = Math.floor(maxVisible / 2)

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      let start = Math.max(1, currentPage - halfVisible)
      let end = Math.min(totalPages, currentPage + halfVisible)

      if (currentPage <= halfVisible) {
        end = maxVisible
      } else if (currentPage >= totalPages - halfVisible) {
        start = totalPages - maxVisible + 1
      }

      if (start > 1) {
        pages.push(1)
        if (start > 2) {
          pages.push('...')
        }
      }
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
      if (end < totalPages) {
        if (end < totalPages - 1) {
          pages.push('...')
        }
        pages.push(totalPages)
      }
    }

    return pages
  }

  const visiblePages = getVisiblePages()

  return (
    <div className={`${styles.pagination} ${className}`}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${styles.paginationButton} ${styles.paginationArrow}`}
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>

      {visiblePages.map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className={styles.paginationEllipsis}>...</span>
          ) : (
            <button
              onClick={() => onPageChange(page as number)}
              className={`${styles.paginationButton} ${
                currentPage === page ? styles.paginationActive : ''
              }`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${styles.paginationButton} ${styles.paginationArrow}`}
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  )
}