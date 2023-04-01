import React, {useState} from 'react';
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";
import Logo from "../components/Logo";
import '../style/ProductPage.scss'
import ButtonScroll from "../components/ButtonScroll";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Footer from "../components/Footer";

const footerFirstObject = {
    link:'/oceano',
    name:'Oceano'
}

const footerSecondtObject = {
    link:'/fitup',
    name:'FitUp'
}

const Drone = () => {
    return (
        <div className="general-container">
            <div className="container-main-white">
                <Logo />
                <div className="product-container">
                    <div className="product-container-description center-align">
                        <div >
                            <div className="line-product animate__animated animate__slideInLeft animate__slower"></div>
                            <p className="product-subtitle animate__animated animate__slideInLeft animate__slower">Project</p>
                            <p className="product-title animate__animated animate__fadeInTopRight animate__slower">Drones mobile app</p>
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
                            <p className="product-title animate__animated animate__slideInLeft animate__slower">Oct - 2022</p>
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
                    <div className="product-section product-section-only-img">
                        <img src="images/DRONES/IMMAGINI/3.png" alt=""/>
                    </div>
                    <div className="product-section-design-stages">
                        <div className="product-container-description center-align">
                            <p className="small-subtitle">WHo are the potential users?</p>
                            <div className="line-product-100"></div>
                            <h3 className="title-section">User Personas</h3>
                            <div className="text-description">
                                In order to create the following Personas, I asked myself the following questions to create empathy with the potential user categories:
                                <ul>
                                    <li>How people feel when they entrust their items to a shipping company?</li>
                                    <li>How people interact with an online shipping/receiving process?</li>
                                    <li>What problems people have previously had with online shipping?</li>
                                    <li>What are their pain points?</li>
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
                    <div className="product-section product-section-only-img">
                        <img src="images/DRONES/IMMAGINI/road.png" alt=""/>
                    </div>
                    <div className="product-section center-align">
                        <div className="product-container-description w-60">
                            <div className="product-app">
                                <span className="small-subtitle">What to do?</span>
                                <div className="line-product-100"></div>
                                <h3 className="title-section">Improvement opportunities</h3>
                                <p className="text-description">
                                    On the basis of the User Journey Map, I identified, for each of the tasks to achieve the final goal, some points for improvement of the user experience. Some of these improvements will then be integrated within the final design.
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
                                                    <p>FINDING AND ORGANIZING</p>
                                                </div>
                                                <div className="card-improvement flex-center improvement-color-1">
                                                    <p>Use an app for organizing your schedule and jotting down things to remember</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-container">
                                                <div className="card-text">
                                                    <p>PACKING THE PACKAGE</p>
                                                </div>
                                                <div className="card-improvement flex-center improvement-color-2">
                                                    <p>Nothing digital. Need to improve your dexterity! :)</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-container">
                                                <div className="card-text">
                                                    <p>REACH THE DELIVERY POINT</p>
                                                </div>
                                                <div className="card-improvement flex-center improvement-color-3">
                                                    <p>Create an aerial drone delivery app that avoids traffic and saves Marco time that he wouldn't have to leave the office.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-container">
                                                <div className="card-text">
                                                    <p>DELIVER THE PACKAGE</p>
                                                </div>
                                                <div className="card-improvement flex-center improvement-color-4">
                                                    <p>There is a delivery tracking system within the app that updates every 30 seconds.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card-container">
                                                <div className="card-text">
                                                    <p>BACK TO THE OFFICE</p>
                                                </div>
                                                <div className="card-improvement flex-center improvement-color-5">
                                                    <p>A delivery notification system shared among all employees of the notary firm. Internal function within the app.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
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
                                    <img className="img-wireframe" src="images/DRONES/IMMAGINI/PAPER%20WIREFRAME/8.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Track page</h4>
                                    <p>From the research I did, the most popular action performed by users is to track their parcel, so I decided to put this feature in the first frames. The search looks very simple and offers two different ways to track the parcel.</p>
                                    <img className="img-wireframe" src="images/DRONES/IMMAGINI/PAPER%20WIREFRAME/9.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Maps and scanner</h4>
                                    <p>Interactive maps show in real time where the parcel is (whether you are the sender or the recipient). I thought of including a 'scanner' function so that you can follow the parcel without necessarily knowing the order number.</p>
                                    <img className="img-wireframe" src="images/DRONES/IMMAGINI/PAPER%20WIREFRAME/10.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Deliver</h4>
                                    <p>My goal was to create a shipping flow that was as intuitive, easy and fast as possible. By entering a little information you can create a totally new shipment.</p>
                                    <img className="img-wireframe" src="images/DRONES/IMMAGINI/PAPER%20WIREFRAME/11.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Shipping history</h4>
                                    <p>I created this session to help users find the details of previous shipments. A convenient horizontal scrolling menu makes it easy to search for shipments on a time basis..</p>
                                    <img className="img-wireframe" src="images/DRONES/IMMAGINI/PAPER%20WIREFRAME/12.png" alt=""/>
                                </div>
                                <div className="item-with-img">
                                    <h4 className="title-list"><div className="bullet"></div>Contacts</h4>
                                    <p>This section is designed to speed up the shipping process for people who receive packages from us more frequently than others.</p>
                                    <img className="img-wireframe" src="images/DRONES/IMMAGINI/PAPER%20WIREFRAME/13.png" alt=""/>
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

                    <div className="graphic-palette">
                        <div className="product-section center-align" style={{paddingBottom:'0px!important',paddingTop:'3rem',minHeight:'0'}}>
                            <div className="product-container-description w-80">
                                <div className="product-app">
                                    <span className="small-subtitle">Mockup</span>
                                    <div className="line-product-100 w-60"></div>
                                    <h3 className="title-section">Design system</h3>
                                    <p className="text-description w-70">
                                        I tried to keep the elements of the design system as consistent as possible in terms of shapes, colours and meaning. I used linear and rounded fonts, without graces, to give a more modern feel.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="palette-title">
                            <p><strong>Colors / 01</strong></p>
                        </div>
                        <div className="grid-color-palette" style={{gridTemplateRows: "repeat(2, 1fr)",gridTemplateColumns: "repeat(7, 1fr)",gridTemplateAreas: `"a a b b b b b""d d e e f f f"`}}>
                            <div className="item item1" style={{ backgroundColor:'white' }}></div>
                            <div className="item item2" style={{ background:'linear-gradient(180deg, #446DFF 0%, rgba(255, 0, 199, 0.5) 41.98%, rgba(255, 75, 253, 0.3) 100%)' }}>
                                <strong>Drones</strong>
                                <p>Hex: 446DFF FF00C7 FF4BFD</p>
                            </div>
                            <div className="item item4" style={{ backgroundColor:'#FF91B2' }}>
                                <strong>Piggy Pink</strong>
                                <p>Hex: FF91B2</p>
                            </div>
                            <div className="item item5" style={{ backgroundColor:'#FF6593' }}>
                                <strong>Dark Pink</strong>
                                <p>Hex: FF6593</p>
                            </div>
                            <div className="item item6" style={{ backgroundColor:'#6659FF' }}>
                                <strong>Blue sky</strong>
                                <p>Hex: 6659FF</p>
                            </div>
                        </div>
                        <div className="product-section-bc-black">
                            <div className="palette-title">
                                <p><strong>Fonts / 02</strong></p>
                            </div>
                            <div className="center-align">
                                <p className="graphic-font-title">Montserrat</p>
                                <div className="row-flex">
                                    <img src="images/DRONES/IMMAGINI/16.png" alt=""/>
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
                                <p className="graphic-font-title">Hind Madurai</p>
                                <div className="row-flex">
                                    <img src="images/DRONES/IMMAGINI/17.png" alt=""/>
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
                <Footer route="/bibank" nextStep="Bibank responsive web" firstProject={footerFirstObject} secondProject={footerSecondtObject} />
            </div>
            <Navbar />
        </div>
    )
}

export default Drone;