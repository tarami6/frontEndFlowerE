import React, {Component} from 'react'
import sliderTuBeav from "../../assetsMobile/imagesMobile/sliderHomePage/toBeAv.jpg";
import womanSmileMission from "../../assetsMobile/imagesMobile/sliderHomePage/womanSmileMission.jpg";
import Slider  from "react-slick";




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
                <div onClick={() => this.pause()} className={'slideHolder'}>
                    <img src={womanSmileMission} alt="MakeHerHappy" className={'sliderImage'}/>
                </div>
            </Slider>
        )
    }
}

export default SliderHome
