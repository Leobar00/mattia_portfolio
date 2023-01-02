import React from 'react';
import NavbarLeftMenu from "../components/NavbarLeftMenu";
import '../style/Menu.scss';

const About = () => {

    return (
        <div className="menu-container">
            <NavbarLeftMenu />
            <div className="container-section-menu">
                <div className="navbar-section">
                    <ul className="navbar-section-item">
                        <li>Linkedin</li>
                        <li>Behance</li>
                        <li>Contact me</li>
                    </ul>
                </div>
                <div className="section-content">
                    <div className="first-section">
                        <div className="content">
                            <p>About myself</p>
                            <div className="line-menu"></div>
                            <h3>Nice to meet you</h3>
                            <p className="content-text">
                                Hi! I am Mattia (but if you want you can call me MET for short), a Junior User Experience Designer from Italy, currently based in Perth (WA).
                                Let me tell you something about myself.  To be honest, it took me a while to realize that this could be my path. After high school, I started working as a Graphic Designer for almost two years, and then pursued a career in sales, working as a sales executive for multinational companies in the automotive and shipbuilding industries.
                            </p>
                        </div>
                        <div className="img-content">
                            <img src="/images/ABOUTME/mattia.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;