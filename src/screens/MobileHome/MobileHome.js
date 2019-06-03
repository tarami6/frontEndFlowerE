import React, {Component, Fragment} from 'react';
import './MobileHome.css';
import FlowerBox from '../../components/FlowerBox/FlowerBox.js'
import logo from '../../assets/imagesMobile/logoTransparent.png'
import callButton from '../../assets/imagesMobile/callButton.png'
import Instagram from '../../assets/imagesMobile/Instagram.png'
import FaceBook from '../../assets/imagesMobile/FaceBook.png'
import whatsUpIcon from '../../assets/imagesMobile/whatsUpIcon.png'
import {flowers} from "../../services/Const/const";


function FirstContainer() {
    // return <animated.div style={props}>I will fade in</animated.div>
    return (
        <div className='firstContainer'>
            <div className={'logoContainer'}>
                <img src={logo} alt="Logo" className={'logoTransparent'}/>
            </div>
        </div>
    )
}

function ContentContainer(state) {
    console.log("state",state)
    // return <animated.div style={props}>I will fade in</animated.div>
    return (
        <div   className='contentContainer'>
                {state.flowers.map(flower => {
                    return (
                        <FlowerBox
                            key={Math.random() * flower.price}
                            image={flower.image}
                            name={flower.name}
                            price={flower.price}
                            story={flower.story}
                        />
                    )
                })}
        </div>
    )
}

class MobileHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flowers: flowers,
            flowerLoad: false
        }
        this.myRef = React.createRef()
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
                that.myRef.current.scrollIntoView({ behavior: 'smooth' })
            }, 1500)
        }
    }


    render() {
        console.log('this.state', this.state)
        const {flowers} = this.state
        return (
            <Fragment>
                <FirstContainer/>
                <div ref={this.myRef}/>
                <ContentContainer
                    flowers={flowers}
                />
                <div className={'callButtonContainer'} >
                    <img src={callButton} alt="Logo" className={'callButtonContainer'}/>
                </div>
                <div className={'footer'}>
                    <div className={'footerContainer'}>
                        <h2 className={'footerTitle'}> החוויה שלה<br />  האהבה שלך</h2>
                        <p className={'footerStory'}>
                            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט

                            נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
                        </p>
                        <div className={'footerSocialMenu'}>
                            <div >
                                <a href="https://www.facebook.com/" >
                                    <img src={whatsUpIcon} alt="" className={'socialIconMenu'}/>
                                </a>
                            </div>
                            <div >
                                <a href="https://www.facebook.com/" >
                                    <img src={FaceBook} alt="" className={'socialIconMenu'}/>
                                </a>
                            </div>
                            <div >
                                <a href="https://www.facebook.com/" >
                                    <img src={Instagram} alt="" className={'socialIconMenu'}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={'poweredBy'}>
                        <a href="idt.co.il" className={'poweredByText'}>Powered By IDT </a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MobileHome;

