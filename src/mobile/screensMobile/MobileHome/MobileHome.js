import React, {Component, Fragment} from 'react';
import './MobileHome.css';
// Components
import FirstContainer from '../../componentsMobile/FirstContainer/FirstContainer.js'
import ContentContainer from '../../componentsMobile/ContentContainer/ContentContainer.js'
import Footer from '../../componentsMobile/Footer/Footer.js'
import CallButton from '../../componentsMobile/CallButton/CallButton.js'
import CallActionPopUP from '../../componentsMobile/PopUps/CallActionPopUP/CallActionPopUP'
// LIB
import Lottie from 'react-lottie';
// IMG
import igarde from '../../assetsMobile/imagesMobile/igardeHomeFirstBackground01.jpg'
import logo from '../../assetsMobile/imagesMobile/MobileLogo.png'

// animation
class MobileHome extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = {
            callToActionPopUp: false,
            firstBackgroundImageLoaded: false,
            logo: false,
            isStopped: false,
            pageLoaded: false
        }
    }


    componentDidMount() {
        console.log('mobileHome didi mount')
        // setTimeout(() => {
        //     this.setState({
        //         pageLoaded: true,
        //         isStopped: true,
        //     }, () => {
        //         // this.handleScroll()
        //     })
        // }, 2000)
    }

    handleScroll = () => {
        const {index, selected} = this.props
        if (index === selected) {
            const that = this
            setTimeout(() => {
                that.myRef.current.scrollIntoView({behavior: 'smooth'})
            }, 5000)
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

    backGroundImageLoaded  = () => {
        this.setState({
            pageLoaded: true,
            isStopped: true,
        }, () => this.handleScroll())
    }



    render() {
        console.log('this.state', this.state)
        let showPopUp = this.state.callToActionPopUp


        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: require('../../assetsMobile/animationMobile/flowerLogoType'),
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <div>
                {!this.state.pageLoaded &&
                    <div className={'homePageAnimation'}>
                        <Lottie options={defaultOptions}
                                height={400}
                                width={400}
                                isStopped={this.state.isStopped}
                        />
                    </div>

                }
                    <Fragment>
                        <FirstContainer
                            backGroundImageLoaded={this.backGroundImageLoaded}
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
            </div>
        )


    }
}

export default MobileHome;

