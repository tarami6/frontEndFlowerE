import React from 'react';
import logo from '../../assetsMobile/imagesMobile/logoTransparent.png'

const FirstContainer = () => {
    // return <animated.div style={props}>I will fade in</animated.div>
    return (
        <div className='firstContainer'>
            <div className={'logoContainer'}>
                <img src={logo} alt="Logo" className={'logoTransparent'}/>
            </div>
        </div>
    )
}

export default FirstContainer
