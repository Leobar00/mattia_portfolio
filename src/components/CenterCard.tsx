import React from 'react';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Mousewheel} from "swiper";
import { Link } from 'react-router-dom';
import Drone from "../pages/Drone";

const urlImg: {[key:string]:string}= {
    'fitup' :'/images/HOMEPAGE/FitUp.png',
    'oceano':'/images/HOMEPAGE/Oceano.png',
    'bibank':'/images/HOMEPAGE/Bibank.png',
    'drone' :'/images/HOMEPAGE/Drones.png'
};



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
                {
                    Object.entries(urlImg).map(([key,value]) => {
                        return(
                            <SwiperSlide className="card">
                                <Link to={"/" + key}>
                                    <img src={value} alt=""/>
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className="instruction">
                <p>Drag and press to view projects</p>
            </div>
        </div>
    )
}
export  default CenterCard ;