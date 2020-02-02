import React from 'react';
import { useSpring, animated } from 'react-spring';

const Spring = ({
    image,
    position,
    delay,
}) => {
    const config = {
        mass: 10,
        tension: 120,
        friction: 190,
        velocity: -20,
    }
    const a = useSpring({
        config,
        from: {
            opacity: 0,
            width: '10%',
            flex: '10px'
        },
        opacity: 1,
        width: '25%',
        float: position === 'right' ? 'right' : 'left',
        delay: delay,
        padding: 0,
        margin: 'auto',
        flex: 1
    })
    return <animated.img 
            src={image}
            style={a}
            alt="spring image"
            onMouseMove={({ clientX, clientY }) => {
                console.log("now hovering")
                console.log(`x coordinate = ${clientX}`)
                console.log(`y coordinate = ${clientY}`)
            }}
            onMouseLeave={() => console.log("no longer hovering")}
            />
}

export default Spring;