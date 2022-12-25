import React, {useState} from 'react';
import '../style/Menu.scss';
import NavbarLeftMenu from "../components/NavbarLeftMenu";
import {Link} from "react-router-dom";
import Logo from "../components/Logo";

let menuItem: {[key:string]:string} = {
    'ABOUT':'/',
    'WORKS':'/',
    'IDEAS':'/',
    'TALK' : '/'
};

let backgroundImg: {[key:string]:string} = {
    'ABOUT': '/images/menu/about.png',
    'WORKS': '/images/menu/works.png',
    'IDEAS': '/images/menu/ideas.png',
    'TALK' : '/images/menu/talk.png'
}

function mobileMenu() {
    if(window.innerWidth < 768) {
        return (
            <div>
                <Logo />
                <div className="menu-mobile-text">
                    <p>Explore</p>
                    <div className="line-mobile-menu"></div>
                </div>
            </div>
        )
    }

    return '';
}

const Menu = () => {
    const [background,setBackground] = useState("")



    return (
        <div className="menu-container">
            {/* Mobile menu  */}
            {mobileMenu()}
            <NavbarLeftMenu />
            <div className="menu-main" style={{ background:'linear-gradient(rgba(220,219,219,.2), rgba(220,219,219,.2)),' + background }}>
                <ul>
                    {
                        Object.entries(menuItem).map(([key,value]) => {
                            return(
                                <li className="menu-item" >
                                    <Link to={value} key={key} onMouseOver={() => setBackground('url("' + backgroundImg[key] + '")')} onMouseLeave={() => setBackground('#DCDBDB url("")')}>
                                        {key}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menu;