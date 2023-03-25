import React, {useState} from 'react';
import '../style/Menu.scss';
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";
import Logo from "../components/Logo";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Pagination} from "swiper";
import ButtonScroll from "../components/ButtonScroll";


const Bibank = () => {
    return (
        <div className="general-container">
            <div className="container-main-white">
                <Logo />
                <div className="product-container">
                    <div className="product-container-description center-align">
                        <div >
                            <div className="line-product animate__animated animate__slideInLeft animate__slower"></div>
                            <p className="product-subtitle animate__animated animate__slideInLeft animate__slower">Project</p>
                            <p className="product-title animate__animated animate__fadeInTopRight animate__slower">Bibank responsive website</p>
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
                            <p className="product-title animate__animated animate__slideInLeft animate__slower">Dec - 2021</p>
                        </div>
                        <div>
                            <div className="line-product"></div>
                            <p className="product-subtitle">Tool used</p>
                            <div className="tool-img">
                                <img src="/images/DRONES/icon-and-logo/logo-figma.png" alt=""/>
                                <img src="/images/DRONES/icon-and-logo/logo-photoshop.png" alt=""/>
                            </div>
                        </div>
                        <img className="img-absolute" src="/images/BIBANK/IMMAGINI/copertina.png" alt=""/>
                        <div className="white-space-product"></div>
                        <div className="line-product"></div>
                        <div className="description-container">
                            <div className="column-6">
                                <span>Bibank - responsive website</span>
                                <p>
                                    Bibank is a responsive website that allows its users to perform various banking transactions directly from their computer or smartphone. Bibank allows users to make payments, invest in classic financial products and cryptocurrencies, and much more wherever they are and whenever they want.
                                </p>
                            </div>
                            <div className="column-6">
                                <span>Why Bibank?</span>
                                <p>
                                    Bibank was created with the intention of creating a product that would allow users to manage their finances in a simple and organised way, without having to visit their bank in person. One of my main goals, as a user of several online banking services, was to create an intuitive and fun user flow, alternating colourful illustrations and icons with simple and easily understandable text.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="product-section-img" style={{backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),url('images/BIBANK/IMMAGINI/1.png')"}}>
                        <div className="center-align h-100 w-100">
                            <div className="align-the-end">
                                <h3>The new online banking</h3>
                                <div className="line-80"></div>
                                <p className="w-60">
                                    In recent years, people have less and less time to devote to their private and personal activities, including managing their assets. Bibank offers the possibility to manage one's money remotely in a simple and secure way, optimising users' days and time.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="product-section center-align">
                        <div className="product-container-description w-80">
                            <div className="product-app">
                                <span className="small-subtitle">Project challenge</span>
                                <div className="line-product-100 w-70"></div>
                                <h3 className="title-section">Responsive website</h3>
                                <p className="text-description">
                                    The greatest difficulty in this project was creating a responsive product that could meet all the needs of e-banking users. Many of these users are looking for a way to perform all kinds of financial transactions without going to the physical branch.
                                </p>
                            </div>
                            <img className="img-advantages-bibank" src="images/BIBANK/IMMAGINI/2.png" alt=""/>
                        </div>
                    </div>
                    <div className="product-section-design-stages ">
                        <div className="product-container-description center-align">
                            <p className="small-subtitle">Design stages</p>
                            <div className="line-product-100"></div>
                            <h3 className="title-section">Step by step</h3>
                            <p className="text-description">
                                I began the project by conducting a (two-week) qualitative survey of potential e-banking users. I then created the wireframe, both for the dekstop and mobile versions, performing a small usability study before moving on to creating the mockup.
                                The last few weeks were spent creating the hi-fi prototype and the final usability study.
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
                                                    <img src="images/DRONES/icon-and-logo/icona%20grafico.png" alt=""/>
                                                </div>
                                                <p>Competitive Audit</p>
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
                                            <div className="column-container " style={{gridRow:'3',width:'100%'}}>
                                                <div className="square five-color-square">
                                                    <p>1° Usability phase</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="column-container" style={{gridRow:'1.5',marginTop:'3rem'}}>
                                            <div className="square fourth-color-square">
                                                <div className="circle">
                                                    <img src="images/DRONES/icon-and-logo/icona%20pennello.png" alt=""/>
                                                </div>
                                                <p>Design phase</p>
                                            </div>
                                            <div className="subsquare">
                                                Desktop Design System
                                            </div>
                                            <div className="subsquare">
                                                Mobile Design System
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="column-container " style={{gridRow:'5',width:'100%'}}>
                                            <div className="square five-color-square">
                                                <p>2° Usability phase</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-section product-section-only-img">
                        <img src="images/BIBANK/IMMAGINI/3.png" alt=""/>
                    </div>
                    <div className="product-section-design-stages">
                        <div className="product-container-description center-align">
                            <p className="small-subtitle">Who are the potential users?</p>
                            <div className="line-product-100"></div>
                            <h3 className="title-section">User Personas</h3>
                            <div className="text-description">
                                In order to create the following Personas, I asked myself the following questions to create empathy with the potential user categories:
                                <ul>
                                    <li>
                                        How would people like to manage their savings?
                                    </li>
                                    <li>
                                        In what ways would people feel safer managing their money online?
                                    </li>
                                    <li>
                                        What might make a user prefer an online bank over a physical bank?
                                    </li>
                                    <li>
                                        What functionality should an online bank have?
                                    </li>
                                    <li>
                                        What are their pain points?
                                    </li>
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
                                                <img src="images/DRONES/EMOJI/emoji1.png" alt=""/>
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
                                                <img src="images/DRONES/EMOJI/emoji1.png" alt=""/>
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
                                                <img src="images/DRONES/EMOJI/emoji1.png" alt=""/>
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
                                <span className="small-subtitle">Who are the potential users?</span>
                                <div className="line-product-100"></div>
                                <h3 className="title-section">Empathy Map</h3>
                                <p className="text-description">
                                    I created an empathy map to better understand users' unconscious emotions and thoughts. This map was created during an interview with a potential home banking user. I focused more on what the user was thinking, saying, doing and feeling.
                                </p>
                            </div>
                        </div>
                        <div className="emphaty-map">
                            <div className="container-map">
                                <div className="square-map" style={{background:"#FFCFCF"}}>
                                    <h3 className="title">Says</h3>
                                    <ul>
                                        <li>. " I often don't have time to go to the bank, I work all day."</li>
                                        <li>. "It's important to me that a website is clear and inspires confidence."</li>
                                        <li>. " I am not afraid to pay online. By now, cybersecurity is at a very high level."</li>
                                    </ul>
                                </div>
                                <div className="square-map" style={{background:"#A5FFBE"}}>
                                    <h3 className="title">Thinks</h3>
                                    <ul>
                                        <li>. Some websites should be clearer and easier to understand</li>
                                        <li>. She prefers to do online transfers because he wastes less time</li>
                                        <li>. There should be more information about the status of payments made online</li>
                                    </ul>
                                </div>
                                <div className="square-map" style={{background:"#ADD2FF"}}>
                                    <h3 className="title">Does</h3>
                                    <ul>
                                        <li>. Make payments and transfers online</li>
                                        <li>. Check your current account balance directly from the bank's website</li>
                                        <li>. Sometimes struggles to understand some website features</li>
                                    </ul>
                                </div>
                                <div className="square-map" style={{background:"#FFFBA4"}}>
                                    <h3 className="title">Feels</h3>
                                    <ul>
                                        <li>. Stressed when waiting for payments she made online to arrive</li>
                                        <li>. Frustrated by lack of information regarding recurring payments</li>
                                        <li>. Happy and satisfied when she can manage her savings without going to the ban</li>
                                    </ul>
                                </div>
                                <div className="avatar-circle">
                                    <img src="images/BIBANK/EMOJI/emoji%204.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-section product-section-only-img">
                        <img src="images/DRONES/IMMAGINI/road.png" alt=""/>
                    </div>
                    <div className="product-section center-align">
                        <div className="product-container-description w-80">
                            <div className="product-app">
                                <span className="small-subtitle">The market</span>
                                <div className="line-product-100 w-70"></div>
                                <h3 className="title-section">Competitive audit</h3>
                                <p className="text-description">
                                    I decided, following the study of potential users, to perform market research on some of the best-known online banking services (direct and indirect competitors), including a smaller, lesser-known local entity, so as to have as broad a spectrum as possible of the features and strengths (and also weaknesses) of competitors in the market.

                                </p>
                                <a href="#">Click here to view the REPORT.</a>

                                <div className="marks-container">
                                    <div className="legenda">
                                        <span className="subtitle">Marks:</span>
                                        <span>Good = <img src="images/BIBANK/ICONELOGHI/check%20green.png" alt=""/></span>
                                        <span>Needs works = <img src="images/BIBANK/ICONELOGHI/check%20grey.png" alt=""/></span>
                                    </div>
                                    <div className="grid-payment grid-payment-column-5">
                                        <div className="grid-item"></div>
                                        <div className="grid-item box-payment">
                                            <img src="images/BIBANK/ICONELOGHI/logo%20revolut.png" alt=""/>
                                        </div>
                                        <div className="grid-item box-payment">
                                            <img src="images/BIBANK/ICONELOGHI/logo%20paypal.png" alt=""/>
                                        </div>
                                        <div className="grid-item box-payment">
                                            <img src="images/BIBANK/ICONELOGHI/logo%20wise.png" alt=""/>
                                        </div>
                                        <div className="grid-item box-payment">
                                            <img src="images/BIBANK/ICONELOGHI/logo%20credem.png" alt=""/>
                                        </div>
                                        <div className="grid-item box-text">
                                            <p>Target Audience</p>
                                        </div>
                                        <div className="grid-item">
                                            <p>Worldwide</p>
                                        </div>
                                        <div className="grid-item">
                                            <p>Worldwide</p>
                                        </div>
                                        <div className="grid-item">
                                            <p>Worldwide</p>
                                        </div>
                                        <div className="grid-item">
                                            <p>Italy</p>
                                        </div>
                                        <div className="grid-item box-text">
                                            <p>Desktop Experience</p>
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
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20green.png" alt=""/>
                                        </div>
                                        <div className="grid-item box-text">
                                            <p>Feautures</p>
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
                                            <img src="images/BIBANK/ICONELOGHI/check%20grey.png" alt=""/>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20grey.png" alt=""/>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20grey.png" alt=""/>
                                        </div>
                                        <div className="grid-item box-text">
                                            <p>User Flow</p>
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
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20green.png" alt=""/>
                                        </div>
                                        <div className="grid-item box-text">
                                            <p>Navigation</p>
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
                                            <img src="images/BIBANK/ICONELOGHI/check%20green.png" alt=""/>
                                        </div>
                                        <div className="grid-item">
                                            <img src="images/BIBANK/ICONELOGHI/check%20grey.png" alt=""/>
                                        </div>
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
                                                    <img src="images/BIBANK/IMMAGINI/4.png" alt=""/>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="card-container">
                                                    <img src="images/BIBANK/IMMAGINI/5.png" alt=""/>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="card-container">
                                                    <img src="images/BIBANK/IMMAGINI/6.png" alt=""/>
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
                                <img className="w-100 mx-4" src="images/BIBANK/IMMAGINI/7.png" alt=""/>
                            </div>
                        </div>
                    </div>


                    <div className="product-section product-section-only-img">
                        <img src="images/BIBANK/IMMAGINI/8.png" alt=""/>
                    </div>
                    <div className="product-section center-align">
                        <div className="product-container-description w-60">
                            <div className="product-app">
                                <span className="small-subtitle">Desktop Wireframe</span>
                                <div className="line-product-100"></div>
                                <h3 className="title-section">Paper Wireframe</h3>
                                <p className="text-description">
                                    I decided to start the design process from the paper wireframe, starting with the dekstop version, and then continuing with the mobile version.
                                </p>
                                <p className="text-description">
                                    The paper wireframe allowed me to experiment with different solutions and ideas, testing the product at an early stage, without wasting too much time modifying a design that was already at an advanced stage of development.
                                    Below are some of the main screens.
                                </p>
                            </div>
                            <div className="list-with-img">
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Homepage</h4>
                                    <p>Once landed on the site, the user arrives at the homepage where he finds various information about the bank and all the various features and services offered, this is before accessing his private area.</p>
                                    <img className="img-wireframe" src="images/BIBANK/PAPER%20WIREFRAME/Dekstop/1.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Login and Signup</h4>
                                    <p>The login and registration, both accessible from the homepage, are fast, intuitive, and with few inputs to enter. I decided to maintain these two frames without going below the fold.</p>
                                    <img className="img-wireframe" src="images/BIBANK/PAPER%20WIREFRAME/Dekstop/2.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Personal area</h4>
                                    <p>Once logged in, the user arrives at his or her personal area. From the research done during the empathizing phase, it was found that the first thing the user wants to see is their balance sheet.</p>
                                    <img className="img-wireframe" src="images/BIBANK/PAPER%20WIREFRAME/Dekstop/3.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Investments and Crypto</h4>
                                    <p>Among the various features included within the product we find the ability to invest in classic financial products and cryptocurrencies, all in a simple and intuitive way.</p>
                                    <img className="img-wireframe" src="images/BIBANK/PAPER%20WIREFRAME/Dekstop/4.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Card and Statistics</h4>
                                    <p>For frequent users and regular investors, I decided to create the "cards" and "budget and statistics" sections, where clients can monitor their cards and everything about their assets.</p>
                                    <img className="img-wireframe" src="images/BIBANK/PAPER%20WIREFRAME/Dekstop/5.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Payments and Money Box</h4>
                                    <p>The payments section is vitally important within home banking, so I have tried to make it as intuitive as possible so that even less experienced people can make online payments without any problems.</p>
                                    <img className="img-wireframe" src="images/BIBANK/PAPER%20WIREFRAME/Dekstop/6.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-section center-align">
                        <div className="product-container-description w-60">
                            <div className="product-app">
                                <span className="small-subtitle">Mobile Wireframe</span>
                                <div className="line-product-100"></div>
                                <h3 className="title-section">From dekstop to mobile</h3>
                                <p className="text-description">
                                    During this project, I decided to start by creating wireframes from the largest screen (in terms of size) to the smallest screen.
                                </p>
                                <p className="text-description">
                                    After studying the spaces and elements that, because they were not entirely necessary, could be removed, I created the paper responsive wireframe of the mobile version.
                                    Below are some examples that you can see by scrolling horizontally.
                                </p>
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
                                                <img src="images/BIBANK/PAPER%20WIREFRAME/Mobile/wb1.png" alt=""/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-container">
                                                <img src="images/BIBANK/PAPER%20WIREFRAME/Mobile/wb2.png" alt=""/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-container">
                                                <img src="images/BIBANK/PAPER%20WIREFRAME/Mobile/wb3.png" alt=""/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-container">
                                                <img src="images/BIBANK/PAPER%20WIREFRAME/Mobile/wb4.png" alt=""/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-container">
                                                <img src="images/BIBANK/PAPER%20WIREFRAME/Mobile/wb5.png" alt=""/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-container">
                                                <img src="images/BIBANK/PAPER%20WIREFRAME/Mobile/wb6.png" alt=""/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-container">
                                                <img src="images/BIBANK/PAPER%20WIREFRAME/Mobile/wb7.png" alt=""/>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-section product-section-only-img">
                        <img src="images/BIBANK/IMMAGINI/9.png" alt=""/>
                    </div>

                    <div className="background-digital-wireframe">
                        <div className="product-section center-align">
                            <div className="product-container-description">
                                <div className="product-app w-60">
                                    <span className="small-subtitle">From paper to digital</span>
                                    <div className="line-product-100"></div>
                                    <h3 className="title-section">Digital Wireframe</h3>
                                    <p className="text-description">
                                        Following usability tests performed on some potential users, I developed my digital wireframe. This lo-fi version was very helpful in understanding even better the best process to create in order to lead the user to his final goal.
                                    </p>
                                </div>
                                <div className="list-with-img w-80">
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4>Simple registration</h4>
                                            <p>Once on the site, the user can navigate to the public part, discovering all the various services offered by the product and registering in one simple step; in fact, all the user has to do to start using the product is to enter the e-mail.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/BIBANK/DIGITAL%20WIREFRAME%20GIF/Dekstop/1.gif" alt=""/>
                                            <img className="mobile-img" src="images/BIBANK/DIGITAL%20WIREFRAME%20GIF/Mobile/1.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4>All in one place</h4>
                                            <p>Once logged in or signup, the user will be taken to the personal area where, within the first visible page, there will be all the most important features and those most used by the user.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/BIBANK/DIGITAL%20WIREFRAME%20GIF/Dekstop/2.gif" alt=""/>
                                            <img className="mobile-img" src="images/BIBANK/DIGITAL%20WIREFRAME%20GIF/Mobile/2.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4>Column structure</h4>
                                            <p>With the alternating column structure (2 and 1), investing is very simple, as the user has the ability to see the real-time performance of the stocks next to each financial product he or she is about to buy, all on a neat and intuitive page.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/BIBANK/DIGITAL%20WIREFRAME%20GIF/Dekstop/3.gif" alt=""/>
                                            <img className="mobile-img" src="images/BIBANK/DIGITAL%20WIREFRAME%20GIF/Mobile/3.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4>Simple and effective flow</h4>
                                            <p>Thanks to the simple and intuitive flow, investing and managing your cryptocurrencies is easy and stress-free. You can access the crypto area from the hamburger menu (mobile version) or directly from your personal balance.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/BIBANK/DIGITAL%20WIREFRAME%20GIF/Dekstop/4.gif" alt=""/>
                                            <img className="mobile-img" src="images/BIBANK/DIGITAL%20WIREFRAME%20GIF/Mobile/4.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4>Pay from wherever you want</h4>
                                            <p>With advanced payment features you can make payments when and where you want, create recurring payments, donations, and manage your subscription plan, right from your computer or cell phone.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/BIBANK/DIGITAL%20WIREFRAME%20GIF/Dekstop/5.gif" alt=""/>
                                            <img className="mobile-img" src="images/BIBANK/DIGITAL%20WIREFRAME%20GIF/Mobile/5.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4>Innovative features</h4>
                                            <p>In Bibank you can find innovative features such as the "Money Box" section, in which you can manage your savings and create a piggy bank to grow your savings.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/BIBANK/DIGITAL%20WIREFRAME%20GIF/Dekstop/5.gif" alt=""/>
                                            <img className="mobile-img" src="images/BIBANK/DIGITAL%20WIREFRAME%20GIF/Mobile/5.gif" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-section product-section-only-img">
                        <img src="images/BIBANK/IMMAGINI/10.png" alt=""/>
                    </div>

                    <div className="graphic-palette">
                        <div className="product-section center-align" style={{paddingBottom:'0px!important',paddingTop:'3rem',minHeight:'0'}}>
                            <div className="product-container-description w-80">
                                <div className="product-app">
                                    <span className="small-subtitle">Mockup</span>
                                    <div className="line-product-100 w-60"></div>
                                    <h3 className="title-section">Design system</h3>
                                    <p className="text-description w-70">
                                        To create the mockup and subsequent hi-fi prototype, I tried to use simple, contrasting colors, easily readable fonts, and a two-column structure.
                                        Information, depending on the category it belongs to, is divided within boxes to facilitate user navigation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="palette-title">
                            <p><strong>Colors / 01</strong></p>
                        </div>
                        <div className="grid-color-palette">
                            <div className="item item1" style={{ backgroundColor:'white' }}></div>
                            <div className="item item2" style={{ backgroundColor:'#000000' }}>
                                <strong>Black</strong>
                                <p>Hex: 000000</p>
                            </div>
                            <div className="item item4" style={{ backgroundColor:'#DCDCDC',color:'black' }}>
                                <strong>Light gray</strong>
                                <p>Hex:DCDCDC</p>
                            </div>
                            <div className="item item5" style={{ backgroundColor:'#EBEBEB',color:'black' }}>
                                <strong>Super light gray</strong>
                                <p>Hex: EBEBEB</p>
                            </div>
                            <div className="item item6" style={{ backgroundColor:'#FFEB85',color:'black' }}>
                                <strong>Sand</strong>
                                <p>Hex: FFEB85</p>
                            </div>
                            <div className="item item7" style={{ backgroundColor:'#4FD953' }}>
                                <strong>Green</strong>
                                <p>Hex: 4FD953</p>
                            </div>
                            <div className="item item8" style={{ backgroundColor:'#FF0000' }}>
                                <strong>Red</strong>
                                <p>Hex: FF0000</p>
                            </div>
                        </div>
                        <div className="product-section-bc-black">
                            <div className="palette-title">
                                <p><strong>Fonts / 02</strong></p>
                            </div>
                            <div className="center-align">
                                <p className="graphic-font-title">Microsoft Tai Le</p>
                                <div className="row-flex">
                                    <img src="images/BIBANK/IMMAGINI/12.png" alt=""/>
                                    <div className="font-table">
                                        <div className="uppercase-letter">ABCDEFGHILMNOPQRSTUVZ</div>
                                        <div className="square-font">
                                            <p>*Weight</p>
                                            <strong>(Bold)</strong>
                                        </div>
                                        <div className="lowercase-letter">abcdefghijklmnoprstuvz</div>
                                        <div className="bold-letter"><span>Aa</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="center-align">
                                <p className="graphic-font-title">Noto Sans Arabi UI</p>
                                <div className="row-flex">
                                    <img src="images/BIBANK/IMMAGINI/13.png" alt=""/>
                                    <div className="font-table">
                                        <div className="uppercase-letter">ABCDEFGHILMNOPQRSTUVZ</div>
                                        <div className="square-font">
                                            <p>*Weight</p>
                                            <strong>(Regular)</strong>
                                        </div>
                                        <div className="lowercase-letter">abcdefghijklmnoprstuvz</div>
                                        <div className="bold-letter"><span>Aa</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-section-bc-black">
                        <div className="product-section center-align">
                            <div className="product-container-description">
                                <div className="product-app w-60">
                                    <span className="small-subtitle">The result</span>
                                    <div className="line-product-100"></div>
                                    <h3 className="title-section">Hi-fi Prototype</h3>
                                    <p className="text-description">
                                        Following a second usability test on the digital wireframe, I created the final prototype. I tried to make the user interface simple, intuitive, and fun, alternating between colorful illustrations and clearly visible text and input fields.
                                    </p>
                                </div>
                                <div className="list-with-img w-80">
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4><div className="bullet-white"></div>Homepage</h4>
                                            <p>The website greets the user with the home page. In this first part the customer can discover the various features of the website and access the personalized area via login and registration.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/BIBANK/MOCKUP/Dekstop/1.gif" alt=""/>
                                            <img className="mobile-img" src="images/BIBANK/MOCKUP/Mobile/1.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4><div className="bullet-white"></div>Login and Signup</h4>
                                            <p>I decided to create a simple sign up, where the user is asked to enter only a few details, so that it is simple and stress-free.  I tried to keep the login/signup process consistent on both devices (computer and mobile phone).</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/BIBANK/MOCKUP/Dekstop/2.gif" alt=""/>
                                            <img className="mobile-img" src="images/BIBANK/MOCKUP/Mobile/2.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4><div className="bullet-white"></div>Full control</h4>
                                            <p>The first page the user sees as soon as he enters the personal are a is the "Dashboard." Here he can find all the main information (summarized) about his assets. Two other functions for monitoring one's account and assets are "Balance Sheet" and "Budget and Statistics".</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/BIBANK/MOCKUP/Dekstop/3.gif" alt=""/>
                                            <img className="mobile-img" src="images/BIBANK/MOCKUP/Mobile/3.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4><div className="bullet-white"></div>Cryptocurrency</h4>
                                            <p>Investing in cryptocurrencies is simple and safe with Bibank.
                                                Create your own e-wallet and manage cryptocurrencies directly from your PC or smartphone.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/BIBANK/MOCKUP/Dekstop/4.gif" alt=""/>
                                            <img className="mobile-img" src="images/BIBANK/MOCKUP/Mobile/4.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4><div className="bullet-white"></div>All your financial product you need</h4>
                                            <p>In Bibank you can choose different types of investments based on your favorite financial products. In addition, you can check the performance of your stocks from a simple interactive screen directly from your cell phone or smartphone.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/BIBANK/MOCKUP/Dekstop/5.gif" alt=""/>
                                            <img className="mobile-img" src="images/BIBANK/MOCKUP/Mobile/5.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4><div className="bullet-white"></div>Manage your cards</h4>
                                            <p>You can check and create new debit/credit cards directly from your personal area. In addition, you can make online payments at the click of a button.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/BIBANK/MOCKUP/Dekstop/6.gif" alt=""/>
                                            <img className="mobile-img" src="images/BIBANK/MOCKUP/Mobile/6.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4><div className="bullet-white"></div>Pay from wherever you want</h4>
                                            <p>Make payments or request money through Bibank quickly and easily. Create regular payments for subscriptions and bills and make donations to your favorite charity.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/BIBANK/MOCKUP/Dekstop/7.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-two-images d-flex">
                                        <div className="w-50 flex-center" style={{ backgroundColor:'rgba(111, 141, 201, 1)' }}>
                                            <img src="images/BIBANK/Mockup/Dekstop/5.gif" alt=""/>
                                        </div>
                                        <div className="w-50 flex-center">
                                            <img src="images/BIBANK/Mockup/Mobile/5.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img">
                                        <div className="text-container">
                                            <h4><div className="bullet-white"></div>Manage your subscription</h4>
                                            <p>Manage your Bibank membership directly from your personal area. Change subscription plans or apply for new debit/credit cards in a few simple steps.</p>
                                        </div>
                                        <div className="container-img">
                                            <img className="dekstop" src="images/BIBANK/MOCKUP/Dekstop/8.gif" alt=""/>
                                            <img className="mobile-img" src="images/BIBANK/MOCKUP/Mobile/6.gif" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-section product-section-only-img">
                        <img src="images/BIBANK/IMMAGINI/16.png" alt=""/>
                    </div>

                    <div className="product-section center-align">
                        <div className="product-container-description w-80">
                            <div className="product-app">
                                <span className="small-subtitle">What have I learnt?</span>
                                <div className="line-product-100 w-60"></div>
                                <h3 className="title-section">How to design a responsive website</h3>
                                <p className="text-description">
                                    Bibank was my second project within the Google UX Design course and my first responsive project. From this project I learned the importance of planning in creating a site usable from different devices. I also worked on an area, finance, that I really like and use on a daily basis.
                                </p>
                                <p className="text-description">
                                    I developed this project using Adobe XD software, consequently learning the main functions of this important tool.
                                    In this project I experimented with techniques and methods during the research and ideation phase that were different from those previously used. From here, I realized how much you really never stop learning and that getting to a goal there are (almost) always several viable paths.
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

export default Bibank;