import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";



const Navbar = () => {

    const navigate = useNavigate();

    const handleBarClick = () => {
        const circle: HTMLElement|null = document.querySelector('.circle');
        const whiteSection = document.getElementById("white-section");
        document.querySelector('.initial-background')?.classList.add('active');

        circle!.style.opacity = '0';
        setTimeout(() => {
            whiteSection?.classList.add('active');
        }, 2000);

        setTimeout(() => {
            whiteSection!.style.backgroundColor = '#DCDBDB';

        },3600)

        setTimeout(() => {
            navigate('/menu')
        }, 4000);
    };

    setTimeout(() => {
        document.querySelector('.sidebar-right')?.classList.remove('d-none');
    },500)

    return (
        <div className={`initial-background`}>
          <div onClick={handleBarClick} className="sidebar-right animate__animated animate__fadeIn animate__slower d-none">
              <div className="circle"></div>
          </div>
        </div>
    );
}

export default Navbar;