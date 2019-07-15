import React, {Component} from 'react';
import '../Mobile.css'
import Slider from "react-slick";
import {Link} from 'react-router-dom';

import Footer from '../../componentsMobile/Footer/Footer'

import MdArrowBack from 'react-icons/lib/md/arrow-forward';
import Facebook from 'react-icons/lib/fa/facebook';
import Linkedin from 'react-icons/lib/fa/linkedin';
import Twitter from 'react-icons/lib/fa/twitter';


class ProductPage extends Component {
    componentDidMount() {
        console.log("componentDidMount", this.props.location)
        window.scrollTo(0, 0)
    }

    componentWillUnmount() {

    }



    render() {
        const settings1 = {
            dots: true,
            className: "Slider1",
            speed: 500,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: false
        };
        let {name, story, price, description, productSlider } = this.props.location.state.productInfo
        console.log("productSlider",productSlider)
        return (
            <div style={{direction : "rtl"}}>
                <div class={'back-btn-div p-22-0'}>
                    <Link to={"/"}>
                        <button class={'pull-left, p-fixed back-btn'} >
                            <MdArrowBack size={25} color={"#efc368"}/>
                        </button>
                    </Link>
                </div>
                <Slider {...settings1}>
                    {
                        productSlider && productSlider.map( pic => {
                            return(
                                <div  className={'slideHolder1'}>
                                    <img src={pic} alt="MakeHerHappy" className={'sliderImage1'}/>
                                </div>
                            )
                        })
                    }


                </Slider>
                <div className={'display-flex ptb-30'}>

                    <div className={'w-50pr m-0'}>
                        <p className={'pl-4vw pr-4vw m-0 price-text mb-5'}>
                            {price} ש"ח
                        </p>
                        <p className={'pr-4vw m-0 fs-14 sub-t-c'}>
                            {description}
                        </p>
                    </div>
                    <div className={'w-50pr pl-2vh'}>
                        <button className={'buy-now-btn'}> קניה</button>
                    </div>
                </div>

                <div className={'display-block mb-50'}>
                    <p className={'pl-4vw pr-4vw m-0 price-text mb-5 fs-18'}>
                        {name}
                    </p>
                    <p className={'pl-4vw pr-4vw m-0 price-text mb-5 fs-16 ta-left lh sub-t-c mt-5'}>
                        {story}
                    </p>
                </div>
                <Footer/>
            </div>

        )
    }
}

export default ProductPage;
