import React, {Component} from 'react';
import logo from '../../assetsMobile/imagesMobile/MobileLogo.png'
import Fade from 'react-reveal/Fade';

class FirstContainer extends Component {
    // return <animated.div style={props}>I will fade in</animated.div>
    constructor(props) {
        super(props)
        this.state = {
            imageLodaed: false
        }
    }

    render() {
        return (
            <Fade duration={2000}>
                <div>
                            <div className='firstContainer'>
                                <div className={'logoContainer'}>
                                    <img src={logo} alt="Logo" className={'logoTransparent'}/>
                                </div>
                            </div>
                </div>
            </Fade>

        )
    }
}

export default FirstContainer
