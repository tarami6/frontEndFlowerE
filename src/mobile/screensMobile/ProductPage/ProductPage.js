import React, {Component, Fragment} from 'react';
import '../Mobile.css'
import Slider from "react-slick";
import { withRouter } from 'react-router-dom';

import Footer from '../../componentsMobile/Footer/Footer'

import MdArrowBack from 'react-icons/lib/md/arrow-forward';
import ActionToCall from "../../componentsMobile/ActionToCall/ActionToCall";


class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.pause = this.pause.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    pause() {
        this.sliderProduct.slickPause();
    }

    render() {
        const settings1 = {
            dots: true,
            className: "Slider1",
            speed: 500,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            afterChange: () => this.pause()
        };
        let {name, story,  description, productSlider, sell, procentege, priceSizes} = this.props.location.state.productInfo;
        this.props.pageView("MobileProductPage " + name)
        return (
            <div style={{direction: "rtl"}}>
                <div className={'back-btn-div p-22-0'}>
                        <button onClick={this.props.history.goBack} class={'pull-left, p-fixed back-btn'}>
                            <MdArrowBack size={25} color={"#efc368"}/>
                        </button>
                </div>
                <Slider ref={slider => (this.sliderProduct = slider)} {...settings1}>
                    {
                        productSlider && productSlider.map(pic => {
                            return (
                                <div key={Math.random()} className={'slideHolder1'}>
                                    <img src={pic} alt="MakeHerHappy" className={'sliderImage1'}/>
                                </div>
                            )
                        })
                    }
                </Slider>
                <div className={'priceAndOrder'}>
                    <div className={'priceCategory'}>
                        {
                            priceSizes.map((price, index) => {
                                let size = ['רגיל', 'גדול', 'ענק']
                                return (
                                    <Fragment key={price}>
                                        {
                                            sell ?
                                                <div
                                                    className={index === 0 ? 'priceCategoryHolder' : 'priceCategoryHolder currentPriceHolder'}>
                                                    <p className={' pr-4vw  price-text '}>
                                                        {size[index]}
                                                    </p>
                                                    <p className={'pl-4vw pr-4vw m-0 price-text mb-5'}>
                                                        {price * procentege} ₪ <span
                                                        className={'sellPriceStrike'}><strike>{price}</strike></span>
                                                    </p>

                                                </div>

                                                :
                                                <div
                                                    className={index === 0 ? 'priceCategoryHolder' : 'priceCategoryHolder currentPriceHolder'}>
                                                    {priceSizes.length > 1 &&
                                                        <p className={' pr-4vw  price-text '}>
                                                        {size[index]}
                                                    </p>}
                                                    <p className={'pl-4vw pr-4vw m-0 price-text mb-5'}>
                                                        {price} ₪
                                                    </p>
                                                </div>
                                        }
                                    </Fragment>

                                )
                            })
                        }
                    </div>
                    <div className={'w-50pr pl-2vh'} style={{zIndex: 3}}>
                        <ActionToCall show={true} page={"Product Mobile" + name} eventGA={this.props.eventGA}/>

                    </div>

                </div>

                <div className={'nameAndDescription'}>
                    <p className={'pl-4vw pr-4vw m-0 price-text mb-5 fs-18'}>
                        {name}
                    </p>
                    <p className={'pl-4vw pr-4vw m-0 price-text mb-5 fs-16 ta-left lh sub-t-c mt-5'}>
                        {story}
                    </p>
                    <p className={'pl-4vw pr-4vw m-0 price-text mb-5 fs-18'}>
                        {description}
                    </p>
                </div>
                <Footer page={"ProductPageMobile"} eventGA={this.props.eventGA}/>
            </div>

        )
    }
}

export default withRouter(ProductPage)
