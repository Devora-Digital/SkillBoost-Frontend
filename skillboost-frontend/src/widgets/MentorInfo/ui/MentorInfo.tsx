'use client'
import styles from './MentorInfo.module.scss'
import Image from 'next/image'

export default function MentorInfo() {
    return (
            <div className={styles.container}>
                <div className={styles.containerAside}>
                    <p>Instructor</p>
                    <p>Ronald Richards</p>
                    <p>Web developer, UI/UX Designer and Teacher</p>
                    <div className={styles.containerStudents}>
                        <p>Total Students</p>
                        <p>1000</p>
                    </div>
                    <div className={styles.containerReviews}>
                        <p>Reviews</p>
                        <p>154</p>
                    </div>
                </div>
                <div className={styles.containerPhoto}>
                    <Image
                        className={styles.headerLogoIcon}
                        src='/assets/img-profile.png'
                        alt='SkillBoost'
                        width={200}
                        height={200}
                        />
                </div>
                <div></div>
            </div>
    )

}