import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Mousewheel} from "swiper";
import { Link } from 'react-router-dom';

interface CenterCard {
    title: string,
    path : string,
    color: string
}

const urlImg: CenterCard[] = [
    {title:'fitup', path:'/images/HOMEPAGE/FitUp.png',color:'#F19393'},
    {title:'oceano', path:'/images/HOMEPAGE/Oceano.png',color:'#86E864'},
    {title:'bibank', path:'/images/HOMEPAGE/Bibank.png',color:'#EBF391'},
    {title:'drone', path:'/images/HOMEPAGE/Drones.png',color:'#75B3D7'}
];


function changeColorCard(){
    let key: HTMLElement | null = document.querySelector('.swiper-slide-active');
    let centerCard: HTMLElement | null = document.querySelector('.center-card')
    if(key != null && centerCard != null) {
        let newIndex: number = parseInt(key.dataset.index as string) ?? 4
        centerCard.style.backgroundColor = urlImg[newIndex].color
    }
}


const CenterCard = () => {
    return (
        <div className="center-card" style={{backgroundColor: urlImg[3].color}}>
            <Swiper
                direction={"vertical"}
                className="mySwiper card"
                grabCursor={true}
                initialSlide={4}
                mousewheel={true}
                modules={[Mousewheel]}
                onSlideChangeTransitionEnd={changeColorCard}
            >
                {
                    Object.entries(urlImg).map(([key,value]) => {
                        return(
                            <SwiperSlide className="card" key={key} data-index={key} >
                                <Link to={"/" + value.title}>
                                    <img src={value.path} alt=""/>
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