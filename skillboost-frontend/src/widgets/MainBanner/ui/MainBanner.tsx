"use client"

// import dynamic from "next/dynamic";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const Slider = dynamic(() => import('react-slick'), { ssr: false })

export default function MainBanner() {
    const sliderSettings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true
    }
    return (
        <Slider {...sliderSettings}>
            <div>
                <p>Text 1</p>
            </div>
            <div>
                <p>Text 2</p>
            </div>
            <div>
                <p>Text 3</p>
            </div>
            <div>
                <p>Text 4</p>
            </div>
        </Slider>
    )
}
