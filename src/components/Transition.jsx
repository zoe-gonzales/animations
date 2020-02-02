import React, { useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import imgOne from '../images/img-1.jpg';
import imgTwo from '../images/img-2.png';
import imgThree from '../images/img-3.jpg';
import imgFour from '../images/img-4.jpg';

const config = {
   friction: 10,
   tension: 20
}

const images = [
    ({ style }) => <animated.img src={imgOne} style={{ ...style, width: '50%', margin: 'auto' }} alt="transition image" />,
    ({ style }) => <animated.img src={imgTwo} style={{ ...style, width: '50%', margin: 'auto' }} alt="transition image" />,
    ({ style }) => <animated.img src={imgThree} style={{ ...style, width: '50%', margin: 'auto' }} alt="transition image" />,
    ({ style }) => <animated.img src={imgFour} style={{ ...style, width: '50%', margin: 'auto' }} alt="transition image" />,
]

const Transition = () => {
    const [index, set] = useState(0)
    const handleClick = useCallback(() => set(state => (state + 1) % images.length), [])
    const transitions = useTransition(index, image => image, {
        config,
        from: { opacity: 0, transform: 'translate3d(50%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })

    return (
        <div onClick={handleClick} className="wrapper">
            {transitions.map(({ item, props, key }) => {
                let Page = images[item]
                return <Page key={key} style={props} />
            })}
        </div>
    )    
}

export default Transition;