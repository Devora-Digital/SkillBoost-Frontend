import styles from './CoursePage.module.scss'
import Image from 'next/image'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import Link from 'next/link'
import { Breadcrumbs } from '@/shared/ui/BreadCrumbs/BreadCrumbs'

export default function CoursePage() {
  const breadcrumbs = [
    {
      title: 'HomePage',
      href: '/'
    },
    {
      title: 'Categories',
      href: '/categories'
    },
    {
      title: 'Course',
      href: '',
      arrow: true
    }
  ]
  return (
    <div className={styles.container}>
      <Breadcrumbs items={breadcrumbs} />
      <div className={styles.containerRatingDiscount}>
        <div className={styles.containerRating}>
          <h2 className={styles.mainTitle}>
            Introduction to User Experience Design
          </h2>
          <p className={styles.paragraphText}>
            This course is meticulously crafted to provide you with a
            foundational understanding of the principles, methodologies, and
            tools that drive exceptional user experiences in the digital
            landscape.
          </p>
          <div className={styles.containerStartHoursLectures}>
            <p className={styles.itemNumber}>4.6</p>
            <div className={styles.itemStars}>
              <Stack spacing={1}>
                <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
              </Stack>
            </div>
            <p className={styles.ItemRatingHoursLectures}>
              (651651 rating) | 22 Total Hours. 155 Lectures. All levels
            </p>
          </div>
          <div className={styles.containerMentorGap}>
            <div className={styles.itemPhoto}>
              <Image
                className={styles.instructorPhoto}
                src='/assets/img-profile.png'
                alt='SkillBoost'
                width={40}
                height={40}
              />
            </div>
            <p style={{ color: '#334155' }}>
              Created by{' '}
              <span style={{ color: '#2563eb' }}>Ronal Richards</span>
            </p>
          </div>
          <div className={styles.containerMentorGap}>
            <div className={styles.itemWordIcon}>
              <Image
                className={styles.instructorPhoto}
                src='/icons/icon-world.svg'
                alt='SkillBoost'
                width={20}
                height={20}
              />
            </div>
            <p className={styles.itemLanguages}>
              English, Spanish, Italian, German
            </p>
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
            <p className={styles.mentorButton}>Add to Cart</p>
            <p className={styles.mentorButton}>Buy Now</p>
          </div>
          <p className={styles.shareText}>Share</p>
          <ul className={styles.mentorColumnSoc}>
            <li className={styles.mentorSocIcon}>
              <Link href='#'>
                <Image
                  src='/icons/icon-fb.svg'
                  alt='SkillBoost'
                  className={styles.mentorSocImg}
                  width={40}
                  height={40}
                />
              </Link>
            </li>
            <li className={styles.mentorSocIcon}>
              <Link href='#'>
                <Image
                  src='/icons/icon-github.svg'
                  alt='SkillBoost'
                  className={styles.mentorSocImg}
                  width={40}
                  height={40}
                />
              </Link>
            </li>
            <li className={styles.mentorSocIcon}>
              <Link href='#'>
                <Image
                  src='/icons/icon-google.svg'
                  alt='SkillBoost'
                  className={styles.mentorSocImg}
                  width={40}
                  height={40}
                />
              </Link>
            </li>
            <li className={styles.mentorSocIcon}>
              <Link href='#'>
                <Image
                  src='/icons/icon-x.svg'
                  alt='SkillBoost'
                  className={styles.mentorSocImg}
                  width={40}
                  height={40}
                />
              </Link>
            </li>
            <li className={styles.mentorSocIcon}>
              <Link href='#'>
                <Image
                  src='/icons/icon-microsoft.svg'
                  alt='Skillboost'
                  className={styles.mentorSocImg}
                  width={40}
                  height={40}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
