import { useSpring, animated } from 'react-spring';
import React, {useEffect, useState}  from "react";

interface AnimatedTextType {
    text: string
}

const AnimatedTextOne = ({ text } : AnimatedTextType) => {
    const [completed, setCompleted] = useState(false);
    const props = useSpring({
        from: { opacity: 0, paddingRight:'100rem' },
        to: { opacity: 1, paddingRight:'0rem' },
        config: {
            duration: 1000,
        },
        onRest: () => {
            setTimeout(() => setCompleted(true),2000)
        }
    });

    return (
        <animated.div style={props}>
            <div className="line"></div>
            <div className="text-line">
                <span className={completed ? 'animation-line-1' : ''}>{text}</span>
            </div>
            <div className="line "></div>
        </animated.div>
    );
};

export default AnimatedTextOne;