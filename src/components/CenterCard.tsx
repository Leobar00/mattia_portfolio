import React, {useEffect, useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Mousewheel} from "swiper";
import {Link, NavLink, useLocation} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import Drone from "../pages/Drone";

interface CenterCard {
    title: string,
    path : string,
    color: string,
    firstLine: string,
    mobileText: string,
}

const urlImg: CenterCard[] = [
    {title:'fitup', path:'/images/HOMEPAGE/FitUp.png',color:'#F19393',firstLine:'FitUp mobile app and website',mobileText:'Fitup fitness app'},
    {title:'oceano', path:'/images/HOMEPAGE/Oceano.png',color:'#86E864',firstLine:'Oceano mobile app and website',mobileText:'Oceano web app'},
    {title:'bibank', path:'/images/HOMEPAGE/Bibank.png',color:'#EBF391',firstLine:'Bibank responsive website',mobileText:'Bibank responsive website'},
    {title:'drone', path:'/images/HOMEPAGE/Drones.png',color:'#75B3D7',firstLine:'Drones mobile Drones mobile app',mobileText:'Drones delivery app '}
];


function changeColorCard(arrayUrlImg: Array<any>)
{
    let key: HTMLElement | null = document.querySelector('.swiper-slide-active');
    let centerCard: HTMLElement | null = document.querySelector('.center-card');
    let lineOne : HTMLElement | null = document.querySelector('.container-line .text-line span');
    let lineTwo : HTMLElement | null = document.querySelector('.container-line .text-line-2 span');
    let lineProgress : HTMLElement | null = document.querySelector('.num-slide .line-progress');
    let firstNum : HTMLElement | null = document.querySelector('.num-slide #first-num');
    let textMobile : HTMLElement | null = document.querySelector('.text-line-mobile > span');
    if(key != null && centerCard != null && lineOne != null && lineTwo != null && lineProgress != null && firstNum != null && textMobile != null) {
        let newIndex: number = parseInt(key.dataset.index as string) ?? 4;
        centerCard.style.backgroundColor = arrayUrlImg[newIndex].color
        lineOne.innerHTML = arrayUrlImg[newIndex].firstLine
        firstNum.innerHTML = '0' + (5 - 1 * (newIndex + 1))
        lineProgress.style.width = 125 - 25 * (newIndex + 1)  + '%';
        textMobile.innerHTML = arrayUrlImg[newIndex].mobileText
    }
}



const CenterCard = () => {
    const [arrayUrlImg,setUrlImg] = useState(urlImg)
    const [isEnter,setIsEnter] = useState(false)

    function startAnimation(e:any)
    {
        e.preventDefault()
        setIsEnter((v) => {
            const imgActive: HTMLElement | null  = document.querySelector('.center-card .swiper-slide-active');
            if(imgActive != null) {
                const linkImg: HTMLElement | null = imgActive.querySelector('.link-img-center');

                imgActive.style.animation = 'transition-img-center 2s linear';
                setTimeout(() => {
                    window.location.href = linkImg!.getAttribute('href') as string;
                },1800)
            }

            return !v;
        })

    }

    useEffect(() => {
        if(window.screen.width < 768) {
            setUrlImg([...urlImg].reverse());
        }
    },[])

    return (
        <CSSTransition
            //1. state (enter/exit)
            in={isEnter}
            //2. duration
            timeout={2000}
            //3. class name prefix
            classNames="transition-center"
        >
            <div className="center-card" style={window.screen.width < 1024 ? {backgroundColor: arrayUrlImg[0].color} : {backgroundColor: arrayUrlImg[3].color}}>
                <Swiper
                    className="mySwiper card"
                    grabCursor={true}
                    initialSlide={4}
                    mousewheel={true}
                    modules={[Mousewheel]}
                    onSlideChangeTransitionStart={() => changeColorCard(arrayUrlImg)}
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
                                    <NavLink className='link-img-center' to={"/" + value.title} >
                                        <img src={value.path} onClick={startAnimation} alt=""/>
                                    </NavLink>
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
                <div className="num-slide">
                    <span id="first-num">01</span>
                    <span className="container-line-progress">
                        <span className="line-progress"></span>
                    </span>
                    <span>04</span>
                </div>
            </div>
        </CSSTransition>
    )
}
export  default CenterCard ;