"use client"

import Image from "next/image";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImageFirst from "@assets/Banner_Image_01.png"
import BannerImageSecond from "@assets/Banner_Image_02.png"
import BannerImageThird from "@assets/Banner_Image_03.png"
import FirstMiniCircles from "@icons/mini_circles_1.svg"
import SecondMiniCircles from '@icons/mini_circles_2.svg'
import BannerEllipseFirst from '@icons/BannerEllipseFirst.svg'
import BannerEllipseSecond from '@icons/BannerEllipseSecond.svg'
import BannerEllipseThird from '@icons/BannerEllipseThird.svg'
import StudentsCommunityAvatars from '@icons/Students_community_avatars.svg'
import styles from "./MainBanner.module.scss"

export default function MainBanner() {
    const sliderSettings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        draggable: true,
        vertical: false,
        adaptiveHeight: false,
    }
    return (
        <Slider {...sliderSettings}>
            <div>
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
            <div>
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
                            <button className={styles.banner_block_button}>Start your instructor journey</button>
                    </div>
                    <div className={styles.banner_block_inside_block_second}></div>
                </div>
            </div>
        </Slider>
    )
}
