import React, {useEffect} from 'react';
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    useEffect(() => {
        let el: HTMLElement | null = document.querySelector('.center-block-flex');

        if(el != null) {
            el.style.visibility = 'visible';
            el.style.opacity = '1';
        }

    },[])


    function hideTransition (e:any) {
        e.preventDefault();
        let el: HTMLElement | null = document.querySelector('.center-block-flex');

        if(el != null) {
            el.style.opacity = '0';
        }

        setTimeout(() => {
            navigate('/main')
        },3000)
    }


    return (
        <div className="container-home background-black">
            <div className="center-block-flex">
                <img src="/images/HOMEPAGE/Logo.png" alt="" />
                <div className="container-paragraph">
                    <p>
                        Hi! I'm <strong>Mattia</strong> and i'm a <br />
                        <strong>Junior User Experience Designer.</strong><br />
                        Welcome to design world.
                    </p>
                </div>
                <Link to="/main" onClick={hideTransition}>Explore</Link>
            </div>
        </div>
    )
}

export default Home;