import React, {Component} from 'react';
import '../Mobile.css'
import './MobileHome.css';

import ActionToCall from '../../componentsMobile/ActionToCall/ActionToCall'
import Footer from '../../componentsMobile/Footer/Footer'
import ProducttItem from '../../componentsMobile/ProductItem/ProductItem'
import BottomIcons from '../../componentsMobile/BottomIcons/BottomIcons'
import SliderHome from '../../componentsMobile/Slider/SliderHome'
import Logo from '../../componentsMobile/Logo/Logo'
// produts
import {flowersMobile} from '../../../services/Const/const';
import imageAziz from '../../assetsMobile/imagesMobile/productPage/sahlavLavan01.jpg'
import {Link} from "react-router-dom";
import uniqueDesignIcon from "../../assetsMobile/imagesMobile/bottomIcons/uniqueDesign.jpg";


class MobileHome01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: flowersMobile,
            callToActionPopUp: false,
            choosedCategory: 'default'
        }
    }

    exitPopUp = () => {
        this.setState({callToActionPopUp: false})
    }

    openPopUp = (category) => {
        console.log("opne")
        this.setState({callToActionPopUp: true, choosedCategory: category})
    }



    componentDidMount() {
        this.props.pageView("MobileHome")
        this.props.pageRenderedFromApp()

    }

    render() {
        console.log("MobileHomeRendered")
        return (
            <div>
                <div>
                    <Logo/>
                    <SliderHome openPopUp={this.openPopUp}/>
                    <div>
                        <h2 className={"iconTitle lightGreyColor"}>
                            <img src={uniqueDesignIcon}
                                 className={"bottomIconsImage"} alt=""/> זר פרחים מדהים וייחודי</h2>
                        <p className={'iconDescription'}>
                            לרגעים הטובים ביותר בחיים, לחגיגה הכי מדהימה תמיד אפשר לסמוך על זר פרחים כדי לשפר את הרגע
                        </p>
                    </div>
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
                    <ActionToCall
                        callToActionPopUp={this.state.callToActionPopUp}
                        show={false}
                        page={"HomePageMobile"}
                        homePage={true}
                        eventGA={this.props.eventGA}
                        category={this.state.choosedCategory}
                        />
                </div>
                <Footer page={"HomePageMobile"} eventGA={this.props.eventGA}/>
            </div>
        )
    }
}

export default MobileHome01;


