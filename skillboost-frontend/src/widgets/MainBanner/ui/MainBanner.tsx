"use client"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainBanner() {
    const sliderSettings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipe: true,
        draggable: true,
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
