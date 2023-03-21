import React, {useState} from 'react';
import '../style/Menu.scss';
import NavbarRight from "../components/Navbar";
import {Link} from "react-router-dom";
import Logo from "../components/Logo";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Pagination} from "swiper";
import ButtonScroll from "../components/ButtonScroll";
import Navbar from "../components/Navbar";


const Oceano = () => {
    return (
        <div className="general-container">
            <div className="container-main-white">
                <Logo />
                <div className="product-container">
                    <div className="product-container-description center-align">
                        <div >
                            <div className="line-product animate__animated animate__slideInLeft animate__slower"></div>
                            <p className="product-subtitle animate__animated animate__slideInLeft animate__slower">Project</p>
                            <p className="product-title animate__animated animate__fadeInTopRight animate__slower">Oceano mobile app</p>
                        </div>
                        <div className="animate__animated animate__slideInRight animate__slower">
                            <div className="line-product"></div>
                            <p className="product-subtitle">My role</p>
                            <p className="product-title">Ux/Ui Design</p>
                        </div>
                        <div>
                            <div className="line-product">
                                <div className="circle-prototype">
                                    <p>Go to prototype</p>
                                </div>
                            </div>
                            <p className="product-subtitle animate__animated animate__slideInLeft animate__slower">Project duration</p>
                            <p className="product-title animate__animated animate__slideInLeft animate__slower">Feb - 2023</p>
                        </div>
                        <div>
                            <div className="line-product"></div>
                            <p className="product-subtitle">Tool used</p>
                            <div className="tool-img">
                                <img src="/images/DRONES/icon-and-logo/logo-figma.png" alt=""/>
                                <img src="/images/DRONES/icon-and-logo/logo-photoshop.png" alt=""/>
                            </div>
                        </div>
                        <img className="img-absolute oceano-img" src="/images/OCEANO/IMMAGINI/copertina.png" alt=""/>
                        <div className="white-space-product"></div>
                        <div className="line-product"></div>
                        <div className="description-container">
                            <div className="column-6">
                                <span>Oceano - Mobile app for social good</span>
                                <p>
                                    Oceano is a mobile app with dedicated website designed to help researchers preserve endangered marine wildlife. Through this product, users can make donations, adopt endangered animals, and read articles and information regarding environmental conservation.
                                </p>
                            </div>
                            <div className="column-6">
                                <span>Why Oceano?</span>
                                <p>
                                    Oceano was conceived with the intention of creating a technological tool that can provide support and help to researchers and associations fighting against one of the greatest of our millennium: climate change and the consequent degradation of animal and marine life.
                                    The main purpose of Oceano is to enable users to make donations in a simple and fun way.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="product-section-img" style={{backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),url('images/OCEANO/IMMAGINI/1.png')"}}>
                        <div className="center-align h-100 w-100">
                            <div className="align-the-end">
                                <h3>Ocean is in danger</h3>
                                <div className="line-80"></div>
                                <p className="w-60">
                                    In recent decades, pollution and destructive and illegal fishing practices have largely contributed to the destruction of the ocean and its inhabitants. There is a need for new technologies, usable by anyone, that can support this important battle.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="product-section center-align">
                        <div className="product-container-description w-80">
                            <div className="product-app">
                                <span className="small-subtitle">Project challenge</span>
                                <div className="line-product-100 w-70"></div>
                                <h3 className="title-section">Consistency and Usability</h3>
                                <p className="text-description">
                                    The main purpose of this project was to create a dual product (mobile app and dedicated website) that was consistent, easily usable, and highly engaging for users. The biggest difficulty I faced was creating and devising something different from other products in the industry, innovative and fun.
                                </p>
                            </div>
                            <img className="img-advantages-bibank" src="images/OCEANO/IMMAGINI/2.png" alt=""/>
                        </div>
                    </div>
                    <div className="product-section-design-stages ">
                        <div className="product-container-description center-align">
                            <p className="small-subtitle">Design stages</p>
                            <div className="line-product-100"></div>
                            <h3 className="title-section">Step by step</h3>
                            <p className="text-description">
                                I started this project by studying the products of other companies in the industry and trying to get information from users who already use this type of app, and then moving to user groups that do not match the "ideal user" of this type of product. After examining their needs and figuring out how to distinguish the app from the website, I went on to design the wireframe for the various device types and concluded by creating the final prototype, both for the mobile app and the dedicated website.
                            </p>
                            <div className="product-graphic-container">
                                <div className="product-weeks">
                                    <div className="week-square">1st Week</div>
                                    <div className="week-square">2nd Week</div>
                                    <div className="week-square">3rd Week</div>
                                    <div className="week-square">4th Week</div>
                                    <div className="week-square">5th week</div>
                                </div>
                                <div className="graphic-container">
                                    <div className="column">
                                        <div className="column-container">
                                            <div className="square first-color-square">
                                                <div className="circle">
                                                    <img src="images/DRONES/icon-and-logo/icona%20lente.png" alt=""/>
                                                </div>
                                                <p>Emphatise phase</p>
                                            </div>
                                            <div className="subsquare">
                                                Qualitative Primary Research
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="column-container" style={{gridRow:'2'}}>
                                            <div className="square second-color-square">
                                                <div className="circle">
                                                    <img src="images/OCEANO/icon-and-logo/define.png" alt=""/>
                                                </div>
                                                <p>Define phase</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="column-container" style={{gridRow:'3'}}>
                                            <div className="square third-color-square">
                                                <div className="circle">
                                                    <img src="images/DRONES/icon-and-logo/icona%20testa.png" alt=""/>
                                                </div>
                                                <p>Ideation phase</p>
                                            </div>
                                            <div className="subsquare">
                                                Desktop Wireframe
                                            </div>
                                            <div className="subsquare">
                                                Mobile Wireframe
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="column-container" style={{gridRow:'1.5',marginTop:'3rem'}}>
                                            <div className="square fourth-color-square">
                                                <div className="circle">
                                                    <img src="images/DRONES/icon-and-logo/icona%20pennello.png" alt=""/>
                                                </div>
                                                <p>Hi-fi prototype</p>
                                            </div>
                                            <div className="subsquare">
                                                Design System
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="column-container " style={{gridRow:'5',width:'100%'}}>
                                            <div className="square five-color-square">
                                                <p>Usability study</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-section product-section-only-img">
                        <img src="images/OCEANO/IMMAGINI/3.png" alt=""/>
                    </div>
                    <div className="product-section-design-stages">
                        <div className="product-container-description center-align">
                            <p className="small-subtitle">WHo are the potential users?</p>
                            <div className="line-product-100"></div>
                            <h3 className="title-section">User Personas</h3>
                            <div className="text-description">
                                In order to create the following Personas, I asked myself the following questions to create empathy with the potential user categories:
                                <ul>
                                    <li>What do people know about environmental issues?</li>
                                    <li>What features should a social purpose product have?</li>
                                    <li>How can we make a donation pathway easy?</li>
                                    <li>What can motivate the user to make a donation?</li>
                                    <li>How can we create a payment method that is intuitive and fast?</li>
                                    <li>How can people with disabilities help preserve the environment?</li>
                                </ul>
                            </div>
                        </div>
                        <div className="slider-card-container">
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={40}
                                grabCursor={true}
                                freeMode={true}
                                modules={[FreeMode, Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="card-container">
                                        <div className="main-card card-color">
                                            <div className="avatar">
                                                <img src="images/OCEANO/EMOJI/emoji1.png" alt=""/>
                                            </div>
                                            <div className="main-card-text">
                                                <h3 className="main-card-title">Marco</h3>
                                                <p className="main-card-subtitle">Assistant in law firm</p>
                                                <p className="card-text">
                                                    Marco is a 35 year old boy who lives in a neighborhood on the outskirts of Milan. He lives with his girlfriend with whom he has been together for 10 years. They have a dog but no children. He studied at the School of Economics, but did not complete the university. He is a clerk in a notary's office and is responsible for drafting acquisition contracts and running errands for his lawyer.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="small-card card-color">
                                            <div className="small-card-title">
                                                Paint Point
                                            </div>
                                            <div className="icon">&#128551;</div>
                                            <div className="card-text">
                                                Marco has little confidence in the time frames and methods provided by apps and websites that deliver and ship via an online process.
                                            </div>
                                        </div>
                                        <div className="small-card card-color">
                                            <div className="small-card-title">
                                                Needs
                                            </div>
                                            <div className="icon">&#9201;</div>
                                            <div className="card-text">
                                                Marco has to save time at work during his tasks and find a way to be less stressed.
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-container">
                                        <div className="main-card card-color">
                                            <div className="avatar">
                                                <img src="images/OCEANO/EMOJI/emoji2.png" alt=""/>
                                            </div>
                                            <div className="main-card-text">
                                                <h3 className="main-card-title">Marco</h3>
                                                <p className="main-card-subtitle">Assistant in law firm</p>
                                                <p className="card-text">
                                                    Marco is a 35 year old boy who lives in a neighborhood on the outskirts of Milan. He lives with his girlfriend with whom he has been together for 10 years. They have a dog but no children. He studied at the School of Economics, but did not complete the university. He is a clerk in a notary's office and is responsible for drafting acquisition contracts and running errands for his lawyer.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="small-card card-color">
                                            <div className="small-card-title">
                                                Paint Point
                                            </div>
                                            <div className="icon">&#128551;</div>
                                            <div className="card-text">
                                                Marco has little confidence in the time frames and methods provided by apps and websites that deliver and ship via an online process.
                                            </div>
                                        </div>
                                        <div className="small-card card-color">
                                            <div className="small-card-title">
                                                Needs
                                            </div>
                                            <div className="icon">&#9201;</div>
                                            <div className="card-text">
                                                Marco has to save time at work during his tasks and find a way to be less stressed.
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-container">
                                        <div className="main-card card-color">
                                            <div className="avatar">
                                                <img src="images/OCEANO/EMOJI/emoji3.png" alt=""/>
                                            </div>
                                            <div className="main-card-text">
                                                <h3 className="main-card-title">Marco</h3>
                                                <p className="main-card-subtitle">Assistant in law firm</p>
                                                <p className="card-text">
                                                    Marco is a 35 year old boy who lives in a neighborhood on the outskirts of Milan. He lives with his girlfriend with whom he has been together for 10 years. They have a dog but no children. He studied at the School of Economics, but did not complete the university. He is a clerk in a notary's office and is responsible for drafting acquisition contracts and running errands for his lawyer.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="small-card card-color">
                                            <div className="small-card-title">
                                                Paint Point
                                            </div>
                                            <div className="icon">&#128551;</div>
                                            <div className="card-text">
                                                Marco has little confidence in the time frames and methods provided by apps and websites that deliver and ship via an online process.
                                            </div>
                                        </div>
                                        <div className="small-card card-color">
                                            <div className="small-card-title">
                                                Needs
                                            </div>
                                            <div className="icon">&#9201;</div>
                                            <div className="card-text">
                                                Marco has to save time at work during his tasks and find a way to be less stressed.
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="product-section center-align">
                        <div className="product-container-description w-60">
                            <div className="product-app">
                                <span className="small-subtitle">A typical day of potential user</span>
                                <div className="line-product-100"></div>
                                <h3 className="title-section">User Journey map</h3>
                                <p className="text-description">
                                    Based on the research data, the creation of a User Journey Map helped me to better understand the users' pain points, the environment and the context in which the application could be used.
                                </p>
                                <p className="text-description">
                                    The goal of this User Journey is to deliver a package of documents, on behalf of his employer, to another firm of lawyers a few miles away, through a standard delivery method
                                </p>
                            </div>
                        </div>
                        <div className="journey-map">
                            <div className="line-circle-container">
                                <div className="line-circle">
                                    <div className="circle-journey-container">
                                        <div className="journey-circle-text">
                                            <div className="circle-journey circle-red"></div>
                                            <p>Finding and organizing</p>
                                        </div>
                                        <div className="journey-circle-text">
                                            <div className="circle-journey circle-purple"></div>
                                            <p>Packing the package</p>
                                        </div>
                                        <div className="journey-circle-text">
                                            <div className="circle-journey circle-green"></div>
                                            <p>Reach the delivery point</p>
                                        </div>
                                        <div className="journey-circle-text">
                                            <div className="circle-journey circle-yellow"></div>
                                            <p>Deliver the package</p>
                                        </div>
                                        <div className="journey-circle-text">
                                            <div className="circle-journey circle-blu"></div>
                                            <p>Back the office</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="circle-text">
                                    <div className="circle-journey-container">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-section center-align">
                        <div className="product-container-description w-60">
                            <div className="product-app">
                                <span className="small-subtitle">What does the User Journey Map say?</span>
                                <div className="line-product-100"></div>
                                <h3 className="title-section">Improvement opportunities</h3>
                                <p className="text-description">
                                    On the basis of the User Journey Map, I identified, for each of the tasks to achieve the final goal, some points for improvement of the user experience. Some of these improvements will then be integrated within the final design.
                                </p>
                                <div className="slider-card-container">
                                    <Swiper
                                        grabCursor={true}
                                        freeMode={true}
                                        modules={[FreeMode, Pagination]}
                                        className="improvement-opportunites"
                                        breakpoints= {{
                                            // when window width is >= 320px
                                            320: {
                                                slidesPerView: 1.5,
                                                spaceBetween: 80
                                            },
                                            // when window width is >= 480px
                                            680: {
                                                slidesPerView: 2.5,
                                                spaceBetween: 80
                                            },
                                            // when window width is >= 640px
                                            1040: {
                                                slidesPerView: 3.5,
                                                spaceBetween: 90
                                            }
                                        }}
                                    >
                                        <SwiperSlide>
                                            <div className="card-container">
                                                <div className="card-text">
                                                    <p>FIND AND ASSOCIATION ONLINE</p>
                                                </div>
                                                <div className="card-improvement flex-center improvement-color-1">
                                                    <p>Recommendations of topics that might interest the user based on their profile information</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-container">
                                                <div className="card-text">
                                                    <p>DRIVE TO THE ASSOCIATION</p>
                                                </div>
                                                <div className="card-improvement flex-center improvement-color-2">
                                                    <p>Make it possible to donate safely online, perhaps by setting up a video call service with an expert from the association.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-container">
                                                <div className="card-text">
                                                    <p>DECIDE WHICH CAUSE TO DONATE</p>
                                                </div>
                                                <div className="card-improvement flex-center improvement-color-3">
                                                    <p>Creating an automatic comparison of different possibilities</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-container">
                                                <div className="card-text">
                                                    <p>DECIDING HOW MUCH MONEY </p>
                                                </div>
                                                <div className="card-improvement flex-center improvement-color-4">
                                                    <p>Create pre-established donation figures for each individual cause</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-container">
                                                <div className="card-text">
                                                    <p>MAKING THE PAYMENT</p>
                                                </div>
                                                <div className="card-improvement flex-center improvement-color-5">
                                                    <p>Making the payment method as easy, fast and secure as possible. Also include the possibility of an instalment donation. </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-section center-align">
                        <div className="product-container-description w-80">
                            <div className="product-app">
                                <span className="small-subtitle">The market</span>
                                <div className="line-product-100 w-70"></div>
                                <h3 className="title-section">Competitive audit</h3>
                                <p className="text-description">
                                    I decided, after studying potential users, to conduct market research on some of the best-known marine donation services (direct and indirect competitors), including a smaller national entity and a lesser-known local one, to better understand how the more experienced competitors implement the donation process.
                                </p>
                                <a href="#">Click here to view the REPORT.</a>

                                <div className="marks-container">
                                    <div className="legenda">
                                        <span className="subtitle">Marks:</span>
                                        <span>Good = <img src="images/BIBANK/ICONELOGHI/check%20green.png" alt=""/></span>
                                        <span>Needs works = <img src="images/BIBANK/ICONELOGHI/check%20grey.png" alt=""/></span>
                                    </div>
                                    <div className="grid-payment grid-payment-column-4">
                                        <div className="grid-item"></div>
                                        <div className="grid-item box-payment">
                                            <img src="images/OCEANO/icon-and-logo/oceanus.png" alt=""/>
                                        </div>
                                        <div className="grid-item box-payment">
                                            <img src="images/OCEANO/icon-and-logo/wwf.png" alt=""/>
                                        </div>
                                        <div className="grid-item box-payment">
                                            <img src="images/OCEANO/icon-and-logo/wise.png" alt=""/>
                                        </div>
                                        <div className="grid-item box-text">
                                            <p>Target Audience</p>
                                        </div>
                                        <div className="grid-item">
                                            <p>Italy</p>
                                        </div>
                                        <div className="grid-item">
                                            <p>Worldwide</p>
                                        </div>
                                        <div className="grid-item">
                                            <p>Europe</p>
                                        </div>
                                        <div className="grid-item box-text">
                                            <p>Desktop experience</p>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20grey.png" alt=""/>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20green.png" alt=""/>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20grey.png" alt=""/>
                                        </div>
                                        <div className="grid-item box-text">
                                            <p>Mobile Experience</p>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20grey.png" alt=""/>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20grey.png" alt=""/>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20green.png" alt=""/>

                                        </div>
                                        <div className="grid-item box-text">
                                            <p>Feautures</p>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20green.png" alt=""/>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20green.png" alt=""/>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20grey.png" alt=""/>
                                        </div>
                                        <div className="grid-item box-text">
                                            <p>Accesibility</p>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20green.png" alt=""/>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20green.png" alt=""/>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20green.png" alt=""/>
                                        </div>
                                        <div className="grid-item box-text">
                                            <p>User Flow</p>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20grey.png" alt=""/>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20green.png" alt=""/>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20grey.png" alt=""/>
                                        </div>
                                        <div className="grid-item box-text">
                                            <p>Navigation</p>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20grey.png" alt=""/>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20green.png" alt=""/>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20green.png" alt=""/>
                                        </div>
                                        <div className="grid-item box-text">
                                            <p>Brand Identity</p>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20green.png" alt=""/>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20green.png" alt=""/>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20grey.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="slider-card-container">
                                        <Swiper
                                            grabCursor={true}
                                            freeMode={true}
                                            modules={[FreeMode, Pagination]}
                                            className="storyboard"
                                            breakpoints= {{
                                                1040: {
                                                    slidesPerView: 1.2,
                                                    spaceBetween:1
                                                }
                                            }}
                                        >
                                            <SwiperSlide>
                                                <div className="card-container">
                                                    <img src="images/OCEANO/IMMAGINI/4.png" alt=""/>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="card-container">
                                                    <img src="images/OCEANO/IMMAGINI/5.png" alt=""/>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="card-container">
                                                    <img src="images/OCEANO/IMMAGINI/6.png" alt=""/>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-section center-align">
                        <div className="product-container-description w-80">
                            <div className="product-app">
                                <span className="small-subtitle">Ideation</span>
                                <div className="line-product-100 w-60"></div>
                                <h3 className="title-section">Crazy eights</h3>
                                <p className="text-description w-80">
                                    I used a technique called Crazy Eights to come up with new ideas about features to include within the product and to start creating the first interfaces. The goal of this technique is to put as many ideas on a paper as possible, regardless of quality.
                                    The exercise consists of dividing the sheet into 8 parts, drawing in each box an idea or feature in a limited time (1 minute per box).
                                </p>
                                <img className="w-100 mx-4" src="images/OCEANO/IMMAGINI/7.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="product-section product-section-only-img">
                        <img src="images/OCEANO/IMMAGINI/8.png" alt=""/>
                    </div>

                    <div className="product-section center-align">
                        <div className="product-container-description w-60">
                            <div className="product-app">
                                <span className="small-subtitle">Wireframe</span>
                                <div className="line-product-100"></div>
                                <h3 className="title-section">Paper Wireframe</h3>
                                <p className="text-description">
                                    I decided to start the design process from the paper wireframe, starting with the mobile app, and then continuing with the dedicated website.
                                </p>
                                <p className="text-description">
                                    The paper wireframe allowed me to experiment with different solutions and ideas, testing the product at an early stage, without wasting too much time modifying a design that was already at an advanced stage of development.
                                    Below are some of the main screens of both the mobile app and the dedicated website.
                                </p>
                            </div>
                            <div className="list-with-img">
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>On board (mobile app)</h4>
                                    <p>Within the mobile app, the first thing that a new user experiences is the "On Board" phase. In this first phase, the customer will have to enter his or her data and will find information about the main functionality of the app.</p>
                                    <img className="img-wireframe" src="images/OCEANO/IMMAGINI/PAPER%20WIREFRAME/1.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Homepage</h4>
                                    <p>I designed the homepages to be simple, intuitive, and beautiful to look at. For the mobile app, I decided to include a horizontally scrolling grid of images, while for the dedicated sitoweb we only have vertical scrolling.</p>
                                    <img className="img-wireframe" src="images/OCEANO/IMMAGINI/PAPER%20WIREFRAME/2.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Donation</h4>
                                    <p>I created a simple user flow, where each click corresponds to a step. This makes it easy for the user to understand where they are at each step, and if they make a mistake, it is very easy to go back and change their choices.</p>
                                    <img className="img-wireframe" src="images/OCEANO/IMMAGINI/PAPER%20WIREFRAME/3.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Animal Tracking</h4>
                                    <p>I thought about designing interactive maps that could track your adopted animal, so as to create an even deeper user experience. The purpose of these maps is to allow the user to track their animal.</p>
                                    <img className="img-wireframe" src="images/OCEANO/IMMAGINI/PAPER%20WIREFRAME/4.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Amount and Payment</h4>
                                    <p>I decided to provide the user with a dual choice for the amount and for payment. In fact, the user can decide whether to select an pre-existing digit with a single click or to enter a different digit as they like directly from the keyboard of their device.</p>
                                    <img className="img-wireframe" src="images/OCEANO/IMMAGINI/PAPER%20WIREFRAME/5.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Confirm Donation</h4>
                                    <p>It is very important for users to be sure that once they have made a payment, everything has gone well. For this reason, for both the mobile app and the dedicated sitoweb, I created a confirmation page containing all the payment and adoption/donation information.</p>
                                    <img className="img-wireframe" src="images/OCEANO/IMMAGINI/PAPER%20WIREFRAME/6.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-section product-section-only-img">
                        <img src="images/OCEANO/IMMAGINI/9.png" alt=""/>
                    </div>

                    <div className="background-digital-wireframe">
                        <div className="product-section center-align">
                            <div className="product-container-description">
                                <div className="product-app w-60">
                                    <span className="small-subtitle">From paper to digital</span>
                                    <div className="line-product-100"></div>
                                    <h3 className="title-section">Digital Wireframe</h3>
                                    <p className="text-description">
                                        After conducting a small usability study on the paper wireframe, I developed my own digital wireframe. This lo-fi version was very helpful in understanding even better the best process to create to lead the user to their end goal. From the wireframe, I tried to focus on animations and interactions so that the user would be more engaged.
                                    </p>
                                </div>
                                <div className="list-with-img w-80">
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4>Interactive Homepage</h4>
                                            <p>The homepage of the dedicated sitoweb contains several animations and interactions and focuses on providing the user with key information to understand what Oceano is all about.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/OCEANO/DIGITAL%20WIREFRAME/DEKSTOP/1.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4>On-board and Settings</h4>
                                            <p>A short and clear Onboard shows the main features of the application and immediately begins to raise awareness about marine ecology.
                                                In the mobile app, users can also find an area where they can quickly and easily edit their information and payment methods.</p>
                                        </div>
                                        <div className="container-img-two-oceano">
                                            <img className="dekstop" src="images/OCEANO/DIGITAL%20WIREFRAME/MOBILE/1.gif" alt=""/>
                                            <img className="dekstop" src="images/OCEANO/DIGITAL%20WIREFRAME/MOBILE/2.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4>Donating is easy</h4>
                                            <p>On both the mobile app and the dedicated sitoweb, I decided to use the same path to create consistency between the two products. The flow to get to the end of this task is simple and intuitive, as it is accomplished by following small and simple separate steps.</p>
                                        </div>
                                        <div className="container-img-near">
                                            <img className="dekstop mr-3" src="images/OCEANO/DIGITAL%20WIREFRAME/DEKSTOP/2.gif" alt=""/>
                                            <img className="dekstop" src="images/OCEANO/DIGITAL%20WIREFRAME/MOBILE/3.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4>Get to know the animals</h4>
                                            <p>On both the mobile app and the dedicated sitoweb, users have the ability to see where their favorite animal lives and what areas it travels to during migrations. Green circles indicate the area where that animal's species is most localized.</p>
                                        </div>
                                        <div className="container-img-near">
                                            <img className="dekstop mr-3" src="images/OCEANO/DIGITAL%20WIREFRAME/DEKSTOP/3.gif" alt=""/>
                                            <img className="dekstop" src="images/OCEANO/DIGITAL%20WIREFRAME/MOBILE/4.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4>Get to know the company</h4>
                                            <p>Directly from the main menu, on the dedicated sitoweb, you can learn about the company through the "about" section. This section was made by building images and animations through Figma's "smart animate".</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/OCEANO/DIGITAL%20WIREFRAME/DEKSTOP/4.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4>Adopt and track</h4>
                                            <p>Adopt your favorite animal from the comfort of your home and keep track of its movements via the mobile app. The mobile app also supports a "photos" feature where you can find up-to-date photos of your pet around the world.</p>
                                        </div>
                                        <div className="container-img-two-oceano">
                                            <img className="dekstop" src="images/OCEANO/DIGITAL%20WIREFRAME/MOBILE/5.gif" alt=""/>
                                            <img className="dekstop" src="images/OCEANO/DIGITAL%20WIREFRAME/MOBILE/6.gif" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-section product-section-only-img">
                        <img src="images/OCEANO/IMMAGINI/10.png" alt=""/>
                    </div>

                    <div className="product-section-bc-black">
                        <div className="product-section center-align">
                            <div className="product-container-description">
                                <div className="product-app w-60">
                                    <span className="small-subtitle">The result</span>
                                    <div className="line-product-100"></div>
                                    <h3 className="title-section">Hi-fi Prototype</h3>
                                    <p className="text-description">
                                        To create the final prototype, I experimented with different types of animations and interactions, from vertical scrolling to "smart animates." I decided to use a main font with graces and a light gray background that could make the main content stand out through high contrast.
                                    </p>
                                </div>
                                <div className="list-with-img w-80">
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4><div className="bullet-white"></div>On-board (mobile app)</h4>
                                            <p>The On-board process begins with a page introducing the app and then explaining the main functions from the app to the customer. Next follows the login screen, from where sign-up can also be done.</p>
                                        </div>
                                        <div className="container-img-hifi flex-center">
                                            <img className="dekstop" src="images/OCEANO/MOCKUP/MOBILE/1.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4><div className="bullet-white"></div>Homepage (dedicated website)</h4>
                                            <p>For the dedicated sitoweb, I decided to use illustrations in the first part of the homepage to create a visual that is both beautiful to look at and interactive. From the homepage one can then access all the functions of Oceano, including donations and adoptions.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/OCEANO/MOCKUP/DEKSTOP/1.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4><div className="bullet-white"></div>Simple donation flow</h4>
                                            <p>The donation process, similar for both the dedicated sitoweb and the mobile app, follows a very simple flow made in steps. In the dekstop version, in order to create a more interactive product, I decided to work with Figma's "smart animates."
                                                I used illustrations to represent the animals to be chosen.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/OCEANO/MOCKUP/DEKSTOP/2.gif" alt=""/>
                                            <img className="mobile-img" src="images/OCEANO/MOCKUP/MOBILE/2.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4><div className="bullet-white"></div>Interactive map</h4>
                                            <p>I created interactive maps to inform the user in a fun way about where the chosen animal lives and moves to find food. Users can look up information about the animals before proceeding with donation or adoption.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/OCEANO/MOCKUP/DEKSTOP/3.gif" alt=""/>
                                            <img className="mobile-img" src="images/OCEANO/MOCKUP/MOBILE/3.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4><div className="bullet-white"></div>Intuitive adoption process</h4>
                                            <p>The adoption process, similar to the donation process, is very simple and intuitive. In addition to choosing your preferred payment method, you can name your new marine animal.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/OCEANO/MOCKUP/DEKSTOP/4.gif" alt=""/>
                                            <img className="mobile-img" src="images/OCEANO/MOCKUP/MOBILE/4.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4><div className="bullet-white"></div>Track your animal (mobile app)</h4>
                                            <p>Thanks to the "track your pet" function, you can check your pet's location at any time. I think this feature is very important, as the user can create an emotional bond with the animal they have adopted</p>
                                        </div>
                                        <div className="container-img-hifi flex-center">
                                            <img className="mobile-img" src="images/OCEANO/MOCKUP/MOBILE/5.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4><div className="bullet-white"></div>About (dedicated website)</h4>
                                            <p>The about section is useful for deriving information, mission and mindset of the company. In line with the rest of the site, I decided to use creative illustrations and create animated transactions.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/OCEANO/MOCKUP/DEKSTOP/5.gif" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="product-section product-section-only-img">
                        <img src="images/OCEANO/IMMAGINI/16.png" alt=""/>
                    </div>

                    <div className="product-section center-align">
                        <div className="product-container-description w-80">
                            <div className="product-app">
                                <span className="small-subtitle">What have I learnt?</span>
                                <div className="line-product-100 w-60"></div>
                                <h3 className="title-section">Creating solutions to real problems</h3>
                                <p className="text-description">
                                    Oceano is a project made to try to solve a real social problem, namely marine pollution and the resulting danger to aquatic animals. From a technical point of view, during this project I learned and tried experimenting with new transactions and animations, using different effects, including smart animations, to try to make the design not only more functional, but also more fun and interactive.
                                </p>
                                <p className="text-description">
                                    It was very inspiring, during the interviews conducted, to understand users' thoughts on such important and sensitive issues.
                                    One of the most important things I realized during this project is the importance of users' opinions and sensibilities; in fact, they are able to greatly influence your design idea
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <ButtonScroll/>
            </div>
            <Navbar />
        </div>
    )
}

export default Oceano;