import React, {useEffect} from 'react';
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from "react-router-dom";
import {useSpring,animated} from "react-spring";

const Home = () => {
    const [background, setBackground] = useSpring(() => ({
        background: 'black',
        config: {
            duration: 500,
        }
    }));

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

        el!.style.opacity = '0';
        setBackground({background: 'linear-gradient(rgba(13, 13, 13, 1),rgba(26, 26, 26, 1) , rgba(44, 44, 44, 1));',})

        setTimeout(() => {
            navigate('/main')
        },3000)
    }


    return (
        <animated.div className="container-home background-black" style={{...background}}>
            <div className="center-block-flex" >
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
        </animated.div>
    )
}

export default Home;