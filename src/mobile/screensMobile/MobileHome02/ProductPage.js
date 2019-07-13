import React, {Component} from 'react';
import './slider.css'
import Slider from "react-slick";
import {Link} from 'react-router-dom';

import callButton from "../../assetsMobile/imagesMobile/makeHerHappy.jpg";


import MdArrowBack from 'react-icons/lib/md/arrow-back';
import Facebook from 'react-icons/lib/fa/facebook';
import Linkedin from 'react-icons/lib/fa/linkedin';
import Twitter from 'react-icons/lib/fa/twitter';


class ProductPage extends Component {
    componentDidMount() {
        console.log("componentDidMount", this.props.location)
    }

    componentWillUnmount() {

    }



    render() {
        const settings1 = {
            // autoplay:true,
            dots: true,
            speed: 200,
            className: "Slider1",
            // centerMode: true
        };
        let {name, story, price, description} = this.props.location.state.productInfo
        return (
            <div style={{direction : "rtl"}}>
                <div class={'back-btn-div p-25-0'}>
                    <Link to={"/"}>
                        <button class={'pull-left, p-fixed back-btn'} >
                            <MdArrowBack size={25} color={"#efc368"}/>
                        </button>
                    </Link>
                </div>
                <Slider {...settings1}>
                    <div  className={'slideHolder1'}>
                        <img src={callButton} alt="MakeHerHappy" className={'sliderImage1'}/>
                    </div>
                    <div  className={'slideHolder1'}>
                        <img src={callButton} alt="MakeHerHappy" className={'sliderImage1'}/>
                    </div>
                    <div  className={'slideHolder1'}>
                        <img src={callButton} alt="MakeHerHappy" className={'sliderImage1'}/>
                    </div>
                </Slider>
                <div class={'display-flex ptb-30'}>

                    <div class={'w-50pr m-0'}>
                        <p className={'pl-4vw pr-4vw m-0 price-text mb-5'}>
                            {price} ש"ח
                        </p>
                        <p className={'pr-4vw m-0 fs-16 sub-t-c'}>
                            {description}
                        </p>
                    </div>
                    <div class={'w-50pr pl-2vh'}>
                        <button class={'buy-now-btn'}>לקנות</button>
                    </div>
                </div>

                <div class={'display-block mb-50'}>
                    <p className={'pl-4vw pr-4vw m-0 price-text mb-5 fs-18'}>
                        {name}
                    </p>
                    <p className={'pl-4vw pr-4vw m-0 price-text mb-5 fs-16 ta-left lh sub-t-c mt-5'}>
                        {story}
                    </p>
                </div>
                <div class={'footer-main'}>
                    <div class={'mt-8'}>
                        <hr class={'m-0 hr-c'}/>
                    </div>
                    <div className={'footerMobile'}>
                        <div class={'p-15'}>
                            <p className={'foot-text'}>© 2019. All rights reserved</p>
                        </div>
                        <div class={'p-15 display-flex'}>
                            <div class={'mr-2vh'}>
                                <Facebook size={20} color={"#efc368"}/>
                            </div>
                            <div class={'mr-2vh'}>
                                <Twitter size={20} color={"#efc368"}/>
                            </div>
                            <div class={'mr-2vh'}>
                                <Linkedin size={20} color={"#efc368"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ProductPage;
