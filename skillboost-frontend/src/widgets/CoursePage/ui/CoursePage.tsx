import styles from './CoursePage.module.scss'
import Image from 'next/image'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'

export default function CoursePage() {
  return (
    <div className={styles.container}>
      <div className={styles.containerRatingDiscount}>
        <div className={styles.containerRating}>
          <h1 className={styles.mainTitle}>
            Introduction to User Experience Design
          </h1>
          <p className={styles.paragraphText}>
            This course is meticulously crafted to provide you with a
            foundational understanding of the principles, methodologies, and
            tools that drive exceptional user experiences in the digital
            landscape.
          </p>
          <div className={styles.containerStartHoursLectures}>
            <div className={styles.itemNumber}>4.6</div>
            <div className={styles.itemStars}>
              <Stack spacing={1}>
                <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
              </Stack>
            </div>
            <div className={styles.ItemRatingHoursLectures}>
              (651651 rating) | 22 Total Hours. 155 Lectures. All levels
            </div>
          </div>
          <div className={styles.containerPhotoName}>
            <div className={styles.itemPhoto}>
              <Image
                className={styles.instructorPhoto}
                src='/assets/img-profile.png'
                alt='SkillBoost'
                width={40}
                height={40}
              />
            </div>
            <div className={styles.itemName}>Created by Ronal Richards</div>
          </div>
          <div className={styles.containerWorldIconLanguages}>
            <div className={styles.itemWordIcon}>
              <Image
                className={styles.instructorPhoto}
                src='/icons/icon-world.svg'
                alt='SkillBoost'
                width={20}
                height={20}
              />
            </div>
            <div className={styles.itemLanguages}>
              English, Spanish, Italian, German
            </div>
          </div>
              </div>
              

        <div className={styles.containerDiscount}>
          <Image
            className={styles.discountPhoto}
            src='/assets/image-discount.svg'
            alt='SkillBoost'
            width={280}
            height={200}
          />
          <div className={styles.containerPrice}>
            <p className={styles.lastPrice}>$49.5</p>
            <p className={styles.firstPrice}>$99.5</p>
            <p className={styles.discountPercent}>50% Off</p>
          </div>
          <div className={styles.containerButtons}>
            <div className={styles.blackButton}>Label</div>
            <div className={styles.whiteButton}>Label</div>
          </div>
          <p className={styles.shareText}>Share</p>
          <div>
            <ul className={styles.footerColumnSoc}>
              <li className={styles.footerSocIcon}>
                <a href='#'>
                  <Image
                    src='/icons/icon-fb.svg'
                    alt='SkillBoost'
                    className={styles.footerSocImg}
                    width={40}
                    height={40}
                  />
                </a>
              </li>
              <li className={styles.footerSocIcon}>
                <a href='#'>
                  <Image
                    src='/icons/icon-github.svg'
                    alt='SkillBoost'
                    className={styles.footerSocImg}
                    width={40}
                    height={40}
                  />
                </a>
              </li>
              <li className={styles.footerSocIcon}>
                <a href='#'>
                  <Image
                    src='/icons/icon-google.svg'
                    alt='SkillBoost'
                    className={styles.footerSocImg}
                    width={40}
                    height={40}
                  />
                </a>
              </li>
              <li className={styles.footerSocIcon}>
                <a href='#'>
                  <Image
                    src='/icons/icon-x.svg'
                    alt='SkillBoost'
                    className={styles.footerSocImg}
                    width={40}
                    height={40}
                  />
                </a>
              </li>
              <li className={styles.footerSocIcon}>
                <a href='#'>
                  <Image
                    src='/icons/icon-microsoft.svg'
                    alt='SKILLBOOST'
                    className={styles.footerSocImg}
                    width={40}
                    height={40}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
