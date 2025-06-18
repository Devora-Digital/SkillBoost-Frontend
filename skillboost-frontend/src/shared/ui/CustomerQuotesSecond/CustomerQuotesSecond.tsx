"use client"

import { useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { LucideChevronLeft, LucideChevronRight } from "lucide-react"
import QuoteMarkIcon from '@icons/ri_double-quotes-l.svg'
import DesignerPhoto from "@assets/Designer_image_01.jpeg"
import { customersQuotes, customerQuote } from "@/data/customerQuotesData"
import styles from "./CustomerQuotesSecond.module.scss"

export default function CustomerQuotesSecond() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    useEffect(() => {
        if (!emblaApi) return;
        console.log("Количество embla__slide: ", emblaApi.scrollSnapList().length);
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
          {/* <div className={`${styles.quotes_block_quotes} embla__container`} ref={emblaRef} > */}
          <div className={styles.quotes_block_quotes}>
              <div className={styles.embla__container} ref={emblaRef} >
                {groupedQuotes.map((group, index) => (
                    <div key={index} className={styles.embla__slide} >
                      {group.map((quote, index) => (
                          <div key={index} className={styles.quotes_block_quotes_item}>
                            <Image src={QuoteMarkIcon} alt='Quote mark icon' />
                            <p className={styles.quotes_block_quote_text}>
                              &quot;Byway&apos;s tech courses are top-notch! As someone
                              who&apos;s always looking to stay ahead in the rapidly evolving
                              tech world, I appreciate the up-to-date content and engaging
                              multimedia.
                            </p>
                            <div className={styles.quotes_block_author}>
                              <Image
                                src={DesignerPhoto}
                                className={styles.quotes_block_author_photo}
                                alt='Designer photo'
                              />
                              <div className={styles.quotes_block_author_inside}>
                                <p className={styles.quotes_block_author_name}>Jane Doe</p>
                                <p className={styles.quotes_block_author_post}>Designer</p>
                              </div>
                            </div>
                          </div>
                      ))}
                    </div>
                ))}
              </div>
          </div>
        </div>
    )
}
