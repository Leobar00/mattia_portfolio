import React from 'react';
import {Link} from "react-router-dom";


const Logo = () => {
    return (
        <div className="logo">
            <Link to="/" >
                <img src="/images/HOMEPAGE/Logo.png" alt="" />
            </Link>
        </div>
    )
}

export default Logo;