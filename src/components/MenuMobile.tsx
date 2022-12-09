import React from "react";
import {Link} from "react-router-dom";

const MenuMobile = () => {
    return (
        <Link to="/menu" className="menu-mobile">
            <div className="line-menu"></div>
            <div className="line-menu"></div>
        </Link>
    );
}

export default MenuMobile;
