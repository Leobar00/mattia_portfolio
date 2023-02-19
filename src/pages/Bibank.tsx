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
                            <div className="line-product"></div>
                            <p className="product-subtitle">Project</p>
                            <p className="product-title">Bibank responsive website</p>
                        </div>
                        <div>
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
                            <p className="product-subtitle">Project duration</p>
                            <p className="product-title">Dec - 2021</p>
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
                                freeMode={true}
                                modules={[FreeMode, Pagination]}
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
                        <div className="product-container-description w-60">
                            <div className="product-app">
                                <span className="small-subtitle">The market</span>
                                <div className="line-product-100"></div>
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
                                    <div className="grid-payment">
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-section product-section-only-img">
                        <img src="images/DRONES/IMMAGINI/4.png" alt=""/>
                    </div>
                    <div className="product-section center-align">
                        <div className="product-container-description w-60">
                            <div className="product-app">
                                <span className="small-subtitle">Ideation</span>
                                <div className="line-product-100"></div>
                                <h3 className="title-section">Storyboard</h3>
                                <p className="text-description">
                                    I used the 'storyboard' conception technique to look for new ideas for the wireframe realisation, still trying to empathise with the potential user.
                                </p>
                                <p className="text-description">
                                    I therefore developed two different types of storyboards, the first one with the focus on the environment and emotions of the user and the second one with the focus on the functionality of the prototype.
                                </p>
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
                                                <img src="images/DRONES/IMMAGINI/6.png" alt=""/>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-container">
                                                <img src="images/DRONES/IMMAGINI/7.png" alt=""/>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-section product-section-only-img">
                        <img src="images/DRONES/IMMAGINI/7A.png" alt=""/>
                    </div>
                    <div className="product-section center-align">
                        <div className="product-container-description w-60">
                            <div className="product-app">
                                <span className="small-subtitle">Wireframe</span>
                                <div className="line-product-100"></div>
                                <h3 className="title-section">Paper Wireframe</h3>
                                <p className="text-description">
                                    I chose to begin the most practical phase of creation by starting with the paper Wireframe.
                                </p>
                                <p className="text-description">
                                    The paper Wireframe allowed me to experiment with different solutions and ideas, testing the product at an early stage, without wasting too much time modifying a project that was already well advanced in development.
                                    I used the 'storyboard' conception technique to look for new ideas for the wireframe realisation, still trying to empathise with the potential user.
                                </p>
                            </div>
                            <div className="list-with-img">
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Login / Sign up</h4>
                                    <p>I chose to create a quick and easy login and sign-up process, with little data to enter to gain access.</p>
                                    <img src="images/DRONES/IMMAGINI/PAPER%20WIREFRAME/8.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Track page</h4>
                                    <p>From the research I did, the most popular action performed by users is to track their parcel, so I decided to put this feature in the first frames. The search looks very simple and offers two different ways to track the parcel.</p>
                                    <img src="images/DRONES/IMMAGINI/PAPER%20WIREFRAME/9.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Maps and scanner</h4>
                                    <p>Interactive maps show in real time where the parcel is (whether you are the sender or the recipient). I thought of including a 'scanner' function so that you can follow the parcel without necessarily knowing the order number.</p>
                                    <img src="images/DRONES/IMMAGINI/PAPER%20WIREFRAME/10.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Deliver</h4>
                                    <p>My goal was to create a shipping flow that was as intuitive, easy and fast as possible. By entering a little information you can create a totally new shipment.</p>
                                    <img src="images/DRONES/IMMAGINI/PAPER%20WIREFRAME/11.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Shipping history</h4>
                                    <p>I created this session to help users find the details of previous shipments. A convenient horizontal scrolling menu makes it easy to search for shipments on a time basis..</p>
                                    <img src="images/DRONES/IMMAGINI/PAPER%20WIREFRAME/12.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Contacts</h4>
                                    <p>This section is designed to speed up the shipping process for people who receive packages from us more frequently than others.</p>
                                    <img src="images/DRONES/IMMAGINI/PAPER%20WIREFRAME/13.png" alt=""/>
                                </div>
                            </div>
                        </div>
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
                                <div className="list-with-img-flex w-80">
                                    <div className="item-with-img-flex">
                                        <img src="images/DRONES/DIGITAL%20WIREFRAME%20GIF/Signup.gif" alt=""/>
                                        <div className="text-flex-container">
                                            <h4>Signup</h4>
                                            <p>Signup (and also login) are simple fast and intuitive. The user only needs to enter a few pieces of information and in a few simple steps he or she is immediately on the main page. This path is designed to bring as little stress as possible to the user while filling in.</p>
                                        </div>
                                    </div>
                                    <div className="item-with-img-flex">
                                        <img src="images/DRONES/DIGITAL%20WIREFRAME%20GIF/track.gif" alt=""/>
                                        <div className="text-flex-container">
                                            <h4>Track pack</h4>
                                            <p>Tracking the parcel, both incoming and outgoing, is very simple. Based on the research done, I decided to put this feature on the homepage, as it is the most used by users.</p>
                                            <p>To track the package, the user has two different ways: by entering the shipment code or through the "scanner" function, that is, by scanning the qr code of the shipment with their smartphone.</p>
                                        </div>
                                    </div>
                                    <div className="item-with-img-flex">
                                        <img src="images/DRONES/DIGITAL%20WIREFRAME%20GIF/Deliver.gif" alt=""/>
                                        <div className="text-flex-container">
                                            <h4>Deliver flow</h4>
                                            <p>The user can create an order in a few simple steps. The flow was created so that the user can easily go back if he/she made any mistakes in entering information.
                                                The user can also decide to choose pre-set shipments with standard package sizes.</p>
                                        </div>
                                    </div>
                                    <div className="item-two-images">
                                        <div className="text-flex-container">
                                            <h4>Shipment history and notifications</h4>
                                            <p>Thanks to the "Shipment history" function, the user can check all shipments made previously, breaking them down into time spaces.
                                                On the other hand, thanks to the "Notifications" function, the user can be notified about the arrival of parcels that he himself has shipped and about those coming in from other people.</p>
                                        </div>
                                        <div className="img-flex-container">
                                            <img src="images/DRONES/DIGITAL%20WIREFRAME%20GIF/Shipment%20history.gif" alt=""/>
                                            <img src="images/DRONES/DIGITAL%20WIREFRAME%20GIF/Shipment%20history.gif" alt=""/>
                                        </div>
                                    </div>
                                    <div className="item-with-img-flex">
                                        <img src="images/DRONES/DIGITAL%20WIREFRAME%20GIF/Contacts.gif" alt=""/>
                                        <div className="text-flex-container">
                                            <h4>Contacts</h4>
                                            <p>With the "contacts" feature, you can save your most frequently used contacts and send your items quickly and easily without having to enter information such as address, name, and package size.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-section product-section-only-img">
                        <img src="images/DRONES/IMMAGINI/14.png" alt=""/>
                    </div>
                    <div className="product-section product-section-only-img">
                        <img src="images/DRONES/IMMAGINI/19.png" alt=""/>
                    </div>

                    <div className="product-section center-align">
                        <div className="product-container-description w-80">
                            <div className="product-app">
                                <span className="small-subtitle">What have I learnt?</span>
                                <div className="line-product-100 w-60"></div>
                                <h3 className="title-section">How I love the design</h3>
                                <p className="text-description">
                                    Drones was my first Ux/Ui Design project, developed during Google's Ux Design course. It was my first approach to the world of User Experience. Among the things I learnt during this project there is definitely one that is fundamental in the whole world of design: putting the user at the centre.
                                    I didn't think, before I started on this path, that research into users' behaviour, emotions and habits was so important for creating effective products with good usability.
                                </p>
                                <p className="text-description">
                                    It was also my first approach with software used to create digital prototypes, such as Figma. I learnt the basic functions of this software through practice, first through wireframing and then through mockup creation.
                                    It is really important to continuously test the product, not only at the end but during the entire creation process.
                                </p>
                                <p className="text-description">
                                    Through this project, although very basic and certainly with several mistakes and things to improve, I understood how this world (that of design) can be MY world.
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