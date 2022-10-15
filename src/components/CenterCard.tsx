import React from 'react';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Mousewheel} from "swiper";
import { Link } from 'react-router-dom';

const urlImg: Array<string> = [
    '/images/HOMEPAGE/FitUp.png',
    '/images/HOMEPAGE/Oceano.png',
    '/images/HOMEPAGE/Bibank.png',
    '/images/HOMEPAGE/Drones.png'
];


const CenterCard = () => {
    return (
        <div className="center-card">
            <Swiper
                direction={"vertical"}
                className="mySwiper card"
                grabCursor={true}
                initialSlide={4}
                mousewheel={true}
                modules={[Mousewheel]}
            >
                { urlImg.map(img => {
                    return(
                        <SwiperSlide className="card">
                            <Link to="">
                                <img src={img} alt=""/>
                            </Link>
                        </SwiperSlide>
                    )
                }) }
            </Swiper>
            <div className="instruction">
                <p>Drag and press to view projects</p>
            </div>
        </div>
    )
}
export  default CenterCard ;