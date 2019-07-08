import React, { Component } from 'react';
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


class MobileHome02 extends Component {
  componentDidMount() {
    // window.addEventListener('touchstart', this.touchStart);
    // window.addEventListener('touchmove', this.preventTouch, { passive: false });
  }

  componentWillUnmount() {
    // window.removeEventListener('touchstart', this.touchStart);
    // window.removeEventListener('touchmove', this.preventTouch, { passive: false });
  }

  touchStart(e) {
    this.firstClientX = e.touches[0].clientX;
    this.firstClientY = e.touches[0].clientY;
  }

  // preventTouch(e) {
  //   const minValue = 5; // threshold
  //
  //   this.clientX = e.touches[0].clientX - this.firstClientX;
  //   this.clientY = e.touches[0].clientY - this.firstClientY;
  //
  //   // Vertical scrolling does not work when you start swiping horizontally.
  //   if (Math.abs(this.clientX) > minValue) {
  //     e.preventDefault();
  //     e.returnValue = false;
  //     return false;
  //   }
  // }

  render() {
    const settings = {
      autoplay: true,
      dots: true,
      speed: 200,
      className: "Slider",
      // centerMode: true
    };
    return (
      <div>
        <div class={'back-btn'}>
          <button class={'pull-left'}>Back</button>
        </div>
        <Slider {...settings}>
          <div onClick={() => console.log("clicked")} className={'slideHolder'}>
            <img src={callButton} alt="MakeHerHappy" className={'sliderImage'} />
          </div>
          <div onClick={() => console.log("clicked")} className={'slideHolder'}>
            <img src={callButton} alt="MakeHerHappy" className={'sliderImage'} />
          </div>
          <div onClick={() => console.log("clicked")} className={'slideHolder'}>
            <img src={callButton} alt="MakeHerHappy" className={'sliderImage'} />
          </div>
        </Slider>
        <div class={'display-flex ptb-30'}>
          <div class={'w-50pr pr-2vh'}>
            <button class={'buy-now-btn'}>Buy now</button>
          </div>
          <div class={'w-50pr m-0'}>
            <p className={'left-text m-0 price-text mb-5'}>
              $109.99
            </p>
            <p className={'left-text m-0 fs-16 sub-t-c'}>
              15 flowers,delicate, pink</p>
          </div>
        </div>

        <div class={'display-block'}>
          <p className={'left-text m-0 price-text mb-5 fs-18'}>
            Ranunculus pink&white
            </p>
          <p className={'left-text m-0 price-text mb-5 fs-16 ta-left lh sub-t-c mt-5'}>
            Ranunculus is a genus of about 500 species of flowering plants in the family Ranunculaceae. Members of the genus include the buttercups, spearworts and water crowfoots. The petals are often highly lustrous, especially in yellow species, owing to a special coloration mechanism: the petal's upper surface is very smooth causing a mirror-like reflection.
            </p>
        </div>

        <hr class={'m-0 hr-c'} />
        <div className={'footerMobile'}>
          <div class={'w-50pr'}>
            <p className={'companySmallTitle'}>ZERBAYAD</p>
          </div>
          <div class={'w-50pr, display-flex'}>
            <div class={'ml-2vh'}>
              <Facebook size={20} color={"#efc368"} />
            </div>
            <div class={'ml-2vh'}>
              <Whatsapp size={20} color={"#efc368"} />
            </div>
            <div class={'ml-2vh'}>
              <Linkedin size={20} color={"#efc368"} />
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default MobileHome02;
