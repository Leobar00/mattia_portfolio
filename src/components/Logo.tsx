import React from 'react';
import {Link} from "react-router-dom";
import MenuMobile from "./MenuMobile";
import '../style/Logo.scss'

const Logo = () => {
    return (
        <div className="logo">
            <Link to="/" >
                <img src="/images/HOMEPAGE/Logo.png" alt="" />
            </Link>
            <MenuMobile/>
        </div>
    )
}

export default Logo;