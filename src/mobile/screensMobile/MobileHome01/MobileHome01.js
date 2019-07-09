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

import { isAndroid } from 'react-device-detect';

import MdArrowBack from 'react-icons/lib/md/arrow-back';
import Facebook from 'react-icons/lib/fa/facebook';
import Whatsapp from 'react-icons/lib/fa/whatsapp';
import Linkedin from 'react-icons/lib/fa/linkedin';
import Twitter from 'react-icons/lib/fa/twitter';
import PropTypes from "prop-types";
import ScrollMenu from "react-horizontal-scrolling-menu";
const list = [
  {
    image: require('../../assetsMobile/buquetsMobile/flowerBox.jpg'),
    text: "שם הזר",
    price: `"100 ש"ח"`
  },
  {
    image: require('../../assetsMobile/buquetsMobile/flowerBox.jpg'),
    text: "שם הזר",
    price: `"100 ש"ח"`
  },
  {
    image: require('../../assetsMobile/buquetsMobile/flowerBox.jpg'),
    text: "שם הזר",
    price: `"100 ש"ח"`
  },
  {
    image: require('../../assetsMobile/buquetsMobile/flowerBox.jpg'),
    text: "שם הזר",
    price: `"100 ש"ח"`
  },
  {
    image: require('../../assetsMobile/buquetsMobile/flowerBox.jpg'),
    text: "שם הזר",
    price: `"100 ש"ח"`
  },
  {
    image: require('../../assetsMobile/buquetsMobile/flowerBox.jpg'),
    text: "שם הזר",
    price: `"100 ש"ח"`
  },
  {
    image: require('../../assetsMobile/buquetsMobile/flowerBox.jpg'),
    text: "שם הזר",
    price: `"100 ש"ח"`
  },
  {
    image: require('../../assetsMobile/buquetsMobile/flowerBox.jpg'),
    text: "שם הזר",
    price: `"100 ש"ח"`
  },
];


const MenuItem = ({ text, img, price, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}>
    <a href="/MobileHome02">
      <div class="card">
        <div className={'productHolder'} style={{ backgroundImage: `url(${img})` }} >
          <div className={"arrowPointer"}>
            <MdArrowBack size={25} color={"#fff"} />
          </div>
          <div className={"productText"}>
            <p className={'buquetNameText'}>{text}</p>
            <p className={'buquetPriceText'}>{price} </p>
          </div>

        </div>
      </div>
    </a>
  </div>;
};

export const Menu = (list, selected) =>
  list.map(el => {
    const { text, image, price } = el;

    return <MenuItem text={text} img={image} price={price} key={text} selected={selected} />;
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};
Arrow.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};

export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

class MobileHome01 extends Component {
  constructor(props) {
    super(props);
    //tuser1067/athens

    this.state = {
      click: 'mb1',
      alignCenter: true,
      clickWhenDrag: false,
      dragging: true,
      hideArrows: true,
      hideSingleArrow: true,
      itemsCount: list.length,
      selected: "item1",
      translate: 0,
      transition: 1,
      wheel: true,
      inertiaScrollingSlowdown: 0.25
    }
    this.menuFirst = null;
    this.menuSecond = null;
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
  }
  onUpdate = ({ translate }) => {
    console.log(`onUpdate: translate: ${translate}`);
    this.setState({ translate });
  };

  onSelect = key => {
    console.log(`onSelect: ${key}`);
    this.setState({ selected: key });
  };
  componentDidMount() {
    if (!isAndroid) {
      window.addEventListener('touchstart', this.touchStart);
      window.addEventListener('touchmove', this.preventTouch, { passive: false });
    }

  }
  componentDidUpdate(prevProps, prevState) {
    const { alignCenter } = prevState;
    const { alignCenter: alignCenterNew } = this.state;
    if (alignCenter !== alignCenterNew) {
      this.menuFirst.setInitial();
      this.menuSecond.setInitial();
    }
  }

  componentWillUnmount() {
    if (!isAndroid) {
      window.removeEventListener('touchstart', this.touchStart);
      window.removeEventListener('touchmove', this.preventTouch, { passive: false });
    }
  }

  touchStart(e) {
    this.firstClientX = e.touches[0].clientX;
    this.firstClientY = e.touches[0].clientY;
  }

  preventTouch(e) {
    const minValue = 5; // threshold

    this.clientX = e.touches[0].clientX - this.firstClientX;
    this.clientY = e.touches[0].clientY - this.firstClientY;

    // Vertical scrolling does not work when you start swiping horizontally.
    if (Math.abs(this.clientX) > minValue) {
      e.preventDefault();
      e.returnValue = false;
      return false;
    }
  }
  onclick(click) {
    this.setState({ click })
  }

