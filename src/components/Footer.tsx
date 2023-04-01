import React from 'react';
import {Link} from "react-router-dom";

const Footer = (props:any) => {
    return (
        <footer>
            <div className="container-line">
                <div className="line"></div>
                <div className="text-line">
                    <span className="">
                        <Link to={props.route} >
                            Next
                        </Link>
                        <p className="arrow">➜</p>
                    </span>
                </div>
                <div className="line "></div>
                <div className="text-line-2">
                    <span className="">{props.nextStep}</span>
                </div>
                <div className="line"></div>
            </div>
            <div className="end-footer">
                <div className="owner">MattiaVignali©2023</div>
                <div className="project">
                    <a href={props.firstProject.link}>{props.firstProject.name}</a>
                    <a href={props.secondProject.link}>{props.secondProject.name}</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;