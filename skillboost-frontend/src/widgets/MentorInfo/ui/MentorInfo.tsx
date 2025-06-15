'use client'
import styles from './MentorInfo.module.scss'
import Image from 'next/image'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import LearnerReviewsCard from '@/shared/ui/LearnerReviewsCard/LearnerReviewCard'

export default function MentorInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.containerNamePhoto}>
        <div className={styles.containerNameInstructor}>
          <p className={styles.mentorText}>Instructor</p>
          <p className={styles.mentorName}>Ronald Richards</p>
          <p className={styles.mentorText}>
            Web developer, UI/UX Designer and Teacher
          </p>
          <div className={styles.totalReviews}>
            <div className={styles.total}>
              <p className={styles.totalTitle}>Total Students</p>
              <p className={styles.totalText}>1000</p>
            </div>
            <div className={styles.reviews}>
              <p className={styles.totalTitle}>Reviews</p>
              <p className={styles.totalText}>154</p>
            </div>
          </div>
        </div>
        <div className={styles.containerPhoto}>
          <Image
            className={styles.instructorPhoto}
            src='/assets/img-profile.png'
            alt='SkillBoost'
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className={styles.containerInstructorInfoButtons}>
        <div className={styles.containerInfoInstructor}>
          <p className={styles.containerInstructorTitle}>
            About Ronald Richard
          </p>
          <p className={styles.containerInstructorText}>
            Ronald Richard is a highly skilled UX/UI Designer with over a decade
            of experience in crafting user-centric digital solutions. With a
            background in graphic design and a keen eye for detail, Ronald
            specializes in creating intuitive interfaces that delight users and
            drive business results.
          </p>
          <p className={styles.containerInstructorTitle}>Areas of Expertise</p>
          <ul className={styles.listExpertise}>
            <li>User Experience (UX) Design</li>
            <li>User Interface (UI) Design</li>
            <li>Information Architecture</li>
            <li>Interaction Design</li>
            <li>Visual Design</li>
            <li>Usability Testing</li>
            <li>Wireframing and Prototyping</li>
            <li>Design Thinking</li>
          </ul>
          <p className={styles.containerInstructorTitle}>
            Professional Experience
          </p>
          <p className={styles.containerInstructorText}>
            Ronald Richard has an extensive professional background in UX/UI
            design, having worked with renowned companies such as [Company Name]
            and [Company Name]. His portfolio includes a diverse range of
            projects spanning web applications, mobile apps, and e-commerce
            platforms.
          </p>
        </div>
        <div className={styles.containerSocialMediaButtons}>
          <button className={styles.socialMediaButton}>Website</button>
          <button className={styles.socialMediaButton}>Twitter</button>
          <button className={styles.socialMediaButton}>Youtube</button>
        </div>
      </div>
      <h3 className={styles.reviewsTitle}>Leaner Reviews</h3>
      <div className={styles.containerRatingReviews}>
        <div className={styles.containerRating}>
          <div className={styles.containerImgStarRatingReviews}>
            <div className={styles.containerImgStar}>
              <Image
                src='/icons/icon-star3.svg'
                alt='SkillBoost'
                width={16}
                height={16}
              />
              <p className={styles.containerTotalStarRating}> 4.6</p>
            </div>
            <p className={styles.containerTotalReviewsText}>146,951 reviews</p>
          </div>
          <div className={styles.containerReviewStar}>
            <Stack spacing={1}>
              <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
            </Stack>
            <p>80%</p>
          </div>
          <div className={styles.containerReviewStar}>
            <Stack spacing={1}>
              <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
            </Stack>
            <p>10%</p>
          </div>
          <div className={styles.containerReviewStar}>
            <Stack spacing={1}>
              <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
            </Stack>
            <p>5%</p>
          </div>
          <div className={styles.containerReviewStar}>
            <Stack spacing={1}>
              <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
            </Stack>
            <p>3%</p>
          </div>
          <div className={styles.containerReviewStar}>
            <Stack spacing={1}>
              <Rating name='half-rating' defaultValue={2.5} precision={0.5} />
            </Stack>
            <p>2%</p>
          </div>
        </div>
        <div className={styles.containerReviews}>
          <LearnerReviewsCard
            name='Mark Doe'
            date='22'
            rating={3}
            avatar='/assets/img-profile.png'
            text='I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.'
          />
          <LearnerReviewsCard
            name='Mark Doe'
            date='22'
            rating={3}
            avatar='/assets/img-profile.png'
            text='I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.'
          />
          <LearnerReviewsCard
            name='Mark Doe'
            date='22'
            rating={3}
            avatar='/assets/img-profile.png'
            text='I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.'
          />
        </div>
      </div>
    </div>
  )
}
