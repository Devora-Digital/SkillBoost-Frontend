import styles from './LearnerReviewsCard.module.scss'
import Image from 'next/image'

interface ReviewsCardProps {
  date: string
  name: string
  rating: number
  text: string
  avatar: string
}

const LearnerReviewsCard: React.FC<ReviewsCardProps> = ({
  date,
  name,
  rating,
  text,
  avatar
}) => {
  return (
    <div className={styles.containerCard}>
      <div className={styles.containerPhotoName}>
        <Image src={avatar} alt='SkillBoost' width={50} height={50} />
        <p>{name}</p>
      </div>
      <div className={styles.containerStarsReviews}>
        <div className={styles.containerRatingDate}>
          <div className={styles.containerIconStar}>
            <Image
              src='/icons/icon-star3.svg'
              alt='Star rating'
              width={18}
              height={18}
            />
            <span className={styles.containerStarText}>{rating}</span>
          </div>
          <span className={styles.containerReviewText}>
            Reviewed on {date}nd March, 2025
          </span>
        </div>
        <div className={styles.containerReviewText}>
          <p className={styles.containerText}>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default LearnerReviewsCard
