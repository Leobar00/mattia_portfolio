import React from 'react';
import NavbarLeftMenu from "../components/NavbarLeftMenu";
import '../style/Menu.scss';
import {Link} from "react-router-dom";

const About = () => {

    return (
        <div className="menu-container overflow-hidden">
            <NavbarLeftMenu route="menu" text="Back to menu" />
            <div className="right-position background-info-page">
                <div className="container-section-menu">
                    <div className="navbar-section">
                        <ul className="navbar-section-item">
                            <li><Link to="">Linkedin</Link></li>
                            <li><Link to="">Behance</Link></li>
                            <li><Link to="">Contact me</Link></li>
                        </ul>
                    </div>
                    <div className="section-content-black">
                        <div className="flex-section">
                            <div className="content w-50">
                                <p>About myself</p>
                                <div className="line-menu"></div>
                                <h3>Nice to meet you</h3>
                                <p className="content-text">
                                    Hi! I am Mattia (but if you want you can call me MET for short), a Junior User Experience Designer from Italy, currently based in Perth (WA).
                                    Let me tell you something about myself.  To be honest, it took me a while to realize that this could be my path. After high school, I started working as a Graphic Designer for almost two years, and then pursued a career in sales, working as a sales executive for multinational companies in the automotive and shipbuilding industries.
                                </p>
                            </div>
                            <div className="img-content w-50">
                                <img className='w-100' src="/images/ABOUTME/mattia.png" alt=""/>
                            </div>
                        </div>
                        <div className="line-center-container w-100">
                            <div className="line-center-vertical bg-white">
                                <div className="circle-line-vertical bg-white"></div>
                            </div>
                        </div>
                        <div className="flex-section">
                            <div className="empty-space w-50 "></div>
                            <div className="content w-50 ">
                                <p>My passion</p>
                                <div className="line-menu w-100"></div>
                                <h3>Technology and Murakami</h3>
                                <p className="content-text">
                                    My biggest passion is technology, which is why I decided to pursue this path in the design world. As a designer, I would like to create innovative products that can solve serious social problems. I would also like to work on highly technological and interactive projects, as I would never want to stop learning new things. My second passion is reading and my favorite autor is the Japanese Haruki Murakami. His texts, at times strongly surreal but rooted in everyday reality, are a bit of a reflection of my person, quiet, polite but also dreamy and ambitious.
                                </p>
                            </div>
                        </div>
                        <div className="line-center-container w-100 half-absolute">
                            <div className="line-center-vertical bg-black">
                                <div className="circle-line-vertical bg-black"></div>
                            </div>
                        </div>
                    </div>
                    <div className="section-content-white">
                        <div className="flex-section ">
                            <div className="content ">
                                <p>Experiences</p>
                                <div className="line-menu-black w-50"></div>
                                <h3>Study and work</h3>
                                <div className="container-content-text">
                                    <h3 className="title-content-text"><span>2022</span> - Design thinking and UI course</h3>
                                    <p className="subtitle-content-text">Interaction Design Foundation</p>
                                    <p className="content-text">
                                        Through this 6-month course, I was able to explore the process of
                                        design in a deeper way, learning about new techniques in the
                                        different stages of design. Much of the course also focused on the
                                        User Interface and how to create a satisfactory visual experience for
                                        the user.
                                    </p>
                                </div>
                                <div className="container-content-text">
                                    <h3 className="title-content-text"><span>2022</span> - Design thinking and UI course</h3>
                                    <p className="subtitle-content-text">Interaction Design Foundation</p>
                                    <p className="content-text">
                                        Through this 6-month course, I was able to explore the process of
                                        design in a deeper way, learning about new techniques in the
                                        different stages of design. Much of the course also focused on the
                                        User Interface and how to create a satisfactory visual experience for
                                        the user.
                                    </p>
                                </div>
                                <div className="container-content-text">
                                    <h3 className="title-content-text"><span>2022</span> - Design thinking and UI course</h3>
                                    <p className="subtitle-content-text">Interaction Design Foundation</p>
                                    <p className="content-text">
                                        Through this 6-month course, I was able to explore the process of
                                        design in a deeper way, learning about new techniques in the
                                        different stages of design. Much of the course also focused on the
                                        User Interface and how to create a satisfactory visual experience for
                                        the user.
                                    </p>
                                </div>
                                <div className="container-content-text">
                                    <h3 className="title-content-text"><span>2022</span> - Design thinking and UI course</h3>
                                    <p className="subtitle-content-text">Interaction Design Foundation</p>
                                    <p className="content-text">
                                        Through this 6-month course, I was able to explore the process of
                                        design in a deeper way, learning about new techniques in the
                                        different stages of design. Much of the course also focused on the
                                        User Interface and how to create a satisfactory visual experience for
                                        the user.
                                    </p>
                                </div>
                                <div className="container-content-text">
                                    <h3 className="title-content-text"><span>2022</span> - Design thinking and UI course</h3>
                                    <p className="subtitle-content-text">Interaction Design Foundation</p>
                                    <p className="content-text">
                                        Through this 6-month course, I was able to explore the process of
                                        design in a deeper way, learning about new techniques in the
                                        different stages of design. Much of the course also focused on the
                                        User Interface and how to create a satisfactory visual experience for
                                        the user.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;