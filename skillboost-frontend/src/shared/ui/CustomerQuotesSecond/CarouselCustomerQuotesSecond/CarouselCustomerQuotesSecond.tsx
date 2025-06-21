
import { useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import type { EmblaCarouselType } from 'embla-carousel';
import Image from "next/image"
// import { LucideChevronLeft, LucideChevronRight } from "lucide-react"
import QuoteMarkIcon from '@icons/ri_double-quotes-l.svg'
import DesignerPhoto from "@assets/Designer_image_01.jpeg"
import { customersQuotes, customerQuote } from "@/data/customerQuotesData"
import styles from "./CarouselCustomerQuotesSecond.module.scss"

type EmblaCarouselProps = {
    groupedQuotes: customerQuote[][];
    onApiReady?: (api: EmblaCarouselType) => void;
}

export default function CarouselCustomerQuotesSecond({ groupedQuotes, onApiReady }: EmblaCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
    useEffect(() => {
        if (emblaApi) {
            onApiReady?.(emblaApi);
            const slides = document.querySelectorAll(`.${styles.embla__slide}`);
            console.log('Слайдов в DOM:', slides.length);
            console.log('Embla carousel инициализирована. Snap list:', emblaApi.scrollSnapList().length);
        }
    }, [emblaApi, onApiReady])
    return (
        <div className={styles.quotes_block_quotes} key={groupedQuotes.length} >
            <div className={styles.embla__container} ref={emblaRef} >
                {/* {groupedQuotes.length > 0 && groupedQuotes.map((group, index) => ( */}
                {groupedQuotes.map((group, index) => (
                    <div key={index} className={styles.embla__slide} >
                        {group.map((quote, subIndex) => (
                            <div key={subIndex} className={styles.quotes_block_quotes_item} >
                                <Image src={QuoteMarkIcon} alt='Quote mark icon' />
                                <p className={styles.quotes_block_quote_text} >
                                  {quote.quote_text}
                                </p>
                                <div className={styles.quotes_block_author}>
                                  <Image
                                    src={DesignerPhoto}
                                    className={styles.quotes_block_author_photo}
                                    alt='Designer photo'
                                  />
                                  <div className={styles.quotes_block_author_inside}>
                                    <p className={styles.quotes_block_author_name}>{quote.author_name}</p>
                                    <p className={styles.quotes_block_author_post}>{quote.author_post}</p>
                                  </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
