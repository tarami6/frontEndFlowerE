import React, {Component} from 'react'
import sliderTuBeav from "../../assetsMobile/imagesMobile/sliderHomePage/toBeAv.jpg";
import womanSmileMission from "../../assetsMobile/imagesMobile/sliderHomePage/womanSmileMission.jpg";
import Slider  from "react-slick";
import {flowersMobile} from '../../../services/Const/const';
import {Link} from "react-router-dom";




class SliderHome extends Component {
    constructor(props) {
        super(props);
        this.pause = this.pause.bind(this);
    }


    pause() {
        this.slider.slickPause();
    }


    render() {
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
            <Slider ref={slider => (this.slider = slider)}  {...settings}>
                {/*<div onClick={() => this.pause()} className={'slideHolder'}>*/}
                    {/*<img src={sliderTuBeav} alt="MakeHerHappy" className={'sliderImage'}/>*/}
                {/*</div>*/}
                <div onClick={() => this.props.openPopUp( { category: 'FLOWER_OF_THE_WEEK',text: flowersMobile[5].name}) } className={'slideHolder'}>
                    {/*<img src={womanSmileMission} alt="MakeHerHappy" className={'sliderImage'}/>*/}
                    <div className={'flowerOfTheWeek'} style={{backgroundImage: `url(${require('../../../mobile/assetsMobile/imagesMobile/productPage/purpleBuquet02.jpg')})`}}>

                        <div className={'flowerOfTheWeekInfo'}>
                            <div className={'flowerOfTheWeekText'}>
                                <p className={'sellTextIconFlowerOfTheWeek'}>זר השבוע</p>
                                <p className={'buquetNameText'}>{flowersMobile[5].name}</p>
                            </div>
                            {/*<div className={'flowerOfTheWeekBuy'} >*/}
                                    {/*<p className={'flowerOfTheWeekBuyText'}>להזמנה</p>*/}
                            {/*</div>*/}

                        </div>
                    </div>
                </div>

            </Slider>
        )
    }
}

export default SliderHome
