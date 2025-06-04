'use client'
import styles from './MentorInfo.module.scss'
import Image from 'next/image'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import LeanerReviewsCard from '@/shared/ui/LeanerReviewsCard/LeanerReviewCard';


export default function MentorInfo() {
    return (
        <div className={styles.container}>
            <div className={styles.containerNamePhoto}>
                <div className={styles.containerNameInstructor}>
                    <p className={styles.job}>Instructor</p>
                    <p className={styles.name }>Ronald Richards</p>
                    <p className={ styles.skills}>Web developer, UI/UX Designer and Teacher</p>
                    <div className={styles.TotalReviews}>
                        <div className={styles.Total}>
                            <p className={styles.TotalStudents}>Total Students</p>
                            <p className={styles.TotalStudentsEquals}>1000</p>
                        </div>
                        <div className={styles.Reviews}>
                            <p className={styles.nameReviews}>Reviews</p>
                            <p className={styles.ReviewsEquals}>154</p>
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
                    <p className={styles.infoAboutInstructor}>Ronald Richard is a highly skilled UX/UI Designer with over a decade of experience in crafting user-centric digital solutions. With a background in graphic design and a keen eye for detail, Ronald specializes in creating intuitive interfaces that delight users and drive business results.</p>
                    <p className={styles.titleExpertise}>Areas of Expertise</p>
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
                    <p className={styles.titleProfExpertise}>Professional Experience</p>
                    <p className={styles.infoProfExpertise}>Ronald Richard has an extensive professional background in UX/UI design, having worked with renowned companies such as [Company Name] and [Company Name]. His portfolio includes a diverse range of projects spanning web applications, mobile apps, and e-commerce platforms.</p>
                </div>
                <div className={styles.containerSocialMediaButtons}>
                    <div className={styles.socialMediaButton}>Website</div>
                    <div className={styles.socialMediaButton}>Twitter</div>
                    <div className={styles.socialMediaButton}>Youtube</div>
                    <div className={styles.socialMediaButton}>AnyButton😉</div>
                </div>
            </div>

            <h3 className={ styles.nameLeanerReviews}>Leaner Reviews</h3> 
            <div className={styles.containerRatingReviews}>
                <div className={styles.containerRating}>
                    <div className={styles.containerImgStarRatingReviews}>
                        <div className={styles.containerImgStar}>
                            <img
                                src='/icons/icon-star3.svg'
                                alt='SkillBoost'
                                width={16}
                                height={16}
                            />
                        </div>
                        <div className={styles.containerTotalStarRating}> 4.6</div>
                        <div className={styles.containerTotalReviews}>146,951 reviews</div>
                    </div>
                    <div className={styles.containerReviewStar}>
                        <Stack spacing={1}>
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                        </Stack> 
                        <p>80%</p>
                    </div>
                    <div className={styles.containerReviewStar}>
                        <Stack spacing={1}>
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                        </Stack> 
                        <p>10%</p>
                    </div>
                    <div className={styles.containerReviewStar}>
                        <Stack spacing={1}>
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                        </Stack>
                        <p>5%</p>
                    </div>
                    <div className={styles.containerReviewStar}>
                        <Stack spacing={1}>
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                        </Stack> 
                        <p>3%</p>
                    </div>
                    <div className={styles.containerReviewStar}>
                        <Stack spacing={1}>
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                        </Stack> 
                        <p>2%</p>
                    </div>
                </div>
                <div className={styles.containerReviews}>
                    <LeanerReviewsCard
                        name='Mark Doe'
                        date='22'
                        rating={3}
                        avatar='/assets/img-profile.png'
                        text='I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.'
                    />
                    <LeanerReviewsCard
                        name='Mark Doe'
                        date='22'
                        rating={3}
                        avatar='/assets/img-profile.png'
                        text='I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.'
                    />
                    <LeanerReviewsCard
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