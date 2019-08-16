import React, {Component} from 'react';
import '../Mobile.css'
import './MobileHome.css';

import ActionToCall from '../../componentsMobile/ActionToCall/ActionToCall'
import Footer from '../../componentsMobile/Footer/Footer'
import ProducttItem from '../../componentsMobile/ProductItem/ProductItem'
import BottomIcons from '../../componentsMobile/BottomIcons/BottomIcons'
import SliderHome from '../../componentsMobile/Slider/SliderHome'
import Logo from '../../componentsMobile/Logo/Logo'

import Smile from "react-icons/lib/fa/smile-o";
// produts
import {flowersMobile} from '../../../services/Const/const';
import imageAziz from '../../assetsMobile/imagesMobile/productPage/sahlavLavan01.jpg'
import {Link} from "react-router-dom";

class MobileHome01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: flowersMobile,
            callToActionPopUp: false,
        }
    }

    exitPopUp = () => {
        this.setState({callToActionPopUp: false})
    }

    componentDidMount() {
        this.props.pageView("MobileHome")
    }


    render() {


        return (
            <div>
                <div>
                    <SliderHome/>
                    <Logo/>
                    <div className="mt-20">
                        <ProducttItem products={this.state.products} eventGA={this.props.eventGA}/>
                    </div>
                    <Link to={{pathname: '/potPage'}}>
                        <div className={'potCategoryHolder'}
                             style={{backgroundImage: `url(${imageAziz})`}}
                        >
                            <div className={'buttonProductHome'}>
                                <p className={'buttonProductHomeText'}>עציצים</p>
                            </div>
                        </div>
                    </Link>
                    <div className={'bottomIconsContainer'}>
                        <BottomIcons/>
                    </div>

                    <div className={'forUServiceTextContainer'}>
                        <p className={'serviceTitle lightGreyColor'}> זר ביד לשירותכם <Smile size={30}
                                                                                             color={"#c0c0c0"}/></p>
                    </div>
                    <ActionToCall show={false} ref={() => this.action} page={"HomePageMobile"} homePage={true}
                                  eventGA={this.props.eventGA}/>
                </div>
                <Footer page={"HomePageMobile"} eventGA={this.props.eventGA}/>
            </div>
        )
    }
}

export default MobileHome01;
