import Image from 'next/image'
import styles from './CourseCardUser.module.scss'

interface Props {
  title: string
  creator: string
  imageUrl?: string
  rating?: number
  totalRatings?: number
  progress?: number
}

export const CourseCardUser = ({
  title,
  creator,
  imageUrl,
  rating,
  totalRatings,
  progress
}: Props) => {
  const renderStars = (rating: number) => {
    const rounded = Math.round(rating)
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={index < rounded ? styles.starFilled : styles.starEmpty}
      >
        ★
      </span>
    ))
  }
  

  return (
    <div className={styles.cardContainer}>
      {imageUrl && (
        <div className={styles.imageContainer}>
          <Image
            className={styles.courseImage}
            src={imageUrl}
            alt={`Course image for ${title}`}
            width={300}
            height={200}
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}

      <h3 className={styles.courseTitle}>{title}</h3>
      <p className={styles.courseCreator}>By {creator}</p>
      {progress !== undefined && (
        <div className={styles.progressContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
          />
        </div>
      )}
      {rating !== undefined && totalRatings !== undefined && (
        <div className={styles.ratingContainer}>
          <div className={styles.stars}>{renderStars(rating)}</div>
          <span className={styles.ratingText}>
            ({totalRatings.toLocaleString()} Ratings)
          </span>
        </div>
      )}
    </div>
  )
}
