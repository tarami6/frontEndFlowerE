import React, {Component} from 'react';
import './slider.css'
import Slider from "react-slick";
import ActionToCall from '../../componentsMobile/ActionToCall/ActionToCall'

import callButton from "../../assetsMobile/imagesMobile/makeHerHappy.jpg";

import flowerBox from "../../assetsMobile/buquetsMobile/flowerBox.jpg";
import hamaniotbuquet from "../../assetsMobile/buquetsMobile/hamaniotbuquet.jpg";
import zivoni from "../../assetsMobile/buquetsMobile/zivoni.jpg";
import sagol from "../../assetsMobile/buquetsMobile/sagol.jpg";
import rosesbuquet from "../../assetsMobile/buquetsMobile/rosesbuquet.jpg";


import MdArrowBack from 'react-icons/lib/md/arrow-back';
import Facebook from 'react-icons/lib/fa/facebook';
import Whatsapp from 'react-icons/lib/fa/whatsapp';
import Linkedin from 'react-icons/lib/fa/linkedin';


class MobileHome01 extends Component {
    render() {
        const settings = {
            dots: true,
            speed: 500,
            className: "Slider",
            centerMode: true
        };
        const settingsFlowers = {
            speed: 700,
            centerMode: true,
            centerPadding: 55,
            className: 'productSlider'
        };
        return (
            <div>
                <Slider {...settings}>
                    <div onClick={() => console.log("clicked")} className={'slideHolder'}>
                        <img src={callButton} alt="MakeHerHappy" className={'sliderImage'}/>
                    </div>
                </Slider>
                <div>
                    <p className={'titleOboveTheFloerSlider'}>
                        פופולרי
                    </p>
                </div>
                <Slider {...settingsFlowers}>
                    <div className={'productHolder'}>
                        <img src={flowerBox} alt="MakeHerHappy" className={'buquetImage'}/>
                        <div className={"productText"}>
                            <p className={'buquetNameText'}>שם הזר</p>
                            <p className={'buquetPriceText'}>100 ש"ח </p>
                        </div>
                        <div className={"arrowPointer"}>
                            <MdArrowBack size={25} color={"#fff"}/>
                        </div>
                    </div>
                    <div className={'productHolder'}>
                        <img src={rosesbuquet} alt="MakeHerHappy" className={'buquetImage'}/>
                        <div className={"productText"}>
                            <p className={'buquetNameText'}>שם הזר</p>
                            <p className={'buquetPriceText'}>100 ש"ח </p>
                        </div>
                        <div className={"arrowPointer"}>
                            <MdArrowBack size={25} color={"#fff"}/>
                        </div>
                    </div>
                    <div className={'productHolder'}>
                        <img src={zivoni} alt="MakeHerHappy" className={'buquetImage'}/>
                        <div className={"productText"}>
                            <p className={'buquetNameText'}>שם הזר</p>
                            <p className={'buquetPriceText'}>100 ש"ח </p>
                        </div>
                        <div className={"arrowPointer"}>
                            <MdArrowBack size={25} color={"#fff"}/>
                        </div>
                    </div>
                </Slider>
                <div>
                    <p className={'titleOboveTheFloerSlider'}>
                        קלסי
                    </p>
                </div>
                <Slider {...settingsFlowers}>
                    <div className={'productHolder'}>
                        <img src={hamaniotbuquet} alt="MakeHerHappy" className={'buquetImage'}/>
                        <div className={"productText"}>
                            <p className={'buquetNameText'}>שם הזר</p>
                            <p className={'buquetPriceText'}>100 ש"ח </p>
                        </div>
                        <div className={"arrowPointer"}>
                            <MdArrowBack size={25} color={"#fff"}/>
                        </div>
                    </div>
                    <div className={'productHolder'}>
                        <img src={sagol} alt="MakeHerHappy" className={'buquetImage'}/>
                        <div className={"productText"}>
                            <p className={'buquetNameText'}>שם הזר</p>
                            <p className={'buquetPriceText'}>100 ש"ח </p>
                        </div>
                        <div className={"arrowPointer"}>
                            <MdArrowBack size={25} color={"#fff"}/>
                        </div>
                    </div>

                </Slider>
                <div className={'footerMobile'}>
                    <p className={'companySmallTitle'}>ZERBAYAD</p>
                    <Facebook size={25} color={"#fead00"}/>
                    <Whatsapp size={25} color={"#fead00"}/>
                    <Linkedin size={25} color={"#fead00"}/>
                </div>
                <ActionToCall/>
            </div>


        )
    }
}

export default MobileHome01;
