import React from "react";

const handleScrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    console.log('ciao')
}
const ButtonScroll = () => {

    return (
        <div className="arrow-up" onClick={handleScrollToTop}>
            <p>&#8963;</p>
        </div>
    );
}

export default ButtonScroll;