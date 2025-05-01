"use client"

import Image from "next/image";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import BannerImageFirst from "@assets/Banner_Image_01.png"
import BannerImageSecond from "@assets/Banner_Image_02.png"
import BannerImageThird from "@assets/Banner_Image_03.png"
import BannerPeopleFirst from "@assets/BannerPeopleFirst.png"
import FirstMiniCircles from "@icons/mini_circles_1.svg"
import SecondMiniCircles from '@icons/mini_circles_2.svg'
import BlueMiniCirclesFirst from "@icons/Blue_mini_circles_first.svg"
import BannerEllipseFirst from '@icons/BannerEllipseFirst.svg'
import BannerEllipseSecond from '@icons/BannerEllipseSecond.svg'
import BannerEllipseThird from '@icons/BannerEllipseThird.svg'
import StudentsCommunityAvatars from '@icons/Students_community_avatars.svg'
import CertificateIcon from "@icons/Certificate-icon-01.svg"
import CoursesRatingIconFirst from "@icons/CoursesRatingIconFirst.svg"
import CoursesRatingIconSecond from "@icons/CoursesRatingIconSecond.svg"
import BannerPictureBorder from "@icons/BannerPictureBorder.svg"
import styles from "./MainBanner.module.scss"


export default function MainBanner() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    useEffect(() => {
        if (emblaApi) {
            emblaApi.scrollTo(0)
        }
    }, [emblaApi])
    return (
        <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
                <div className={styles.embla__slide}>
                    <div className={styles.banner_block}>
                        <div className={styles.banner_block_inside_block_first}>
                            <div className={styles.banner_block_text_block}>
                            <p className={styles.banner_block_title}>
                                Unlock Your Potential with Byway
                            </p>
                            <p className={styles.banner_block_description}>
                                Welcome to Byway, where learning knows no bounds. We believe
                                that education is the key to personal and professional growth,
                                and we&apos;re here to guide you on your journey to success.
                            </p>
                            </div>
                            <button className={styles.banner_block_button}>
                            Start your instructor journey
                            </button>
                        </div>
                        <div className={styles.banner_block_inside_block_second}>
                            <Image
                            className={styles.first_mini_circle}
                            src={FirstMiniCircles}
                            alt='First mini circles'
                            />
                            <Image
                            className={styles.second_mini_circle}
                            src={SecondMiniCircles}
                            alt='Second mini circles'
                            />
                            <div className={styles.banner_center_circle}>
                            <div className={styles.banner_center_circle_square}></div>
                            </div>
                            <div className={styles.students_community_banner}>
                            <Image
                                className={styles.students_community_banner_avatars}
                                src={StudentsCommunityAvatars}
                                alt='Students community avatars'
                            />
                            <p className={styles.students_community_text}>
                                Join our community of 1200+ Students
                            </p>
                            </div>
                            <Image
                            className={styles.banner_image_first}
                            src={BannerImageFirst}
                            alt='Banner Image 01'
                            />
                            <Image
                            className={styles.banner_image_second}
                            src={BannerImageSecond}
                            alt='Banner Image 02'
                            />
                            <Image
                            className={styles.banner_image_third}
                            src={BannerImageThird}
                            alt='Banner Image 03'
                            />
                            <Image
                            className={styles.banner_image_ellipse_first}
                            src={BannerEllipseFirst}
                            alt='Banner ellipse first'
                            />
                            <Image
                            className={styles.banner_image_ellipse_second}
                            src={BannerEllipseSecond}
                            alt='Banner ellipse second'
                            />
                            <Image
                            className={styles.banner_image_ellipse_third}
                            src={BannerEllipseThird}
                            alt='Banner ellipse third'
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.embla__slide}>
                    <div className={styles.banner_block}>
                        <div className={styles.banner_block_inside_block_first}>
                                <div className={styles.banner_block_text_block}>
                                    <p className={styles.banner_block_title}>
                                        Unlock Your Potential with Byway
                                    </p>
                                    <p className={styles.banner_block_description}>
                                    Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we&apos;re here to guide you on your journey to success. Whether you&apos;re a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience.
                                    </p>
                                </div>
                                <button className={styles.banner_block_button}>Start your instructor journey</button>
                        </div>
                        <div className={styles.banner_block_inside_block_second}>
                            <Image className={styles.third_mini_circle} src={BlueMiniCirclesFirst} alt="Blue mini circles" />
                            <Image className={styles.courses_banner_people_first} src={BannerPeopleFirst} alt="Second banner people photo" />
                            <Image className={styles.banner_people_first_border} src={BannerPictureBorder} alt="Banner picture border" />
                            <div className={styles.courses_number_banner}>
                                <div className={styles.courses_number_banner_inside}>
                                    <div className={styles.courses_number_banner_icon_wrapper}>
                                        <Image
                                            className={styles.courses_number_banner_icon}
                                            src={CertificateIcon}
                                            alt='Certificate icon'
                                        />
                                    </div>
                                    <p className={styles.courses_number_banner_title}>Number of courses sold</p>
                                </div>
                                <p className={styles.courses_number_banner_counter}>
                                    100,000+
                                </p>
                            </div>
                            <div className={styles.courses_rate_banner}>
                                <div className={styles.courses_rate_banner_wrapper}>
                                    <div className={styles.courses_rate_banner_icons_wrapper}>
                                        <Image src={CoursesRatingIconFirst} className={styles.courses_rate_state_first} alt="Courses rate icon first" />
                                        <Image src={CoursesRatingIconSecond} className={styles.courses_rate_state_second} alt="Courses rate icon second" />
                                    </div>
                                    <div className={styles.courses_rate_banner_text_wrapper}>
                                        <p className={styles.courses_rate_state_percent}>87.6%</p>
                                        <div className={styles.courses_rate_state_title_wrapper}>
                                            <p className={styles.courses_rate_state_title_first}>Completion rate of our</p>
                                            <p className={styles.courses_rate_state_title_second}>courses</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.embla__slide}>
                    <div className={styles.banner_block}>
                        <div className={styles.banner_block_inside_block_first}>
                            <div className={styles.banner_block_text_block}>
                                <p className={styles.banner_block_title}>
                                    Unlock Your Potential with Byway
                                </p>
                                <p className={styles.banner_block_description}>
                                    Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we&apos;re here to guide you on your journey to success.
                                </p>
                            </div>
                            <button className={styles.banner_block_button}>Start your instructor journey</button>
                        </div>
                        <div className={styles.banner_block_inside_block_second}>
                            <Image className={styles.courses_banner_people_first} src={BannerPeopleFirst} alt="Second banner people photo" />
                            <div className={styles.students_community_banner_second}>
                                <Image
                                    className={styles.students_community_banner_avatars}
                                    src={StudentsCommunityAvatars}
                                    alt='Students community avatars'
                                />
                                <p className={styles.students_community_second_text}>
                                    Join our community of 1200+ Students
                                </p>
                            </div>
                            <div className={styles.courses_number_banner}>
                                <div className={styles.courses_number_banner_inside}>
                                    <div className={styles.courses_number_banner_icon_wrapper}>
                                        <Image
                                            className={styles.courses_number_banner_icon}
                                            src={CertificateIcon}
                                            alt='Certificate icon'
                                        />
                                    </div>
                                    <p className={styles.courses_number_banner_title}>Number of courses sold</p>
                                </div>
                                <p className={styles.courses_number_banner_counter}>
                                    100,000+
                                </p>
                            </div>
                            <div className={styles.courses_rate_banner}>
                                <div>
                                    <div className={styles.courses_rate_state}></div>
                                    <p className={styles.courses_rate_state_percent}></p>
                                    <p className={styles.courses_rate_state_title}></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.embla__slide}>
                    <div className={styles.banner_block}>
                        <div className={styles.banner_block_inside_block_first}>
                            <div className={styles.banner_block_text_block}>
                                <p className={styles.banner_block_title}>
                                    Unlock Your Potential with Byway
                                </p>
                                <p className={styles.banner_block_description}>
                                    Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we&apos;re here to guide you on your journey to success. Whether you&apos;re a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience.
                                </p>
                            </div>
                            <button className={styles.banner_block_button}>Start your instructor journey</button>
                        </div>
                        <div className={styles.banner_block_inside_block_second}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
