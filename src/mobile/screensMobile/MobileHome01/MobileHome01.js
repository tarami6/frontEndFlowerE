import React, {Component} from 'react';
import './slider.css'
import Slider from "react-slick";

import callButton from "../../assetsMobile/imagesMobile/makeHerHappy.jpg";
import flowerBox from "../../assetsMobile/buquetsMobile/flowerBox.jpg";

class MobileHome01 extends Component {
    render() {
        const settings = {
            dots: true,
            speed: 500,
            className: "Slider",
            centerMode: true
        };
        const settingsFlowers = {
            speed: 500,
            centerMode: true
        };
        return (
            <div>
                <Slider {...settings}>
                    <div onClick={()=>console.log("clicked")} className={'slideHolder'}>
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
                        <p className={'buquetPriceText'}>100 ש"ח  </p>
                    </div>

                </div>
                    <div className={'productHolder'}>
                        <img src={flowerBox} alt="MakeHerHappy" className={'buquetImage'}/>
                    </div>
                </Slider>
                <div>
                    <p>Here footer</p>
                </div>
            </div>




        )
    }
}

export default MobileHome01;
