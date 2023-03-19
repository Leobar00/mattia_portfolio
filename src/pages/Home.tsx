import React, {useEffect} from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

function hideTransition () {
    let el: HTMLElement | null = document.querySelector('.center-block-flex');

    if(el != null) {
        el.style.opacity = '0';
    }
}

const Home = () => {
    useEffect(() => {
        let el: HTMLElement | null = document.querySelector('.center-block-flex');

        if(el != null) {
            el.style.visibility = 'visible';
            el.style.opacity = '1';
        }

    },[])


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