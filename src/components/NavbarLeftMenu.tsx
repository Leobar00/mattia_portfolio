import React, {useEffect, useLayoutEffect, useState} from 'react';
import BlackLogo from "./BlackLogo";
import {Link, useLocation, useNavigate} from "react-router-dom";

interface NavbarLeftMenuProps {
    route:string,
    text:string
}

const NavbarLeftMenu = ({route,text}: NavbarLeftMenuProps) => {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation(); // rotta in cui ci troviamo
    const navigate = useNavigate();


    const handleMenuClick = () => {
        const gradientSection: HTMLElement | null = document.getElementById('gradient-section');
        gradientSection?.classList.add('active');
        setTimeout(() => {
            navigate('/' + route)
        },2000)
    }

    const handleInfoPageClick = () => {
        navigate('/menu')
    }

    useEffect(() => {
        setShowMenu(true);
    }, []);

    return (
            <div className={`navbar-left ${showMenu ? 'show' : ''}`}>
                <div onClick={location.pathname == '/menu' ? handleMenuClick : handleInfoPageClick }>
                    <BlackLogo />
                    <div className="navbar-left-text">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
    )
}

export default NavbarLeftMenu;