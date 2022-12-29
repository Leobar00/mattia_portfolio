import React from 'react';
import {Link} from "react-router-dom";

const Logo = () => {

    return (
        <div className="close-button">
            <a onClick={() => window.history.back()}>
                &#10005;
            </a>
        </div>
    )
}

export default Logo;