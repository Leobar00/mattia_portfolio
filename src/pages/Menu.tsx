import React, {useState} from 'react';
import '../style/Menu.scss';
import NavbarLeft from "../components/NavbarLeft";
import {Link} from "react-router-dom";

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

const Menu = () => {
    const [background,setBackground] = useState("")

    return (
        <div className="menu-container">
            <NavbarLeft />
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