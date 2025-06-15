"use client"

import { useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import CustomerQuotesCard from "./CustomerQuotesCard/CustomerQuotesCard"
import { LucideChevronLeft, LucideChevronRight } from "lucide-react"
import { customersQuotes, customerQuote } from "@/data/customerQuotesData"
import styles from "./CustomerQuotes.module.scss"

export default function CustomerQuotes() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    useEffect(() => {
        if (!emblaApi) return;
        const autoScroll = setInterval(() => {
            emblaApi.scrollNext()
        }, 5000)
        return () => clearInterval(autoScroll)
    }, [emblaApi])
    const chunkArray = <T,>(array: T[], size: number): T[][] => {
        return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
            array.slice(i * size, i * size + size)
        );
    }
    const groupedQuotes = chunkArray(customersQuotes, 3)
    return (
        <div className={styles.quotes_block} >
          <div className={styles.quotes_block_header}>
            <p className={styles.quotes_block_header_title}>
              What Our Customer Say About Us
            </p>
            <div className={styles.quotes_block_header_buttons_block}>
              <button className={styles.quotes_navigation_block} onClick={() => emblaApi?.scrollPrev()} >
                <LucideChevronLeft />
              </button>
              <button className={styles.quotes_navigation_block} onClick={() => emblaApi?.scrollPrev()} >
                <LucideChevronRight />
              </button>
            </div>
          </div>
          <div className={`${styles.quotes_block_quotes} embla__container`} ref={emblaRef} >
                {groupedQuotes.map((group, index) => (
                    // <div key={index} className={`embla__slide ${styles.quotes_block_quotes_item}`} >
                    // Реагирует на embla__slide
                    <div key={index} className="embla__slide" >
                      {group.map((quote, index) => {
                        return (
                          <CustomerQuotesCard key={index} quote_text={quote.quote_text} author_name={quote.author_name} author_post={quote.author_post} />
                        )
                      })}
                    </div>
                ))}
          </div>
        </div>
    )
}
