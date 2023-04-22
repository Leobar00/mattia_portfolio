import React, {useEffect, useState} from 'react';
import BlackLogo from "./BlackLogo";
import {Link, useLocation} from "react-router-dom";

interface NavbarLeftMenuProps {
    route:string,
    text:string
}

const NavbarLeftMenu = ({route,text}: NavbarLeftMenuProps) => {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation(); // rotta in cui ci troviamo

    useEffect(() => {
        setShowMenu(true);
    }, []);

    return (
            <div className={`navbar-left ${showMenu ? 'show' : ''}`}>
                <Link to={ '/' + route }>
                    <BlackLogo />
                    <div className="navbar-left-text">
                        <p>{text}</p>
                    </div>
                </Link>
            </div>
    )
}

export default NavbarLeftMenu;