import React from 'react';
import logo from '../../assetsMobile/imagesMobile/MobileLogo.png'
import Fade from 'react-reveal/Fade';

const FirstContainer = () => {
    // return <animated.div style={props}>I will fade in</animated.div>
    return (
        <Fade duration={2000} >
            <div className='firstContainer'>
                <div className={'logoContainer'}>
                    <img src={logo} alt="Logo" className={'logoTransparent'}/>
                </div>
            </div>
        </Fade>
    )
}

export default FirstContainer
