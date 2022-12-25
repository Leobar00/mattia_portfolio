import React from "react";
import {Link} from "react-router-dom";

const Hamburger = () => {
    return (
        <Link to="/menu" className="menu-mobile">
            <div className="line-menu"></div>
            <div className="line-menu"></div>
        </Link>
    );
}

export default Hamburger;
