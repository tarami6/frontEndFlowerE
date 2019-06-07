import React, {Component, Fragment} from 'react';
import './MobileHome.css';
// Components
import FirstContainer from '../../componentsMobile/FirstContainer/FirstContainer.js'
import ContentContainer from '../../componentsMobile/ContentContainer/ContentContainer.js'
import Footer from '../../componentsMobile/Footer/Footer.js'
import CallButton from '../../componentsMobile/CallButton/CallButton.js'


class MobileHome extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = {
            callToActionPopUp: false
        }
    }


    componentDidMount() {
        console.log('mobileHome didi mount')
        this.handleScroll()
    }

    handleScroll = () => {
        const {index, selected} = this.props
        if (index === selected) {
            const that = this
            setTimeout(() => {
                that.myRef.current.scrollIntoView({behavior: 'smooth'})
            }, 1500)
        }
    }

    callAction = () => {
        console.log("callAction")
        this.setState({callToActionPopUp: true})
    }

    exitPopUp = () => {
        console.log("exitPopUp")
        this.setState({callToActionPopUp: false})
    }

    render() {
        console.log('this.state', this.state)
        let showPopUp = this.state.callToActionPopUp
        return (
            <Fragment>
                <FirstContainer/>
                <div ref={this.myRef}/>
                <ContentContainer/>
                <CallButton
                    onPress={this.callAction}
                />
                {showPopUp &&
                <div className={'callActionPopUP'}>
                    <div className={'callPopUp'}>
                        <div onClick={() => this.exitPopUp()} className={'exitPopUp'}>
                            <p>X</p>
                        </div>
                        <div className={'popUpTextHolder'}>
                            <p>להזמנה</p>
                        </div>
                        <div className={'buttonsHolder'}>
                            <div className={'callToButton'}>
                                <a href="tel:555-555-5555">חייג </a>
                            </div>
                            <div className={'whatUpButton'}>
                                <a href="whatsapp://send?abid=+972542291101&text=Hello%2C%20World!">What'sUp</a>
                            </div>
                        </div>
                    </div>
                </div>
                }
                <Footer/>
            </Fragment>
        )
    }
}

export default MobileHome;

