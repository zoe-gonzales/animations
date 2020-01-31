import React, { useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import imgOne from '../images/img-1.jpg';
import imgTwo from '../images/img-2.png';
import imgThree from '../images/img-3.jpg';
import imgFour from '../images/img-4.jpg';

const config = {
   mass: 2,
   friction: 50,
   tension: 200
}

const images = [
    ({ style }) => <animated.img src={imgOne} style={{ ...style, width: '100%' }} alt="transition image" />,
    ({ style }) => <animated.img src={imgTwo} style={{ ...style, width: '100%' }} alt="transition image" />,
    ({ style }) => <animated.img src={imgThree} style={{ ...style, width: '100%' }} alt="transition image" />,
    ({ style }) => <animated.img src={imgFour} style={{ ...style, width: '100%' }} alt="transition image" />,
]

const Transition = () => {
    const [index, set] = useState(0)
    const handleClick = useCallback(() => set(state => (state + 1) % images.length), [])
    const transitions = useTransition(index, image => image, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
        config
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