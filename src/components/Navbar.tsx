import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {

    setTimeout(() => {
        document.querySelector('.sidebar-right')?.classList.remove('d-none');
    },500)

    return (
        <div className="initial-background">
          <Link to="/menu" className="sidebar-right animate__animated animate__fadeIn animate__slower d-none">
              <div className="circle"></div>
          </Link>
        </div>
    );
}

export default Navbar;