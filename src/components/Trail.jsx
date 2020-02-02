import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';

const Trail = () => {
    const [toggle, setToggle] = useState(true)
    const config = {
        mass: 1,
        friction: 20,
        tension: 190

    }
    const title = 'Handshake'
    const text = title.split('')
    const trail = useTrail(text.length, {
        config,
        y: toggle ? 20 : 0,
        opacity: toggle ? 1 : 0,
        height: toggle ? 500 : 0,
    })

    return (
        <div className="trail-wrapper" onClick={() => setToggle(state => !state)}>
            {trail.map(({ y, height, ...rest }, index) => (
                <animated.div
                    className="trail-item"
                    key={text[index]}
                    style={{ ...rest, transform: y.interpolate(y => `translate3d(0,${y}px,0)`) }}
                >
                    <animated.p className="trail-text" style={{ height }}>{text[index]}</animated.p>
                </animated.div>
            ))}
        </div>
    )
}

export default Trail