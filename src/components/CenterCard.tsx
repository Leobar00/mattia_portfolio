import React, {useEffect, useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Mousewheel} from "swiper";
import {NavLink, useNavigate} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import Drone from "../pages/Drone";
import 'animate.css';
import {useSpring,animated} from "react-spring";

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
    const [arrayUrlImg,setUrlImg] = useState(urlImg);
    const [checkExpand,setCheckExpand] = useState(false);
    const [lastEl,setLastEl] = useState();
    const navigate = useNavigate();

    const backgroundColorStyle = window.screen.width < 1024 ? { backgroundColor: arrayUrlImg[0].color } : { backgroundColor: arrayUrlImg[3].color };

    const props = useSpring({
        from: { opacity: 0.3, top: '120%' },
        to: { opacity: 1, top:'50%' }
    })

    const lastElement = (e:any) => {
        let triggerEl : HTMLElement | null = e
        const childPath : any = triggerEl!.getAttribute('src');
        if(triggerEl != null && childPath != null) {

            setLastEl(childPath);
        }
    }

    function startAnimation(e:any)
    {
        lastElement(e.target);
        e.preventDefault();
        debugger;

        const imgActive: HTMLElement | null     = document.querySelector('.center-card .swiper-slide-active');
        const centerCard: HTMLElement | null    = document.querySelector('.center-card');
        const linkImg: HTMLElement | null       = imgActive!.querySelector('.link-img-center');

        centerCard!.style.zIndex = '1000';
        imgActive!.style.animation = 'transition-img-center 2s linear';
        setCheckExpand(true);

        setTimeout(() => {
            navigate(linkImg!.getAttribute('href') as string);
        },1800)
    }

    useEffect(() => {
        if(window.screen.width < 768) {
            setUrlImg([...urlImg].reverse());
        }
    },[])

    return (
        <div>
            <animated.div className={`center-card ${checkExpand ? 'full' : ''}`} style={{ ...backgroundColorStyle, ...props,}}>
                {!checkExpand ? (<Swiper
                    className="mySwiper card"
                    grabCursor={true}
                    initialSlide={4}
                    mousewheel={true}
                    modules={[Mousewheel]}
                    onSlideChangeTransitionStart={() => {
                        changeColorCard(arrayUrlImg)
                    }}
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
                ) : (
                    Object.entries(arrayUrlImg).map(([key,value]) => {
                        return(
                            <div
                                className="card "
                                key={key}
                                data-index={key}
                            >
                                <NavLink className='link-img-center' to={"/" + value.title} >
                                    <img
                                        src={lastEl}
                                        alt=""
                                        style={{
                                            animation : 'transition-img-center 2s linear'
                                        }}
                                    />
                                </NavLink>
                            </div>
                        )
                    })
                )}
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
            </animated.div>
        </div>
    )
}
export  default CenterCard ;