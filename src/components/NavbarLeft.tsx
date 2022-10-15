import React from 'react';
import BlackLogo from "./BlackLogo";
import {Link} from "react-router-dom";

const NavbarLeft = () => {
    return (
            <div className="navbar-left">
                <Link to="/main">
                    <BlackLogo />
                    <div className="navbar-left-text">
                        <p>Back to Home</p>
                    </div>
                </Link>
            </div>
    )
}

export default NavbarLeft;