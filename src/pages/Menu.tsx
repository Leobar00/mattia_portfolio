import React, {useEffect, useState} from 'react';
import '../style/Menu.scss';
import NavbarLeftMenu from "../components/NavbarLeftMenu";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Logo from "../components/Logo";
import {useTransition,animated} from 'react-spring';

interface MenuItem {
    name: string,
    route: string,
    imageUrl : string,
    description:string,
    class:string
}


let menuItem: MenuItem[] = [
    {name:'ABOUT',route:'/about',imageUrl:'/images/menu/about.png',description:'Dom Mount, 4.545 mt.\n' + 'Switzerland, 2022\n' + 'Lonely journey among the snow-covered glaciers of the Swiss peaks.',class:'slideInDown slideInDown_slow'},
    {name:'WORKS',route:'/',imageUrl:'/images/menu/works.png',description:'My projects, my designs.\n' + 'Small collection of my case studies, developed during the courses.',class:'.slideInDown slideInDown_fast'},
    {name:'IDEAS',route:'/',imageUrl:'/images/menu/ideas.png',description:'A blank sheet of paper.\n' + 'From which to start, to fill with ideas and thoughts about design world.',class:'slideInUp slideInUp_fast'},
    {name:'TALK',route:'/',imageUrl:'/images/menu/talk.png',description:'I would love to talk to you and learn more about this fantastic job. Currently in Perth  :)',class:'slideInUp slideInUp_slow'}
]

function mobileMenu()
{
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
    const [background,setBackground] = useState("");
    const [triggerEvent,setTriggerEvent] = useState(true);
    const navigate = useNavigate();

    const [isImagesLoad, setIsImagesLoad] = useState(
        Array(menuItem.length).fill(false)
    );

    function onClickItem(e:any)
    {
        e.preventDefault();
        setTriggerEvent(false);
        let menuMain : HTMLElement | null  = document.querySelector('.menu-main');
        let navbarLeft : HTMLElement | null= document.querySelector('.navbar-left');
        let rightPosition : HTMLElement | null= document.querySelector('.right-position');

        menuMain!.style.opacity = '0';
        navbarLeft!.style.opacity = '0';
        rightPosition!.style.width = '100vw';

        setTimeout(() => {
            navigate('/about')
        },2000)
    }

    useEffect(() => {
        const imageLoadPromises = menuItem.map((item, index) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    const updatedIsImagesLoaded = [...isImagesLoad];
                    updatedIsImagesLoaded[index] = true;
                    setIsImagesLoad(updatedIsImagesLoaded);
                };
                img.src = item.imageUrl;
            });
        });
        Promise.all(imageLoadPromises).then(() => {
            console.log('All images are loaded');
        });
    }, [menuItem]);


    return (
        <div className="menu-container overflow-hidden">
            <div id="gradient-section"></div>
            {/* Mobile menu  */}
            {mobileMenu()}
            <NavbarLeftMenu route='main' text='Back to Home' />
            <div className="right-position" style={{
                background:'linear-gradient(rgba(220,219,219,0.05), rgba(220,219,219,0.3)),' + background ,
            }}>
                <div id="background" >
                    <div className="menu-main"  >
                        <ul>
                            {
                                Object.entries(menuItem).map(([key,value]) => {
                                    return(
                                        <li className={`menu-item ${value.class}`} >
                                            <Link to={value.route} key={value.name}
                                                  onMouseOver={() => {
                                                      if(triggerEvent) {
                                                          document.querySelector('.description-item-menu')!.innerHTML = value.description
                                                          document.querySelector<HTMLElement>('.menu-main')!.style.backgroundColor = 'transparent'
                                                          setBackground('url("' + value.imageUrl + '")')
                                                      }
                                                  }}
                                                  onMouseLeave={() => {
                                                      if(triggerEvent) {
                                                          document.querySelector('.description-item-menu')!.innerHTML = ''
                                                          document.querySelector<HTMLElement>('.menu-main')!.style.backgroundColor = '#DCDBDB'
                                                          setBackground('#DCDBDB url("")')
                                                      }
                                                  }}
                                                  onClick={(event) => {
                                                      onClickItem(event)
                                                  }}
                                            >
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
        </div>
    )
}

export default Menu;