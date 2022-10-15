import React from 'react';
import '../style/Main.scss';
import CenterCard from './../components/CenterCard'
import Logo from './../components/Logo'
import Navbar from './../components/Navbar'

const Main = () => {

    return (
        <div className="general-container">
            <div className="container-main">
                <Logo />
                <CenterCard />
                <div className="container-line">
                    <div className="line"></div>
                    <div className="text-line">
                        <span>Drones mobile drones mobile app</span>
                    </div>
                    <div className="line"></div>
                    <div className="text-line-2">
                        <span>ux/ui design</span>
                    </div>
                    <div className="line"></div>
                </div>
            </div>
            <Navbar />
        </div>

)
}

export default Main;