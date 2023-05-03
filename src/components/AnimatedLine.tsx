import { useSpring, animated } from 'react-spring'

interface AnimatedLineProps {
    text: string;
    delay: number;
    fromX: number;
    toX: number;
    classe:string;
}

const AnimatedLine = ({ text, delay, fromX, toX,classe }: AnimatedLineProps) => {
    const props = useSpring({
        delay,
        from: { transform: `translateX(${fromX}px)` },
        to: { transform: `translateX(${toX}px)` },
    })

    return (
        <animated.span className={classe} style={props}>
            {text}
        </animated.span>
    )
}

export default AnimatedLine;