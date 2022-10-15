import React from 'react';
import {Link} from "react-router-dom";

const BlackLogo = () => {
    return (
        <div className="black-logo">
            <Link to="/main" >
                <div className="logo-background" />
            </Link>
        </div>
    )
}

export default BlackLogo;