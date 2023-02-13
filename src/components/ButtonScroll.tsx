import React from "react";


function scrollToTop(){
    document.querySelector('body')!.scrollTo(0,0);
}

const ButtonScroll = () => {
    return (
        <div className="arrow-up" onClick={scrollToTop}>
            <p>&#8963;</p>
        </div>
    );
}

export default ButtonScroll;