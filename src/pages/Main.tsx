import React from 'react';
import '../style/Main.scss';
import CenterCard from './../components/CenterCard'
import Logo from './../components/Logo'
import Navbar from './../components/Navbar'

const Main = () => {

    setTimeout(() => {
        document.querySelector('.text-line > span')?.classList.add('animation-line-1')
        document.querySelector('.text-line-2 > span')?.classList.add('animation-line-2')
    },3000)

    return (
        <div className="general-container">
            <div className="container-main">
                <Logo />
                <CenterCard />
                <div className="container-line desktop">
                    <div className="line"></div>
                    <div className="text-line animate__animated animate__slideInLeft animate__slow">
                        <span>Drones mobile drones mobile app</span>
                    </div>
                    <div className="line animate__animated animate__slideInLeft animate__slow"></div>
                    <div className="text-line-2 animate__animated animate__slideInRight animate__slow">
                        <span>ux/ui design</span>
                    </div>
                    <div className="line animate__animated animate__slideInRight animate__slow"></div>
                </div>
            </div>
            <Navbar />
        </div>

)
}

export default Main;