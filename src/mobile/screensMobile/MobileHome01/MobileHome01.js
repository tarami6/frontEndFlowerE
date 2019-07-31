import React, {Component} from 'react';
import '../Mobile.css'
import './MobileHome.css';


import Slider from "react-slick";

import ActionToCall from '../../componentsMobile/ActionToCall/ActionToCall'
import Footer from '../../componentsMobile/Footer/Footer'
import ProducttItem from '../../componentsMobile/ProductItem/ProductItem'
import BottomIcons from '../../componentsMobile/BottomIcons/BottomIcons'
import {bottomIcons} from '../../../services/Const/const';

import sliderTuBeav from "../../assetsMobile/imagesMobile/sliderHomePage/toBeAv.jpg";
import womanSmileMission from "../../assetsMobile/imagesMobile/sliderHomePage/womanSmileMission.jpg";
import mobileLogo from "../../assetsMobile/mobileLogo.png";


import Smile from "react-icons/lib/fa/smile-o";
// produts
import { flowersMobile } from '../../../services/Const/const';


class MobileHome01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: flowersMobile,
            callToActionPopUp: false,
        }
        this.pause = this.pause.bind(this);
    }

    pause() {
        this.slider.slickPause();
    }



    exitPopUp = () => {
        console.log("exitPopUp")
        this.setState({callToActionPopUp: false})
    }

    componentDidMount() {
        console.log("MobileHome01 componentDidMount ", this.state.products)
        this.props.pageView("MobileHome")
    }



    render() {
        console.log("this.props", this.props)
        const settings = {
            dots: true,
            speed: 700,
            className: "Slider",
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            afterChange: () => this.pause()
        };

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
                        <ProducttItem products={this.state.products} eventGA={this.props.eventGA}/>
                    </div>
                    <div className={'privateOrderConteiner'}>
                        <p className={'privateOrderText'}>הזמנת זר בעיצוב אישי</p>
                        <p className={'privateOrderText'}>בתקציב שלך</p>
                        <p className={'privateOrderTextInto'}>אנחנו נעצב לך זר לפי התקציב שלך, לפני שהזר ישלח אנחנו
                            נשלח לך תמונה של הזר כדי לקבל את האישור שלך... </p>
                        <ActionToCall show={true} title={"להזמנה"} page={"HomePageMobile"} homePage={false} eventGA={this.props.eventGA}/>
                    </div>
                    <div className={'bottomIconsContainer'}>
                        <BottomIcons />
                    </div>

                    <div className={'forUServiceTextContainer'}>
                        <p className={'serviceTitle lightGreyColor'}> זר ביד לשירותכם <Smile size={30}
                                                                                            color={"#c0c0c0"}/></p>
                    </div>
                        <ActionToCall show={false} ref={() => this.action}  page={"HomePageMobile"} homePage={true} eventGA={this.props.eventGA}/>
                </div>
                <Footer page={"HomePageMobile"} eventGA={this.props.eventGA}/>
            </div>
        )
    }
}

export default MobileHome01;
