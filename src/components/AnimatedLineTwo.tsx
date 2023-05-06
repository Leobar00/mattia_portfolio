import { useSpring, animated } from 'react-spring';
import React, {useEffect, useState}  from "react";

interface AnimatedTextType {
    text: string
}

const AnimatedTextTwo = ({ text } : AnimatedTextType) => {
    const [completed, setCompleted] = useState(false);
    const props = useSpring({
        from: { opacity: 0, paddingLeft:'100rem' },
        to: { opacity: 1, paddingLeft:'0rem' },
        config: {
            duration: 1000,
        },
        onRest: () => {
            setTimeout(() => setCompleted(true),2000)
        }
    });

    return (
        <animated.div style={props}>
            <div className="text-line-2" >
                <span className={completed ? 'animation-line-2' : ''}>{text}</span>
            </div>
            <div className="line"></div>
        </animated.div>
    );
};

export default AnimatedTextTwo;