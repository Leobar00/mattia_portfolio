import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
      <Link to="/menu" className="sidebar-right animate__animated animate__fadeIn animate__slow">
          <div className="circle"></div>
      </Link>

    );
}

export default Navbar;