  setItemsCount = ev => {
    const { itemsCount = list.length, selected } = this.state;
    const val = +ev.target.value;
    const itemsCountNew =
      !isNaN(val) && val <= list.length && val >= 0
        ? +ev.target.value
        : list.length;
    const itemsCountChanged = itemsCount !== itemsCountNew;

    if (itemsCountChanged) {
      this.menuItems = Menu(list.slice(0, itemsCountNew), selected);
      this.setState({
        itemsCount: itemsCountNew
      });
    }
  };

  setSelected = ev => {
    const { value } = ev.target;
    this.setState({ selected: String(value) });
  };


  render() {
    const {
      alignCenter,
      clickWhenDrag,
      hideArrows,
      dragging,
      hideSingleArrow,
      itemsCount,
      selected,
      translate,
      transition,
      wheel
    } = this.state;

    const menuFirst = this.menuItems;
    const menuSecond = this.menuItems;

    const checkboxStyle = {
      margin: "5px 10px"
    };
    const valueStyle = {
      margin: "5px 10px",
      display: "inline-block"
    };
    const settings = {
      // autoplay:true,
      dots: true,
      speed: 200,
      className: "Slider",
      // centerMode: true
    };
    const settings1 = {
      // autoplay:true,
      dots: true,
      speed: 200,
      className: "Slider1",
      // centerMode: true
    };
    const settingsFlowers = {
      speed: 50,
      centerMode: true,
      centerPadding: 62,
      className: 'productSlider',
      swipeToSlide: true
    };
    return (
      <div>
        {
          this.state.click == 'mb1' ?
            <div>
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
              <div class={'display-flex ptb-5'} onClick={() => this.props.history.push('MobileHome02')}>
                <div class={'w-50pr'}>
                  <p className={'titleOboveTheFloerSlider'}>
                    פופולרי
            </p>
                </div>
                <div class={'w-50pr'}>
                  <p className={'titleOboveTheFloerSlider, left-text'}>
                    פופולרי
            </p>
                </div>
              </div>
              <div class={"drcn-initial "}>
                <ScrollMenu
                  key="menuFirst"
                  ref={el => (this.menuFirst = el)}
                  data={menuFirst}
                  // arrowLeft={ArrowLeft}
                  // arrowRight={ArrowRight}
                  hideArrows={hideArrows}
                  hideSingleArrow={hideSingleArrow}
                  transition={+transition}
                  // onUpdate={this.onUpdate}
                  // onSelect={this.onSelect}
                  // selected={selected}
                  // translate={translate}
                  // alignCenter={alignCenter}
                  // scrollToSelected={true}
                  // dragging={dragging}
                  // clickWhenDrag={clickWhenDrag}
                  // wheel={wheel}
                  inertiaScrolling={true}
                  inertiaScrollingSlowdown={1}
                />
              </div>

              <div class={"drcn-initial mb-50"}>
                <ScrollMenu
                  ref={el => (this.menuSecond = el)}
                  data={menuSecond}
                  key="menuSecond"
                  // arrowLeft={ArrowLeft}
                  // arrowRight={ArrowRight}
                  hideArrows={hideArrows}
                  hideSingleArrow={hideSingleArrow}
                  transition={+transition}
                  // onUpdate={this.onUpdate}
                  // onSelect={this.onSelect}
                  // selected={selected}
                  // translate={translate}
                  // alignCenter={alignCenter}
                  // scrollToSelected={true}
                  // dragging={dragging}
                  // clickWhenDrag={clickWhenDrag}
                  // wheel={wheel}
                  inertiaScrolling={true}
                  inertiaScrollingSlowdown={1}
                />
              </div>
              {/* <div class="scrolling-wrapper">
                <div class="card">
                  <div className={'productHolder'} style={{ backgroundImage: `url(${require('../../assetsMobile/buquetsMobile/flowerBox.jpg')})` }} >
                    <div className={"productText"}>
                      <p className={'buquetNameText'}>שם הזר</p>
                      <p className={'buquetPriceText'}>100 ש"ח </p>
                    </div>
                    <div className={"arrowPointer"}>
                      <MdArrowBack size={25} color={"#fff"} />
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div className={'productHolder'} style={{ backgroundImage: `url(${require('../../assetsMobile/buquetsMobile/flowerBox.jpg')})` }} >
                    <div className={"productText"}>
                      <p className={'buquetNameText'}> שם הזר</p>
                      <p className={'buquetPriceText'}>100 ש"ח </p>
                    </div>
                    <div className={"arrowPointer"}>
                      <MdArrowBack size={25} color={"#fff"} />
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div className={'productHolder'} style={{ backgroundImage: `url(${require('../../assetsMobile/buquetsMobile/flowerBox.jpg')})` }} >
                    <div className={"productText"}>
                      <p className={'buquetNameText'}>שם הזר</p>
                      <p className={'buquetPriceText'}>100 ש"ח </p>
                    </div>
                    <div className={"arrowPointer"}>
                      <MdArrowBack size={25} color={"#fff"} />
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div className={'productHolder'} style={{ backgroundImage: `url(${require('../../assetsMobile/buquetsMobile/flowerBox.jpg')})` }} >
                    <div className={"productText"}>
                      <p className={'buquetNameText'}> שם הזר</p>
                      <p className={'buquetPriceText'}>100 ש"ח </p>
                    </div>
                    <div className={"arrowPointer"}>
                      <MdArrowBack size={25} color={"#fff"} />
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div className={'productHolder'} style={{ backgroundImage: `url(${require('../../assetsMobile/buquetsMobile/flowerBox.jpg')})` }} >
                    <div className={"productText"}>
                      <p className={'buquetNameText'}>שם הזר</p>
                      <p className={'buquetPriceText'}>100 ש"ח </p>
                    </div>
                    <div className={"arrowPointer"}>
                      <MdArrowBack size={25} color={"#fff"} />
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div class="scrolling-wrapper mb-50">
                <div class="card">
                  <div className={'productHolder'} style={{ backgroundImage: `url(${require('../../assetsMobile/buquetsMobile/flowerBox.jpg')})` }} >
                    <div className={"productText"}>
                      <p className={'buquetNameText'}>שם הזר</p>
                      <p className={'buquetPriceText'}>100 ש"ח </p>
                    </div>
                    <div className={"arrowPointer"}>
                      <MdArrowBack size={25} color={"#fff"} />
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div className={'productHolder'} style={{ backgroundImage: `url(${require('../../assetsMobile/buquetsMobile/flowerBox.jpg')})` }} >
                    <div className={"productText"}>
                      <p className={'buquetNameText'}> שם הזר</p>
                      <p className={'buquetPriceText'}>100 ש"ח </p>
                    </div>
                    <div className={"arrowPointer"}>
                      <MdArrowBack size={25} color={"#fff"} />
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div className={'productHolder'} style={{ backgroundImage: `url(${require('../../assetsMobile/buquetsMobile/flowerBox.jpg')})` }} >
                    <div className={"productText"}>
                      <p className={'buquetNameText'}>שם הזר</p>
                      <p className={'buquetPriceText'}>100 ש"ח </p>
                    </div>
                    <div className={"arrowPointer"}>
                      <MdArrowBack size={25} color={"#fff"} />
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div className={'productHolder'} style={{ backgroundImage: `url(${require('../../assetsMobile/buquetsMobile/flowerBox.jpg')})` }} >
                    <div className={"productText"}>
                      <p className={'buquetNameText'}> שם הזר</p>
                      <p className={'buquetPriceText'}>100 ש"ח </p>
                    </div>
                    <div className={"arrowPointer"}>
                      <MdArrowBack size={25} color={"#fff"} />
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div className={'productHolder'} style={{ backgroundImage: `url(${require('../../assetsMobile/buquetsMobile/flowerBox.jpg')})` }} >
                    <div className={"productText"}>
                      <p className={'buquetNameText'}>שם הזר</p>
                      <p className={'buquetPriceText'}>100 ש"ח </p>
                    </div>
                    <div className={"arrowPointer"}>
                      <MdArrowBack size={25} color={"#fff"} />
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div class={'mb-50'}>
                <Slider {...settingsFlowers}>
                  <div className={'productHolder'} >
                    <img src={hamaniotbuquet} alt="MakeHerHappy" className={'buquetImage'} />
                    <div className={"productText"}>
                      <p className={'buquetNameText'}>שם הזר</p>
                      <p className={'buquetPriceText'}>100 ש"ח </p>
                    </div>
                    <div className={"arrowPointer"}>
                      <MdArrowBack size={25} color={"#fff"} />
                    </div>
                  </div>
                  <div className={'productHolder'} >
                    <img src={sagol} alt="MakeHerHappy" className={'buquetImage'} />
                    <div className={"productText"}>
                      <p className={'buquetNameText'}>שם הזר</p>
                      <p className={'buquetPriceText'}>100 ש"ח </p>
                    </div>
                    <div className={"arrowPointer"}>
                      <MdArrowBack size={25} color={"#fff"} />
                    </div>
                  </div>
                </Slider>
              </div> */}

              <ActionToCall />
            </div >
            :
            <div>
              <div class={'back-btn-div p-25-0'}>
                <button class={'pull-left, p-fixed back-btn'} onClick={() => this.onclick('mb1')}>
                  <MdArrowBack size={25} color={"#efc368"} />
                </button>
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

            </div >

        }
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
      </div>
    )
  }
}

export default MobileHome01;
