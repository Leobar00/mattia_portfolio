import React, {useEffect, useState} from 'react';
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


function changeColorCard(arrayUrlImg: Array<any>)
{
    let key: HTMLElement | null = document.querySelector('.swiper-slide-active');
    let centerCard: HTMLElement | null = document.querySelector('.center-card')
    if(key != null && centerCard != null) {
        let newIndex: number = parseInt(key.dataset.index as string) ?? 4
        centerCard.style.backgroundColor = arrayUrlImg[newIndex].color
    }
}

function animationCenterCard(e:any)
{
    e.preventDefault();
    const centerCard: HTMLElement | null = document.querySelector('.center-card');
    const imgActive: HTMLElement | null  = document.querySelector('.center-card .swiper-slide-active');
    if(centerCard != null && imgActive != null) {
        const linkImg: HTMLElement | null= imgActive.querySelector('.link-img-center');

        centerCard.classList.add('center-card-animation');
        imgActive.style.animation = 'transition-img-center 2s linear';
        setTimeout(() => {
            window.location.href = linkImg!.getAttribute('href') as string;
            centerCard.classList.remove('center-card-animation')
        },1800)
    }

}



const CenterCard = () => {
    const [arrayUrlImg,setUrlImg] = useState(urlImg)

    useEffect(() => {
        if(window.screen.width < 1024) {
            setUrlImg([...urlImg].reverse());
        }
    },[])
    return (
        <div className="center-card" style={window.screen.width < 1024 ? {backgroundColor: arrayUrlImg[0].color} : {backgroundColor: arrayUrlImg[3].color}}>
            <Swiper
                className="mySwiper card"
                grabCursor={true}
                initialSlide={4}
                mousewheel={true}
                modules={[Mousewheel]}
                onSlideChangeTransitionEnd={() => changeColorCard(arrayUrlImg)}
                breakpoints={{
                    1024: {
                       direction:'vertical',
                    },
                    0 :{
                        direction:"horizontal",
                        initialSlide: 0,
                    }

                }}
            >
                {
                    Object.entries(arrayUrlImg).map(([key,value]) => {
                        return(
                            <SwiperSlide
                                className="card"
                                key={key}
                                data-index={key}
                            >
                                <Link className='link-img-center' to={"/" + value.title}>
                                    <img src={value.path} onClick={animationCenterCard} alt=""/>
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className="instruction desktop">
                <p>Drag and press to view projects</p>
            </div>
            <div className="container-line-mobile mobile">
                <div className="line-mobile"></div>
                <div className="text-line-mobile">
                    <span>Drones delivery app</span>
                </div>
                <div className="line-mobile"></div>
            </div>
        </div>
    )
}
export  default CenterCard ;