import React, {Component} from 'react';
import logo from '../../assetsMobile/imagesMobile/MobileLogo.png'
import Fade from 'react-reveal/Fade';
import backGroundImage from '../../assetsMobile/imagesMobile/igardeHomeFirstBackground01.jpg';

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
            <Fade duration={2000} when={this.state.imageLodaed}>
                <div className='firstContainer'>
                        <img
                            src={backGroundImage}
                            alt="Logo"
                            className={'firstContainerBackground'}
                            onLoad={() =>{
                                this.setState({imageLodaed: true})
                                this.props.backGroundImageLoaded()

                            }}
                        />

                        <div className={'logoContainer'}>
                            <img src={logo} alt="Logo" className={'logoTransparent'}/>
                        </div>
                </div>
            </Fade>

        )
    }
}

export default FirstContainer
