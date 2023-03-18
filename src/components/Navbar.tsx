import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {

    setTimeout(() => {
        document.querySelector('.sidebar-right')?.classList.remove('d-none');
    },2000)

    return (
      <Link to="/menu" className="sidebar-right animate__animated animate__fadeIn animate__slower d-none">
          <div className="circle"></div>
      </Link>

    );
}

export default Navbar;