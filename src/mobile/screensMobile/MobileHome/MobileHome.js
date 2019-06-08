import React, {Component, Fragment} from 'react';
import './MobileHome.css';
// Components
import FirstContainer from '../../componentsMobile/FirstContainer/FirstContainer.js'
import ContentContainer from '../../componentsMobile/ContentContainer/ContentContainer.js'
import Footer from '../../componentsMobile/Footer/Footer.js'
import CallButton from '../../componentsMobile/CallButton/CallButton.js'
import CallActionPopUP from '../../componentsMobile/PopUps/CallActionPopUP/CallActionPopUP'
import BackgroundImageOnLoad from "background-image-on-load";
import igarde from '../../assetsMobile/imagesMobile/igardeHomeFirstBackground01.jpg'
import logo from '../../assetsMobile/imagesMobile/MobileLogo.png'


class MobileHome extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = {
            callToActionPopUp: false,
            firstBackgroundImageLoaded: false,
            logo: false
        }
    }


    componentDidMount() {
        console.log('mobileHome didi mount')

    }

    handleScroll = () => {
        const {index, selected} = this.props
        if (index === selected) {
            const that = this
            setTimeout(() => {
                that.myRef.current.scrollIntoView({behavior: 'smooth'})
            }, 4000)
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

    imageLoderChecker = () => {
        return (
            <div>
                <BackgroundImageOnLoad
                    src={igarde}
                    onLoadBg={() => {
                        this.setState({firstBackgroundImageLoaded: true})
                    }
                    }
                    onError={err => console.log('error', err)}
                />
                <BackgroundImageOnLoad
                    src={logo}
                    onLoadBg={() => {
                        this.setState({logo: true},() => {
                            this.handleScroll()
                        })
                    }
                    }
                    onError={err => console.log('error', err)}
                />
            </div>


        )
    }

    render() {
        console.log('this.state', this.state)
        let showPopUp = this.state.callToActionPopUp
        let imgaeLodade = this.state.logo
        return (
            <div>
                {this.imageLoderChecker()}
                {imgaeLodade &&
                <Fragment>
                    <FirstContainer
                    />

                    < div ref={this.myRef}/>
                    <ContentContainer/>
                    <CallButton
                        onPress={this.callAction}
                    />
                    {showPopUp &&
                    <CallActionPopUP
                        exit={this.exitPopUp}
                    />
                    }
                    <Footer/>
                </Fragment>

                }
            </div>
        )

    }
}

export default MobileHome;

