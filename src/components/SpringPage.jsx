import React from 'react'
import Spring from './Spring';
import imgOne from '../images/img-1.jpg';
import imgTwo from '../images/img-2.png';
import imgThree from '../images/img-3.jpg';
import imgFour from '../images/img-4.jpg';

const SpringPage = () => {
    return (
        <div>
            <Spring image={imgOne} float="left" delay={0} />
            <Spring image={imgFour} float="right" delay={2000} />
            <br />
            <Spring image={imgThree} float="left" delay={1000} />
            <Spring image={imgTwo} float="right" delay={3000} />
        </div>
    )
}

export default SpringPage