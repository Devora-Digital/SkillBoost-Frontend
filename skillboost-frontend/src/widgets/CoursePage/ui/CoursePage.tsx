'use client'
import styles from './CoursePage.module.scss'
import Image from 'next/image'


export default function CoursePage() { 
    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>Introduction to User Experience Design</h1>
            <p className={styles.paragraph}>This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape.</p>
            <div className={styles.containerStartHoursLectures}>
                <div className={styles.itemNumber}>4.6</div>
                <div className={styles.itemStars}>stars</div>
                <div className={styles.ItemRatingHoursLectures}>(651651 rating) | 22 Total Hours. 155 Lectures. All levels</div>
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
                <div className={styles.itemLanguages}>English, Spanish, Italian, German</div>  
            </div>

        </div>
    )
}