import React from "react";

const ButtonScroll = () => {
    const scrollToTop = () => {
        document.querySelector('#root')?.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        console.log('ciao')
    }

    return (
        <div className="arrow-up" onClick={scrollToTop}>
            <p>&#8963;</p>
        </div>
    );
}

export default ButtonScroll;