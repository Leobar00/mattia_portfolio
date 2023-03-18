import React from 'react';
import '../style/Main.scss';
import CenterCard from './../components/CenterCard'
import Logo from './../components/Logo'
import Navbar from './../components/Navbar'

const Main = () => {

    setTimeout(() => {
        document.querySelector('.text-line > span')?.classList.add('animation-line-1');
        document.querySelector('.text-line-2 > span')?.classList.add('animation-line-2');
    },5000)

    setTimeout(() => {
        document.querySelector('.container-main')?.classList.remove('d-none');
        document.querySelector('.background-container')?.classList.remove('vw-100');
    },2000)

    return (
        <div className="general-container">
            <div className="background-container vw-100 ">
                <div className="container-main d-none">
                    <Logo />
                    <CenterCard />
                    <div className="container-line desktop">
                        <div className="line"></div>
                        <div className="text-line animate__animated animate__slideInLeft animate__slower">
                            <span>Drones mobile drones mobile app</span>
                        </div>
                        <div className="line animate__animated animate__slideInLeft animate__slower"></div>
                        <div className="text-line-2 animate__animated animate__slideInRight animate__slower">
                            <span>ux/ui design</span>
                        </div>
                        <div className="line animate__animated animate__slideInRight animate__slower"></div>
                    </div>
                </div>
                <Navbar />
            </div>
        </div>

)
}

export default Main;