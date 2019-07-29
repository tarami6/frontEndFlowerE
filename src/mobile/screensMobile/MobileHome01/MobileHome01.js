import React, {Component} from 'react';
import '../Mobile.css'
import './MobileHome.css';
import {Link} from 'react-router-dom';


import Slider from "react-slick";
import ActionToCall from '../../componentsMobile/ActionToCall/ActionToCall'
import CallActionPopUP from '../../componentsMobile/PopUps/CallActionPopUP/CallActionPopUP'
import Footer from '../../componentsMobile/Footer/Footer'

import sliderTuBeav from "../../assetsMobile/imagesMobile/sliderHomePage/toBeAv.jpg";
import womanSmileMission from "../../assetsMobile/imagesMobile/sliderHomePage/womanSmileMission.jpg";
import mobileLogo from "../../assetsMobile/mobileLogo.png";


import Smile from "react-icons/lib/fa/smile-o";
// produts
import {bottomIcons, flowersMobile} from '../../../services/Const/const';


class MobileHome01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: flowersMobile,
            showButton: false,
            callToActionPopUp: false,
        }
        this.pause = this.pause.bind(this);
    }

    pause() {
        this.slider.slickPause();
    }

    callAction = (action, button, page) => {
        console.log("callAction")
        this.setState({callToActionPopUp: true})
        this.props.eventGA(action, button, page)
    }

    exitPopUp = () => {
        console.log("exitPopUp")
        this.setState({callToActionPopUp: false})
    }

    componentDidMount() {
        console.log("MobileHome01 componentDidMount ", this.state.products)
        this.props.pageView("MobileHome")
        window.addEventListener('scroll', this.addActionButton)

    }

    addActionButton = () => {
        console.log("YYY", window.pageYOffset)
        let y = window.pageYOffset
        if (y > 150 && !this.state.showButton) {
            this.setState({showButton: true})
        }
        console.log("stt", this.state)

    }


    productItem = () => {
        let products = this.state.products.map(product => {
            let {image, name, price} = product
            console.log("product", product)
            return (
                <div key={Math.random()} className=" w-50pr" onClick={() => {
                    this.props.eventGA("Flower pressed", name, "Home Page Mobile")
                }}>
                    <Link to={{pathname: '/productPage', state: {productInfo: product}}}>
                        <div className={'productHolder'}
                             style={{backgroundImage: `url(${image})`}}>
                            <div className={"productText"}>
                                <p className={'buquetNameText'}>{name}</p>
                                <p className={'buquetPriceText'}>{price} ש"ח </p>
                            </div>
                        </div>
                    </Link>
                </div>

            )
        })
        console.log("product", products)
        return (
            <div className="productsContents">
                {products}
            </div>
        )
    }

    bottomIcons = () => {
        let icons = bottomIcons.map(icon => {
            return (
                <div key={Math.random()} className={"bottomIconsImageContainer"}>
                    <img src={icon.image} className={"bottomIconsImage"} alt=""/>
                    <p className={"iconTitle lightGreyColor"}>{icon.title}</p>
                </div>
            )
        })
        return (
            icons
        )
    }


    render() {
        console.log("this.props", this.props)
        const settings = {
            dots: true,
            speed: 700,
            className: "Slider",
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: false,
            afterChange: () => this.pause()
        };

        let showPopUp = this.state.callToActionPopUp


        return (
            <div>
                <div>
                    <Slider ref={slider => (this.slider = slider)}  {...settings}>
                        <div onClick={() => this.pause()} className={'slideHolder'}>
                            <img src={sliderTuBeav} alt="MakeHerHappy" className={'sliderImage'}/>
                        </div>
                        <div onClick={() => this.pause()} className={'slideHolder'}>
                            <img src={womanSmileMission} alt="MakeHerHappy" className={'sliderImage'}/>
                        </div>
                    </Slider>
                    <div onClick={() => console.log("clicked")} className={'mobileLogoContainer'}>
                        <img src={mobileLogo} alt="zerbayad Logo" className={'mobileLogo'}/>
                    </div>
                    <div className="mt-20">
                        {this.productItem()}
                    </div>
                    <div className={'privateOrderConteiner'}>
                        <p className={'privateOrderText'}>הזמנת זר בעיצוב אישי</p>
                        <p className={'privateOrderText'}>בתקציב שלך</p>
                        <p className={'privateOrderTextInto'}>אנחנו נעצב לך זר לפי התקציב שלך, לפני שהזר ישלח אנחנו
                            נשלח לך תמונה של הזר כדי לקבל את האישור שלך... </p>
                        <div onClick={() => this.callAction("CallToAction", "BuyButtonHomePage", this.props.page)}>
                            <button className={'buy-now-btn'}>להזמנה</button>
                        </div>
                    </div>
                    <div className={'bottomIconsContainer'}>
                        {
                            this.bottomIcons()
                        }
                    </div>

                    <div className={'forUServiceTextContainer'}>
                        <p className={'serviceTitle lightGreyColor'}> אנחנו לשירותכם <Smile size={30}
                                                                                            color={"#c0c0c0"}/></p>
                    </div>
                    {
                        this.state.showButton &&
                        <ActionToCall page={"HomePageMobile"} homePage={true} eventGA={this.props.eventGA}/>
                    }
                    {showPopUp &&
                    <CallActionPopUP
                        page={this.props.page}
                        eventGA={this.props.eventGA}
                        exit={this.exitPopUp}
                    />
                    }
                </div>
                <Footer page={"HomePageMobile"} eventGA={this.props.eventGA}/>
            </div>
        )
    }
}

export default MobileHome01;
