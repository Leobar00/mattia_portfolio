import React from 'react';
import BlackLogo from "./BlackLogo";
import {Link} from "react-router-dom";

interface NavbarLeftMenuProps {
    route:string,
    text:string
}

const NavbarLeftMenu = ({route,text}: NavbarLeftMenuProps) => {
    return (
            <div className="navbar-left">
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