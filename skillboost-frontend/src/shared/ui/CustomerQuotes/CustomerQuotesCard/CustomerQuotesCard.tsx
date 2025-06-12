"use client"

import Image from "next/image"
import QuoteMarkIcon from "@icons/ri_double-quotes-l.svg"
import DesignerPhoto from "@assets/Designer_image_01.jpeg"
import styles from "./CustomerQuotesCard.module.scss"

export default function CustomerQuotesCard() {
    return (
        <div className={styles.quotes_block_quotes_item}>
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
    )
}

