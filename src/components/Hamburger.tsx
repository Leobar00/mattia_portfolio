import React from "react";
import {Link, useLocation} from "react-router-dom";

function backgroundColorMenu(location: String) {
    if(location == '/main') {
        return 'white';
    }

    return 'black';
}

const Hamburger = () => {
    const location = useLocation();

    return (
        <Link to="/menu" className="menu-mobile" >
            <div className="line-menu" style={{ backgroundColor: backgroundColorMenu(location.pathname) }}></div>
            <div className="line-menu" style={{ backgroundColor: backgroundColorMenu(location.pathname) }}></div>
        </Link>
    );
}

export default Hamburger;
