'use client'
import styles from './MentorInfo.module.scss'
import Image from 'next/image'

export default function MentorInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.containerNamePhoto}>
        <div className={styles.containerNameInstructor}>
          <p className={styles.containerText}>Instructor</p>
          <p className={styles.name}>Ronald Richards</p>
          <p className={styles.skills}>
            Web developer, UI/UX Designer and Teacher
          </p>
          <div className={styles.totalReviews}>
            <div className={styles.total}>
              <p className={styles.containerText}>Total Students</p>
              <p className={styles.containerBoldText}>1000</p>
            </div>
            <div className={styles.reviews}>
              <p className={styles.containerText}>Reviews</p>
              <p className={styles.containerBoldText}>154</p>
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
          <p className={styles.titleAboutInstructor}>About Ronald Richard</p>
          <p className={styles.infoText}>
            Ronald Richard is a highly skilled UX/UI Designer with over a decade
            of experience in crafting user-centric digital solutions. With a
            background in graphic design and a keen eye for detail, Ronald
            specializes in creating intuitive interfaces that delight users and
            drive business results.
          </p>
          <p className={styles.containerTitle}>Areas of Expertise</p>
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
          <p className={styles.containerTitle}>Professional Experience</p>
          <p className={styles.infoText}>
            Ronald Richard has an extensive professional background in UX/UI
            design, having worked with renowned companies such as [Company Name]
            and [Company Name]. His portfolio includes a diverse range of
            projects spanning web applications, mobile apps, and e-commerce
            platforms.
          </p>
        </div>
        <div className={styles.containerSocialMediaButtons}>
          <div className={styles.socialMediaButton}>Website</div>
          <div className={styles.socialMediaButton}>Twitter</div>
          <div className={styles.socialMediaButton}>Youtube</div>
          <div className={styles.socialMediaButton}>AnyButton😉</div>
        </div>
      </div>
    </div>
  )
}
