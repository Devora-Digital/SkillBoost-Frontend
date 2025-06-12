"use client"

import { LucideChevronLeft, LucideChevronRight } from "lucide-react"
import CustomerQuotesCard from "./CustomerQuotesCard/CustomerQuotesCard"
import styles from "./CustomerQuotes.module.scss"

export default function CustomerQuotes() {
    return (
        <div className={styles.quotes_block}>
          <div className={styles.quotes_block_header}>
            <p className={styles.quotes_block_header_title}>
              What Our Customer Say About Us
            </p>
            <div className={styles.quotes_block_header_buttons_block}>
              <button className={styles.quotes_navigation_block}>
                <LucideChevronLeft />
              </button>
              <button className={styles.quotes_navigation_block}>
                <LucideChevronRight />
              </button>
            </div>
          </div>
          <div className={styles.quotes_block_quotes}>
            <CustomerQuotesCard />
          </div>
        </div>
    )
}
