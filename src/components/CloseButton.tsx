import React from 'react';
import {Link} from "react-router-dom";

const Logo = () => {

    return (
        <div className="close-button">
            <Link to="/main">
                &#10005;
            </Link>
        </div>
    )
}

export default Logo;