import React, {useState} from 'react';
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";
import Logo from "../components/Logo";
import '../style/ProductPage.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";


const Drone = () => {
    return (
        <div className="general-container">
            <div className="container-main-white">
                <Logo />
                <div className="product-container">
                    <div className="product-container-description center-align">
                        <div >
                            <div className="line-product"></div>
                            <p className="product-subtitle">Project</p>
                            <p className="product-title">Drones mobile app</p>
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
                            <p className="product-title">Oct - 2022</p>
                        </div>
                        <div>
                            <div className="line-product"></div>
                            <p className="product-subtitle">Tool used</p>
                            <div className="tool-img">
                                <img src="/images/DRONES/icon-and-logo/logo-figma.png" alt=""/>
                                <img src="/images/DRONES/icon-and-logo/logo-photoshop.png" alt=""/>
                            </div>
                        </div>
                        <img className="img-absolute" src="/images/DRONES/IMMAGINI/Copertina.png" alt=""/>
                        <div className="white-space-product"></div>
                        <div className="line-product"></div>
                        <div className="description-container">
                            <div className="column-6">
                                <span>Drones - delivery mobile-app</span>
                                <p>
                                    Drones is a mobile application that allows users to make deliveries of small items with drones, directly from their mobile phones.
                                    Drones mobile app aim to speed up the delivery process in urban areas and eliminate carbon dioxide emissions in the air.
                                </p>
                            </div>
                            <div className="column-6">
                                <span>Why Drones?</span>
                                <p>
                                    The ultimate goal was to simplify the process of creating a shipment through the app, making it easy even for people with disabilities or those not used to using technology. The intention was also to create a fast and intuitive flow with as few steps as possible to track the status of one's shipment.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="product-section-img" style={{backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),url('images/DRONES/IMMAGINI/1.png')"}}>
                        <div className="center-align h-100 w-100">
                            <div className="align-the-end">
                                <h3>A new way to deliver</h3>
                                <div className="line-80"></div>
                                <p className="w-60">
                                    Freight transport is one of the main factors in air pollution in recent times. Drones offer the possibility of transporting goods by means of all-electric aerial drones, thus reducing the emission of greenhouse gases into the atmosphere.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="product-section center-align">
                        <div className="product-container-description w-50">
                            <div className="product-app">
                                <span className="small-subtitle">Project challenge</span>
                                <div className="line-product-100"></div>
                                <h3 className="title-section">Easy to manage</h3>
                                <p className="text-description">
                                    The customer was looking for a simple and intuitive way to send his parcels.Many people reported difficulties in using the shipping applications due to too may steps to complete sending a parcel and a confusing graphical interface
                                </p>
                                <div className="project-icon">
                                    <div className="container-square-icon">
                                        <div className="square-icon">
                                            <img src="images/DRONES/icon-and-logo/icona%20uomo.png" alt=""/>
                                        </div>
                                        <small>Accesibility</small>
                                    </div>
                                    <div className="container-square-icon">
                                        <div className="square-icon">
                                            <img src="images/DRONES/icon-and-logo/occhio%20aperto.png" alt=""/>
                                        </div>
                                        <small>Vision</small>
                                    </div>
                                    <div className="container-square-icon">
                                        <div className="square-icon">
                                            <img src="images/DRONES/icon-and-logo/icona%20speed.png" alt=""/>
                                        </div>
                                        <small>Steps</small>
                                    </div>
                                </div>

                            </div>
                            <img className="img-advantages-drones" src="images/DRONES/IMMAGINI/2.png" alt=""/>
                        </div>
                    </div>
                    <div className="product-section-design-stages ">
                        <div className="product-container-description center-align">
                            <p className="small-subtitle">Design stages</p>
                            <div className="line-product-100"></div>
                            <h3 className="title-section">Step by step</h3>
                            <p className="text-description">
                                Discovering the conscious and unconscious needs of the customer is the first step in the design process.  I then moved on to the design phase, where I analysed in depth the user usage of other similar apps.
                                After that I designed the user interface, trying to make navigation as simple as possible.
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
                                                <p>Analyse phase</p>
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
                                                Wireframe
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="column-container" style={{gridRow:'4'}}>
                                            <div className="square fourth-color-square">
                                                <div className="circle">
                                                    <img src="images/DRONES/icon-and-logo/icona%20pennello.png" alt=""/>
                                                </div>
                                                <p>Design phase</p>
                                            </div>
                                            <div className="subsquare">
                                                Design System
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="column-container " style={{gridRow:'5',width:'100%'}}>
                                            <div className="square five-color-square">
                                                <p>Usability phase</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-section">
                        <img src="images/DRONES/IMMAGINI/3.png" alt=""/>
                    </div>
                    <div className="product-section-design-stages">
                        <div className="product-container-description center-align">
                            <p className="small-subtitle">WHo are the potential users?</p>
                            <div className="line-product-100"></div>
                            <h3 className="title-section">User Personas</h3>
                            <p className="text-description">
                                In order to create the following Personas, I asked myself the following questions to create empathy with the potential user categories:
                                <ul>
                                    <li>How people feel when they entrust their items to a shipping company?</li>
                                    <li>How people interact with an online shipping/receiving process?</li>
                                    <li>What problems people have previously had with online shipping?</li>
                                    <li>What are their pain points?</li>
                                </ul>
                            </p>
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
                    <div className="product-section">
                        <img src="images/DRONES/IMMAGINI/road.png" alt=""/>
                    </div>
                    <div className="product-section">
                        <img src="images/DRONES/IMMAGINI/4.png" alt=""/>
                    </div>
                    <div className="product-section">
                        <img src="images/DRONES/IMMAGINI/7A.png" alt=""/>
                    </div>
                    <div className="product-section">
                        <img src="images/DRONES/IMMAGINI/14.png" alt=""/>
                    </div>
                    <div className="product-section">
                        <img src="images/DRONES/IMMAGINI/19.png" alt=""/>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default Drone;