import React from 'react';
import {Link} from "react-router-dom";
import Hamburger from "./Hamburger";
import '../style/Logo.scss';
import { useLocation } from 'react-router-dom';
import CloseButton from "./CloseButton";

const Logo = () => {

    const location = useLocation();
    return (
        <div className="logo">
            <Link to="/" >
                <img src="/images/HOMEPAGE/Logo.png" alt="" />
            </Link>
            { location.pathname  == '/main' ? <Hamburger/> : <CloseButton /> }
        </div>
    )
}

export default Logo;