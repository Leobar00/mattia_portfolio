import React from 'react';
import '../style/Main.scss';
import CenterCard from './../components/CenterCard'
import Logo from './../components/Logo'
import Navbar from './../components/Navbar';
import AnimatedTextTwo from "../components/AnimatedLineTwo";
import AnimatedLineOne from "../components/AnimatedLineOne";

const Main = () => {

    return (
        <div className="general-container">
            <div className="background-container">
                <div className="container-main">
                    <Logo />
                    <CenterCard />
                    <div className="container-line desktop">
                        <AnimatedLineOne text="Drones mobile drones mobile app" />
                        <AnimatedTextTwo text="ux/ui design" />
                    </div>
                </div>
                <Navbar />
            </div>
            <div id="white-section"/>
        </div>

)
}

export default Main;