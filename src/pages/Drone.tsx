import React, {useState} from 'react';
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";
import Logo from "../components/Logo";
import '../style/ProductPage.scss'


const Drone = () => {
    return (
        <div className="general-container">
            <div className="container-main-white">
                <Logo />
                <div className="product-container">
                    <div className="product-container-description">
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

                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default Drone;