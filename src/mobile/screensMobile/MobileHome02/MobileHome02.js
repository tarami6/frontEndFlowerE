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
import Twitter from 'react-icons/lib/fa/twitter';


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
    const settings1 = {
      // autoplay:true,
      dots: true,
      speed: 200,
      className: "Slider1",
      // centerMode: true
    };
    return (
      <div>
        <div class={'back-btn-div p-25-0'}>
          <a href="/MobileHome01">
            <button class={'pull-left, p-fixed back-btn'} onClick={() => this.onclick('mb1')}>
              <MdArrowBack size={25} color={"#efc368"} />
            </button>
          </a>
        </div>
        <Slider {...settings1}>
          <div onClick={() => console.log("clicked")} className={'slideHolder1'}>
            <img src={callButton} alt="MakeHerHappy" className={'sliderImage1'} />
          </div>
          <div onClick={() => console.log("clicked")} className={'slideHolder1'}>
            <img src={callButton} alt="MakeHerHappy" className={'sliderImage1'} />
          </div>
          <div onClick={() => console.log("clicked")} className={'slideHolder1'}>
            <img src={callButton} alt="MakeHerHappy" className={'sliderImage1'} />
          </div>
        </Slider>
        <div class={'display-flex ptb-30'}>

          <div class={'w-50pr m-0'}>
            <p className={'pl-4vw pr-4vw m-0 price-text mb-5'}>
              $109.99
                  </p>
            <p className={'pr-4vw m-0 fs-16 sub-t-c'}>
              דס איאקוליס וולופטהא</p>
          </div>
          <div class={'w-50pr pl-2vh'}>
            <button class={'buy-now-btn'}>Buy now</button>
          </div>
        </div>

        <div class={'display-block mb-50'}>
          <p className={'pl-4vw pr-4vw m-0 price-text mb-5 fs-18'}>
            להאמית קרהשק סכעיט דז מא
                </p>
          <p className={'pl-4vw pr-4vw m-0 price-text mb-5 fs-16 ta-left lh sub-t-c mt-5'}>
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.
                </p>
        </div>
        <div class={'footer-main'}>
          <div class={'mt-8'}>
            <hr class={'m-0 hr-c'} />
          </div>
          <div className={'footerMobile'}>
            <div class={'p-15'}>
              <p className={'foot-text'}>© 2019. All rights reserved</p>
            </div>
            <div class={'p-15 display-flex'}>
              <div class={'mr-2vh'}>
                <Facebook size={20} color={"#efc368"} />
              </div>
              <div class={'mr-2vh'}>
                <Twitter size={20} color={"#efc368"} />
              </div>
              <div class={'mr-2vh'}>
                <Linkedin size={20} color={"#efc368"} />
              </div>
            </div>
          </div>
        </div>
      </div >

    )
  }
}

export default MobileHome02;
