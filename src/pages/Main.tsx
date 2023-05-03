import React from 'react';
import '../style/Main.scss';
import CenterCard from './../components/CenterCard'
import Logo from './../components/Logo'
import Navbar from './../components/Navbar'
import AnimatedLine from './../components/AnimatedLine';

const Main = () => {

    return (
        <div className="general-container">
            <div className="background-container">
                <div className="container-main">
                    <Logo />
                    <CenterCard />
                    <div className="container-line desktop">
                        <div className="line"></div>
                        <div className="text-line">
                            <AnimatedLine text="Drones mobile drones mobile app" delay={0} fromX={-100} toX={0} classe="animation-line-1" />
                        </div>
                        <div className="line "></div>
                        <div className="text-line-2">
                            <AnimatedLine text="ux/ui design" delay={500} fromX={100} toX={0} classe="animation-line-2" />
                        </div>
                        <div className="line"></div>
                    </div>
                </div>
                <Navbar />
            </div>
            <div id="white-section"/>
        </div>

)
}

export default Main;