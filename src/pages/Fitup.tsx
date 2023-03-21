import React, {useState} from 'react';
import '../style/Menu.scss';
import NavbarRight from "../components/Navbar";
import {Link} from "react-router-dom";
import Logo from "../components/Logo";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Pagination} from "swiper";
import ButtonScroll from "../components/ButtonScroll";
import Navbar from "../components/Navbar";


const Fitup = () => {
    return (
        <div className="general-container">
            <div className="container-main-white">
                <Logo />
                <div className="product-container">
                    <div className="product-container-description center-align">
                        <div >
                            <div className="line-product animate__animated animate__slideInLeft animate__slower"></div>
                            <p className="product-subtitle animate__animated animate__slideInLeft animate__slower">Project</p>
                            <p className="product-title animate__animated animate__fadeInTopRight animate__slower">Fitup mobile app</p>
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
                            <p className="product-title animate__animated animate__slideInLeft animate__slower">Mar - 2023</p>
                        </div>
                        <div>
                            <div className="line-product"></div>
                            <p className="product-subtitle">Tool used</p>
                            <div className="tool-img">
                                <img src="/images/DRONES/icon-and-logo/logo-figma.png" alt=""/>
                                <img src="/images/DRONES/icon-and-logo/logo-photoshop.png" alt=""/>
                            </div>
                        </div>
                        <img className="img-absolute oceano-img" src="/images/FITUP/IMMAGINI/copertina.png" alt=""/>
                        <div className="white-space-product"></div>
                        <div className="line-product"></div>
                        <div className="description-container">
                            <div className="column-6">
                                <span>Fitup - Mobile app</span>
                                <p>
                                    FitUp is a mobile application for workout. Through this product, users can workout where and when they want, share workouts with friends, and get advice on nutrition and good habits for staying fit, all in an engaging and fun way.
                                </p>
                            </div>
                            <div className="column-6">
                                <span>Why Fitup?</span>
                                <p>
                                    FitUp was created with the intention of providing fitness enthusiasts and non-fitness users with a simple, effective and intuitive way to workout where and when they want, directly from their cell phones. FitUp's main goal is to try to keep its users fit while improving their health.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="product-section-img" style={{backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),url('images/FITUP/IMMAGINI/1.png')"}}>
                        <div className="center-align h-100 w-100">
                            <div className="align-the-end">
                                <h3>The importance to keeping fit</h3>
                                <div className="line-80"></div>
                                <p className="w-60">
                                    In recent years, due to little free time and difficult work-life balance, people need quick and fast, but still quality solutions to keep fit and preserve their health. FitUp represents a technological and easy to use solution whenever and wherever you want.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="product-section center-align">
                        <div className="product-container-description w-80">
                            <div className="product-app">
                                <span className="small-subtitle">Project challenge</span>
                                <div className="line-product-100 w-70"></div>
                                <h3 className="title-section">Usable anywhere</h3>
                                <p className="text-description">
                                    The main challenge of this project was to create a useful product that could be easily used in any context and at any time, since fitness users are looking for a flexible tool that can meet their needs anytime and anywhere. In addition, it was not easy to design a user interface that could meet the users' need for quick and sometimes little precise actions while they are exercising.
                                </p>
                            </div>
                            <img className="img-advantages-bibank" src="images/FITUP/IMMAGINI/2.png" alt=""/>
                        </div>
                    </div>
                    <div className="product-section-design-stages ">
                        <div className="product-container-description center-align">
                            <p className="small-subtitle">Design stages</p>
                            <div className="line-product-100"></div>
                            <h3 className="title-section">Step by step</h3>
                            <p className="text-description">
                                I began this project by conducting research on the habits and needs of potential users, conducting interviews and creating several personas. Then I developed the wireframe, taking into account the usability difficulties the user may have while performing exercise. Finally, in accordance with the results of the usability test, I developed the final prototype.
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
                                                    <img src="images/FITUP/icon-and-logo/define.png" alt=""/>
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
                        <img src="images/FITUP/IMMAGINI/3.png" alt=""/>
                    </div>
                    <div className="product-section-design-stages">
                        <div className="product-container-description center-align">
                            <p className="small-subtitle">Who are the potential users?</p>
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
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="card-container">
                                        <div className="main-card card-color">
                                            <div className="avatar">
                                                <img src="images/FITUP/EMOJI/emoji1.png" alt=""/>
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
                                                <img src="images/FITUP/EMOJI/emoji2.png" alt=""/>
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
                                                <img src="images/FITUP/EMOJI/emoji3.png" alt=""/>
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
                                <span className="small-subtitle">Toward the ideation phase</span>
                                <div className="line-product-100"></div>
                                <h3 className="title-section">Point of view</h3>
                                <p className="text-description">
                                    Subsequent to "how might we," I used another technique, called "Point of View." This technique, which consists of writing a feasible action suitable for solving the users' problem, is very useful for exploring really applicable design solutions and also for giving direction to our idea. Below are three different viewpoints for three different needs: time, location and people
                                </p>
                                <div className="slider-card-container">
                                    <Swiper
                                        grabCursor={true}
                                        modules={[Pagination]}
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
                                                    <p>NEED: TIME</p>
                                                </div>
                                                <div className="card-improvement flex-center improvement-color-1">
                                                    <p>A mother of three needs to find a solution to exercise quickly while her daughters are at school because she often sits during the day and wants to keep fit.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-container">
                                                <div className="card-text">
                                                    <p>NEED: LOCATIONS</p>
                                                </div>
                                                <div className="card-improvement flex-center improvement-color-2">
                                                    <p>A young bank employee needs to exercise in a location close to home, as he does not have a car to get to training locations that are too far away.
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-container">
                                                <div className="card-text">
                                                    <p>NEED: PEOPLE</p>
                                                </div>
                                                <div className="card-improvement flex-center improvement-color-3">
                                                    <p> A young entrepreneur wants to find other people to train with as she finds it boring and repetitive to always train alone.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="slider-card-container">
                                    <Swiper
                                        grabCursor={true}
                                        modules={[Pagination]}
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
                                                <img src="images/FITUP/IMMAGINI/4.png" alt=""/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-container">
                                                <img src="images/FITUP/IMMAGINI/5.png" alt=""/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-container">
                                                <img src="images/FITUP/IMMAGINI/6.png" alt=""/>
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
                                            <img src="images/FITUP/icon-and-logo/oceanus.png" alt=""/>
                                        </div>
                                        <div className="grid-item box-payment">
                                            <img src="images/FITUP/icon-and-logo/wwf.png" alt=""/>
                                        </div>
                                        <div className="grid-item box-payment">
                                            <img src="images/FITUP/icon-and-logo/wise.png" alt=""/>
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
                                <img className="w-100 mx-4" src="images/FITUP/IMMAGINI/7.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="product-section product-section-only-img">
                        <img src="images/FITUP/IMMAGINI/7.png" alt=""/>
                    </div>

                    <div className="product-section center-align">
                        <div className="product-container-description w-60">
                            <div className="product-app">
                                <span className="small-subtitle">Wireframe</span>
                                <div className="line-product-100"></div>
                                <h3 className="title-section">Paper Wireframe</h3>
                                <p className="text-description">
                                    I chose to begin the most practical phase of creation by starting with the paper Wireframe. The paper Wireframe allowed me to experiment with different solutions and ideas, testing the product at an early stage, without wasting too much time modifying a project that was already well advanced in development.
                                </p>
                            </div>
                            <div className="list-with-img">
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>On board</h4>
                                    <p>The On-board phase was structured to collect users' data and habits in order to create a suitable training path for them. Therefore, during signup, the user is asked to answer some questions.</p>
                                    <img className="img-wireframe" src="images/FITUP/IMMAGINI/PAPER%20WIREFRAME/1.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Workout</h4>
                                    <p>The workout section is organized in boxes with horizontal scrolling. The user can choose from different exercise options quickly and easily.</p>
                                    <img className="img-wireframe" src="images/FITUP/IMMAGINI/PAPER%20WIREFRAME/2.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Best exercises</h4>
                                    <p>In the "best exercises" section, the user can find different exercises categorized by the type of muscle they want to train. Each exercise has its own specifications and, if desired, the client can get more information with a smart pop-up.</p>
                                    <img className="img-wireframe" src="images/FITUP/IMMAGINI/PAPER%20WIREFRAME/3.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Calendar</h4>
                                    <p>The "calendar" function allows the user to organize his or her week or day by setting appointments, live classes, or workouts of any kind. From here it is also possible to check the workouts already set and delete them if necessary.</p>
                                    <img className="img-wireframe" src="images/FITUP/IMMAGINI/PAPER%20WIREFRAME/4.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Timer and training</h4>
                                    <p>Before starting the workout (whatever it may be) the user will be alerted by a 1-minute timer indicating the warm-up phase. On the workout screen, on the other hand, he will be able to find some unique values such as the number of repetitions performed and calories burned.</p>
                                    <img className="img-wireframe" src="images/FITUP/IMMAGINI/PAPER%20WIREFRAME/5.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Friends</h4>
                                    <p>Through the "Friends" function, you can stay in touch with people who like to exercise and do activities. You can, in addition, also create private online rooms where you can train live with your friends from wherever you are.</p>
                                    <img className="img-wireframe" src="images/FITUP/IMMAGINI/PAPER%20WIREFRAME/6.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-section product-section-only-img">
                        <img src="images/FITUP/IMMAGINI/8.png" alt=""/>
                    </div>

                    <div className="background-digital-wireframe">
                        <div className="product-section center-align">
                            <div className="product-container-description">
                                <div className="product-app w-60">
                                    <span className="small-subtitle">From paper to digital</span>
                                    <div className="line-product-100"></div>
                                    <h3 className="title-section">Digital Wireframe</h3>
                                    <p className="text-description">
                                        The digital wireframe is very helpful in understanding even better the best process to create to lead the user to his end goal. It also provides a very useful testing tool before starting the hi-fi prototype. In this lo-fi prototype I focused on the process and flow that leads the user to the type of training best suited to his or his needs.
                                    </p>
                                </div>
                                <div className="list-with-img-flex w-80">
                                    <div className="item-with-img-flex">
                                        <img src="images/FITUP/DIGITAL%20WIREFRAME%20GIF/1.gif" alt=""/>
                                        <div className="text-flex-container">
                                            <h4>On-board and Signup</h4>
                                            <p>
                                                The On-board phase consists of four animated screens that indicate the main features of the application.

                                                During the Sign-up phase the user is asked for various information including: gender, training frequency, training level, training goal.
                                                All this is done to create a workout path that is best suited for each individual user.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item-with-img-flex">
                                        <img src="images/FITUP/DIGITAL%20WIREFRAME%20GIF/2.gif" alt=""/>
                                        <div className="text-flex-container">
                                            <h4>Its starts with Workout</h4>
                                            <p>Following login or signup the user arrives at the workout page. From here the user can decide on the different types of workouts to be performed.</p>
                                            <p>One of the most important categories is "My workouts" where the client finds tailored workouts, structured based on the answers they gave during signup.
                                                In the details of each workout, the client can see the entire structure broken down by weeks and days.</p>
                                        </div>
                                    </div>
                                    <div className="item-two-images">
                                        <div className="text-flex-container">
                                            <h4>A wide choise</h4>
                                            <p>
                                                Inside FitUp we find several training modes, including "Best exercises" and "Liveclass."

                                                In the former, the user can decide which body part to train and, based on his experience and training level, decide on specific exercises. While in "Liveclass" the user has the opportunity to take live classes with live streaming instructors, together with other connected people from all over the world.
                                            </p>
                                        </div>
                                        <div className="img-flex-container">
                                            <img src="images/FITUP/DIGITAL%20WIREFRAME%20GIF/3.gif" alt=""/>
                                            <img src="images/FITUP/DIGITAL%20WIREFRAME%20GIF/4.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-two-images">
                                        <div className="text-flex-container">
                                            <h4>Check your progress and stay in shape</h4>
                                            <p>
                                                With the "Progress" and "Healthy" functions you can monitor your workout and body progress and keep fit through specific advice.

                                                Through the "Progress" function you will be able to check various data such as calories burned and weight changes that have occurred over the past few days/months/years.
                                                While in the "Healty" section you will find articles, recipes and advice regarding nutrition and mental and physical well-being.
                                            </p>
                                        </div>
                                        <div className="img-flex-container">
                                            <img src="images/FITUP/DIGITAL%20WIREFRAME%20GIF/5.gif" alt=""/>
                                            <img src="images/FITUP/DIGITAL%20WIREFRAME%20GIF/6.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img-flex">
                                        <img src="images/FITUP/DIGITAL%20WIREFRAME%20GIF/7.gif" alt=""/>
                                        <div className="text-flex-container">
                                            <h4>Training with friends</h4>
                                            <p>Train with your friends online wherever you are. In the "Friends" section, users can create private online rooms, chat with friends, and meet new people who are passionate about fitness.

                                                In this section users can also create posts that will be visible only to their friends, adding photos, videos or animated gifs.</p>
                                        </div>
                                    </div>
                                    <div className="item-with-img-flex">
                                        <img src="images/FITUP/DIGITAL%20WIREFRAME%20GIF/8.gif" alt=""/>
                                        <div className="text-flex-container">
                                            <h4>Check your tasks</h4>
                                            <p>With the "Calendar" function, we can check our commitments and already booked workouts. Also, in case the user has an unforeseen event, he can cancel or postpone the engagement.

                                                Booking a new activity is simple, fast and intuitive. This is done by simply indicating the time, day, and choosing the type of activity you want to do.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item-two-images">
                                        <div className="text-flex-container">
                                            <h4>Simple and intuitive</h4>
                                            <p>
                                                The training screen was designed so that the video was the main element and the user was not distracted by it.

                                                Within this screen we can find some very important information including elapsed time, repetitions done, and calories burned.
                                                When it is a non-live workout, on the right side the user can find a small pop-up menu, from which he can go forward or backward, looking for the exercise he wants.
                                            </p>
                                        </div>
                                        <div className="img-flex-container">
                                            <img className="w-100" src="images/FITUP/DIGITAL%20WIREFRAME%20GIF/9.gif" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="product-section product-section-only-img">
                        <img src="images/FITUP/IMMAGINI/9.png" alt=""/>
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
                                            <img className="dekstop" src="images/FITUP/MOCKUP/MOBILE/1.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4><div className="bullet-white"></div>Homepage (dedicated website)</h4>
                                            <p>For the dedicated sitoweb, I decided to use illustrations in the first part of the homepage to create a visual that is both beautiful to look at and interactive. From the homepage one can then access all the functions of Oceano, including donations and adoptions.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/FITUP/MOCKUP/DEKSTOP/1.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4><div className="bullet-white"></div>Simple donation flow</h4>
                                            <p>The donation process, similar for both the dedicated sitoweb and the mobile app, follows a very simple flow made in steps. In the dekstop version, in order to create a more interactive product, I decided to work with Figma's "smart animates."
                                                I used illustrations to represent the animals to be chosen.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/FITUP/MOCKUP/DEKSTOP/2.gif" alt=""/>
                                            <img className="mobile-img" src="images/FITUP/MOCKUP/MOBILE/2.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4><div className="bullet-white"></div>Interactive map</h4>
                                            <p>I created interactive maps to inform the user in a fun way about where the chosen animal lives and moves to find food. Users can look up information about the animals before proceeding with donation or adoption.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/FITUP/MOCKUP/DEKSTOP/3.gif" alt=""/>
                                            <img className="mobile-img" src="images/FITUP/MOCKUP/MOBILE/3.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4><div className="bullet-white"></div>Intuitive adoption process</h4>
                                            <p>The adoption process, similar to the donation process, is very simple and intuitive. In addition to choosing your preferred payment method, you can name your new marine animal.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/FITUP/MOCKUP/DEKSTOP/4.gif" alt=""/>
                                            <img className="mobile-img" src="images/FITUP/MOCKUP/MOBILE/4.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4><div className="bullet-white"></div>Track your animal (mobile app)</h4>
                                            <p>Thanks to the "track your pet" function, you can check your pet's location at any time. I think this feature is very important, as the user can create an emotional bond with the animal they have adopted</p>
                                        </div>
                                        <div className="container-img-hifi flex-center">
                                            <img className="mobile-img" src="images/FITUP/MOCKUP/MOBILE/5.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4><div className="bullet-white"></div>About (dedicated website)</h4>
                                            <p>The about section is useful for deriving information, mission and mindset of the company. In line with the rest of the site, I decided to use creative illustrations and create animated transactions.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/FITUP/MOCKUP/DEKSTOP/5.gif" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="product-section product-section-only-img">
                        <img src="images/FITUP/IMMAGINI/16.png" alt=""/>
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

export default Fitup;