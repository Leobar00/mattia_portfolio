import React, {useState} from 'react';
import '../style/Menu.scss';
import NavbarLeftMenu from "../components/NavbarLeftMenu";
import {Link} from "react-router-dom";
import Logo from "../components/Logo";

interface MenuItem {
    name: string,
    route: string,
    imageUrl : string,
    description:string
}


let menuItem: MenuItem[] = [
    {name:'ABOUT',route:'/about',imageUrl:'/images/menu/about.png',description:'Dom Mount, 4.545 mt.\n' + 'Switzerland, 2022\n' + 'Lonely journey among the snow-covered glaciers of the Swiss peaks.'},
    {name:'WORKS',route:'/',imageUrl:'/images/menu/works.png',description:'My projects, my designs.\n' + 'Small collection of my case studies, developed during the courses.'},
    {name:'IDEAS',route:'/',imageUrl:'/images/menu/ideas.png',description:'A blank sheet of paper.\n' + 'From which to start, to fill with ideas and thoughts about design world.'},
    {name:'TALK',route:'/',imageUrl:'/images/menu/talk.png',description:'I would love to talk to you and learn more about this fantastic job. Currently in Perth  :)'}
]

function mobileMenu() {
    if(window.innerWidth < 768) {
        return (
            <div>
                <Logo />
                <div className="menu-mobile-text">
                    <p>Explore</p>
                    <div className="line-mobile-menu"></div>
                </div>
            </div>
        )
    }

    return '';
}

const Menu = () => {
    const [background,setBackground] = useState("")

    return (
        <div className="menu-container overflow-hidden">
            {/* Mobile menu  */}
            {mobileMenu()}
            <NavbarLeftMenu />
            <div className="right-position">
                <div className="menu-main" style={{ background:'linear-gradient(rgba(220,219,219,0.05), rgba(220,219,219,0.3)),' + background }}>
                    <ul>
                        {
                            Object.entries(menuItem).map(([key,value]) => {
                                return(
                                    <li className="menu-item" >
                                        <Link to={value.route} key={value.name}
                                              onMouseOver={() => {
                                                  document.querySelector('.description-item-menu')!.innerHTML = value.description
                                                  setBackground('url("' + value.imageUrl + '")')
                                              }}
                                              onMouseLeave={() => {
                                                  document.querySelector('.description-item-menu')!.innerHTML = ''
                                                  setBackground('#DCDBDB url("")')
                                              }}>
                                            {value.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="description-item-menu"/>
                </div>
            </div>
        </div>
    )
}

export default Menu;