
import styles from './LeanerReviewsCard.module.scss'
import Image from 'next/image'
// import { useState } from 'react' 

interface ReviewsCardProps{
    date: string
    name: string
    rating: number 
    text: string
    avatar: string
}
const LeanerReviewsCard: React.FC<ReviewsCardProps> = ({
    date, name, rating, text, avatar
}) => {


    return (
        <div className={styles.containerCard}>
            <div className={styles.containerPhotoName}>
                <Image
                    src={avatar}
                    alt='SkillBoost'
                    width={50}
                    height={50}
                />
                <p>{name}</p>
            </div>
            <div className={styles.containerStarsReviews}>
                <div className={styles.containerRatingDate}>       
                    <div className={styles.containerIconStar}>
                        <Image
                            src='/icons/icon-star.svg'
                            alt='SkillBoost'
                            width={16}
                            height={16}
                            />
                        <span>{rating}</span> 
                    </div>
                    <span> Reviewed on { date }nd March, 2025</span>
                </div>
                <div className={styles.containerReviewText}>
                    <p className={styles.containerText}>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default LeanerReviewsCard

