import React, { Fragment } from 'react'
import './DeskHome1.css'
import logo from '../../assetsDesktop/imagesDesk/DesktopLogo'
import FlowerBoxDesktop from '../../componentsDesktop/FlowerBoxDesktop/FlowerBoxDesktop'
import { flowers } from "../../../services/Const/const";
import whatsUpIcon from "../../../mobile/assetsMobile/imagesMobile/whatsUpIcon.png";
import FaceBook from "../../../mobile/assetsMobile/imagesMobile/FaceBook.png";
import Instagram from "../../../mobile/assetsMobile/imagesMobile/Instagram.png";
import callButton from "../../../desktop/assetsDesktop/imagesDesk/DeskHomeFuirstDivBackGround.jpg";
import zerBayadLogo from "../../../desktop/assetsDesktop/imagesDesk/zerBayadLogo.png";
import annieSprattBG from "../../../desktop/assetsDesktop/imagesDesk/annieSprattBG.png";
import MdArrowBack from 'react-icons/lib/md/arrow-back';

import Slider from "react-slick";


// function FirstContainer() {
//   // return <animated.div style={props}>I will fade in</animated.div>
//   return (
//     <div className={'firstDiv'}>
//       <img src={logo} alt="" className={'logo'} />
//     </div>
//   )
// }

// const ContentContainer = (props) => {
//   return (
//     <div className={'productRow'}>
//       {props.flowers.map(flower => {
//         return (
//           <FlowerBoxDesktop
//             key={Math.random() * flower.price}
//             image={flower.image}
//             name={flower.name}
//             price={flower.price}
//             story={flower.story}
//           />
//         )
//       })
//       }
//     </div>

//   )
// }

class DeskHome1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flowers: flowers,
      flowerLoad: false
    }
    this.myRefDektop = React.createRef()
  }

  componentDidMount() {
    console.log('mobileHome didi mount')
    this.handleScroll()
  }


  handleScroll = () => {
    const { index, selected } = this.props
    if (index === selected) {
      const that = this
      setTimeout(() => {
        that.myRefDektop.current.scrollIntoView({ behavior: 'smooth' })
      }, 1500)
    }
  }

  render() {
    const { flowers } = this.state
    const settings = {
      // autoplay:true,
      dots: true,
      speed: 200,
      className: "sliderDesk",
      // centerMode: true
    };
    return (
      <div className={'deskHome'}>
        <div class="">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              {/* <div class="ciDiv abc"> */}
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              {/* </div> */}
              {/* <div class="ciDiv"> */}
              <li data-target="#myCarousel" data-slide-to="1"></li>
              {/* </div> */}
              {/* <div class="ciDiv"> */}
              <li data-target="#myCarousel" data-slide-to="2"></li>
              {/* </div> */}
            </ol>

            <div class="carousel-inner">
              <div class="item active">
                <img src={annieSprattBG} alt="Los Angeles" class="deskSliderImg" />
                <div class="carousel-caption">
                  <img src={zerBayadLogo} alt="Los Angeles" class="w-160px" />
                  <p className='fs-80' style={{ paddingTop: 60 }}>Mothers day</p>
                  <p className='fs-28'>
                    People who receive flowers reflect immediate
                      </p>
                  <p className='fs-28'>
                    happiness. Get 15% discount on all bouquets,
                  </p>
                  <p className='fs-28'>
                    make your mom happy!
                      </p>
                  <button class={'order-now-btn'}>Buy now</button>
                </div>
              </div>

              <div class="item ">
                <img src={annieSprattBG} alt="Los Angeles" class="deskSliderImg" />
                <div class="carousel-caption">
                  <img src={zerBayadLogo} alt="Los Angeles" class="w-160px" />
                  <p className='fs-80' style={{ paddingTop: 60 }}>Mothers day</p>
                  <p className='fs-28'>
                    People who receive flowers reflect immediate
                      </p>
                  <p className='fs-28'>
                    happiness. Get 15% discount on all bouquets,
                  </p>
                  <p className='fs-28'>
                    make your mom happy!
                      </p>
                  <button class={'order-now-btn'}>Buy now</button>
                </div>
              </div>

              <div class="item ">
                <img src={annieSprattBG} alt="Los Angeles" class="deskSliderImg" />
                <div class="carousel-caption">
                  <img src={zerBayadLogo} alt="Los Angeles" class="w-160px" />
                  <p className='fs-80' style={{ paddingTop: 60 }}>Mothers day</p>
                  <p className='fs-28'>
                    People who receive flowers reflect immediate
                      </p>
                  <p className='fs-28'>
                    happiness. Get 15% discount on all bouquets,
                  </p>
                  <p className='fs-28'>
                    make your mom happy!
                      </p>
                  <button class={'order-now-btn'}>Buy now</button>
                </div>
              </div>
            </div>

            {/* <a class="left carousel-control" href="#myCarousel" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a> */}
          </div>
        </div>
        <div>
          <p class="popular-text">Populer</p>
          <p class="popular-info">
            Some flowers are popular because of their unique fragrance, beauty or both
          </p>
          <p class="popular-info">
            Rose is the most popular flower in the world </p>
        </div>
        <Slider {...settings} class="sliderDesk">
          <div onClick={() => console.log("clicked")} className={'deskSlideHolder'}>
            <div class="col-md-4">
              <div class="w-100pr">
                <a href="/#">
                  <div className={'deskProductHolder'} style={{ backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/annieSpratt.png')})` }}>
                    <div className={"deskArrowPointer"}>
                      <MdArrowBack size={40} color={"#fff"} />
                    </div>
                    <div className={"deskProductText"}>
                      <p className={'title'}>Shades of Purple</p>
                      <p className={'info'}>Looking at this composition is impossible not to fall in love. Perfect color...</p>
                      <p className={'price'}>$120.00</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="w-100pr">
                <a href="/#">
                  <div className={'deskProductHolder'} style={{ backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/annieSpratt1.png')})` }}>
                    <div className={"deskArrowPointer"}>
                      <MdArrowBack size={40} color={"#fff"} />
                    </div>
                    <div className={"deskProductText"}>
                      <p className={'title'}>Heart’s Desire</p>
                      <p className={'info'}>Looking at this composition is impossible not to fall in love. Perfect color...</p>
                      <p className={'price'}>$199.99</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="w-100pr">
                <a href="/#">
                  <div className={'deskProductHolder'} style={{ backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/leonardoWong.png')})` }}>
                    <div className={"deskArrowPointer"}>
                      <MdArrowBack size={40} color={"#fff"} />
                    </div>
                    <div className={"deskProductText"}>
                      <p className={'title'}>Sweet Peach</p>
                      <p className={'info'}>Looking at this composition is impossible not to fall in love. Perfect color...</p>
                      <p className={'price'}>$150.00</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* ---------------------------------------------------- */}
          <div onClick={() => console.log("clicked")} className={'deskSlideHolder'}>
            <div class="col-md-4">
              <div class="w-100pr">
                <a href="/#">
                  <div className={'deskProductHolder'} style={{ backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/annieSpratt.png')})` }}>
                    <div className={"deskArrowPointer"}>
                      <MdArrowBack size={40} color={"#fff"} />
                    </div>
                    <div className={"deskProductText"}>
                      <p className={'title'}>Shades of Purple</p>
                      <p className={'info'}>Looking at this composition is impossible not to fall in love. Perfect color...</p>
                      <p className={'price'}>$120.00</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="w-100pr">
                <a href="/#">
                  <div className={'deskProductHolder'} style={{ backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/annieSpratt1.png')})` }}>
                    <div className={"deskArrowPointer"}>
                      <MdArrowBack size={40} color={"#fff"} />
                    </div>
                    <div className={"deskProductText"}>
                      <p className={'title'}>Shades of Purple</p>
                      <p className={'info'}>Looking at this composition is impossible not to fall in love. Perfect color...</p>
                      <p className={'price'}>$120.00</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="w-100pr">
                <a href="/#">
                  <div className={'deskProductHolder'} style={{ backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/leonardoWong.png')})` }}>
                    <div className={"deskArrowPointer"}>
                      <MdArrowBack size={40} color={"#fff"} />
                    </div>
                    <div className={"deskProductText"}>
                      <p className={'title'}>Shades of Purple</p>
                      <p className={'info'}>Looking at this composition is impossible not to fall in love. Perfect color...</p>
                      <p className={'price'}>$120.00</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* ---------------------------------------------------- */}
          <div onClick={() => console.log("clicked")} className={'deskSlideHolder'}>
            <div class="col-md-4">
              <div class="w-100pr">
                <a href="/#">
                  <div className={'deskProductHolder'} style={{ backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/annieSpratt.png')})` }}>
                    <div className={"deskArrowPointer"}>
                      <MdArrowBack size={40} color={"#fff"} />
                    </div>
                    <div className={"deskProductText"}>
                      <p className={'title'}>Shades of Purple</p>
                      <p className={'info'}>Looking at this composition is impossible not to fall in love. Perfect color...</p>
                      <p className={'price'}>$120.00</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="w-100pr">
                <a href="/#">
                  <div className={'deskProductHolder'} style={{ backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/annieSpratt1.png')})` }}>
                    <div className={"deskArrowPointer"}>
                      <MdArrowBack size={40} color={"#fff"} />
                    </div>
                    <div className={"deskProductText"}>
                      <p className={'title'}>Shades of Purple</p>
                      <p className={'info'}>Looking at this composition is impossible not to fall in love. Perfect color...</p>
                      <p className={'price'}>$120.00</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="w-100pr">
                <a href="/#">
                  <div className={'deskProductHolder'} style={{ backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/leonardoWong.png')})` }}>
                    <div className={"deskArrowPointer"}>
                      <MdArrowBack size={40} color={"#fff"} />
                    </div>
                    <div className={"deskProductText"}>
                      <p className={'title'}>Shades of Purple</p>
                      <p className={'info'}>Looking at this composition is impossible not to fall in love. Perfect color...</p>
                      <p className={'price'}>$120.00</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Slider>

        <Slider {...settings} class="sliderDesk">
          <div onClick={() => console.log("clicked")} className={'deskSlideHolder'}>
            <div class="col-md-4">
              <div class="w-100pr">
                <a href="/#">
                  <div className={'deskProductHolder'} style={{ backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/annieSpratt.png')})` }}>
                    <div className={"deskArrowPointer"}>
                      <MdArrowBack size={40} color={"#fff"} />
                    </div>
                    <div className={"deskProductText"}>
                      <p className={'title'}>Memory Lane</p>
                      <p className={'info'}>Magnificent air composition in a box gives, so warm and welcome...</p>
                      <p className={'price'}>$120.00</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="w-100pr">
                <a href="/#">
                  <div className={'deskProductHolder'} style={{ backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/annieSpratt1.png')})` }}>
                    <div className={"deskArrowPointer"}>
                      <MdArrowBack size={40} color={"#fff"} />
                    </div>
                    <div className={"deskProductText"}>
                      <p className={'title'}>Sweet & Pink</p>
                      <p className={'info'}>Light and airy bouquet instantly lifts the mood and brings to the present summer...</p>
                      <p className={'price'}>$120.00</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="w-100pr">
                <a href="/#">
                  <div className={'deskProductHolder'} style={{ backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/leonardoWong.png')})` }}>
                    <div className={"deskArrowPointer"}>
                      <MdArrowBack size={40} color={"#fff"} />
                    </div>
                    <div className={"deskProductText"}>
                      <p className={'title'}>Sweetheart</p>
                      <p className={'info'}>A box of flowers is a good gift idea for any occasion. Every girl loves flowers...</p>
                      <p className={'price'}>$150.00</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* ---------------------------------------------------- */}
          <div onClick={() => console.log("clicked")} className={'deskSlideHolder'}>
            <div class="col-md-4">
              <div class="w-100pr">
                <a href="/#">
                  <div className={'deskProductHolder'} style={{ backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/annieSpratt.png')})` }}>
                    <div className={"deskArrowPointer"}>
                      <MdArrowBack size={40} color={"#fff"} />
                    </div>
                    <div className={"deskProductText"}>
                      <p className={'title'}>Shades of Purple</p>
                      <p className={'info'}>Looking at this composition is impossible not to fall in love. Perfect color...</p>
                      <p className={'price'}>$120.00</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="w-100pr">
                <a href="/#">
                  <div className={'deskProductHolder'} style={{ backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/annieSpratt1.png')})` }}>
                    <div className={"deskArrowPointer"}>
                      <MdArrowBack size={40} color={"#fff"} />
                    </div>
                    <div className={"deskProductText"}>
                      <p className={'title'}>Shades of Purple</p>
                      <p className={'info'}>Looking at this composition is impossible not to fall in love. Perfect color...</p>
                      <p className={'price'}>$120.00</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="w-100pr">
                <a href="/#">
                  <div className={'deskProductHolder'} style={{ backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/leonardoWong.png')})` }}>
                    <div className={"deskArrowPointer"}>
                      <MdArrowBack size={40} color={"#fff"} />
                    </div>
                    <div className={"deskProductText"}>
                      <p className={'title'}>Shades of Purple</p>
                      <p className={'info'}>Looking at this composition is impossible not to fall in love. Perfect color...</p>
                      <p className={'price'}>$120.00</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* ---------------------------------------------------- */}
          <div onClick={() => console.log("clicked")} className={'deskSlideHolder'}>
            <div class="col-md-4">
              <div class="w-100pr">
                <a href="/#">
                  <div className={'deskProductHolder'} style={{ backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/annieSpratt.png')})` }}>
                    <div className={"deskArrowPointer"}>
                      <MdArrowBack size={40} color={"#fff"} />
                    </div>
                    <div className={"deskProductText"}>
                      <p className={'title'}>Shades of Purple</p>
                      <p className={'info'}>Looking at this composition is impossible not to fall in love. Perfect color...</p>
                      <p className={'price'}>$120.00</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="w-100pr">
                <a href="/#">
                  <div className={'deskProductHolder'} style={{ backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/annieSpratt1.png')})` }}>
                    <div className={"deskArrowPointer"}>
                      <MdArrowBack size={40} color={"#fff"} />
                    </div>
                    <div className={"deskProductText"}>
                      <p className={'title'}>Shades of Purple</p>
                      <p className={'info'}>Looking at this composition is impossible not to fall in love. Perfect color...</p>
                      <p className={'price'}>$120.00</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="w-100pr">
                <a href="/#">
                  <div className={'deskProductHolder'} style={{ backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/leonardoWong.png')})` }}>
                    <div className={"deskArrowPointer"}>
                      <MdArrowBack size={40} color={"#fff"} />
                    </div>
                    <div className={"deskProductText"}>
                      <p className={'title'}>Shades of Purple</p>
                      <p className={'info'}>Looking at this composition is impossible not to fall in love. Perfect color...</p>
                      <p className={'price'}>$120.00</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Slider>
        <div ref={this.myRefDektop} />
        {/* <div className={'container'}>
          <ContentContainer
            flowers={flowers}
          />
        </div> */}
        {/* <div className={'footerDesktop'}>
          <p className={'footerStory'}>
            להזמנה חייג - 0542291102
                    </p>
          <div className={'footerSocialMenuDesktop'}>
            <div>
              <a href="https://www.facebook.com/">
                <img src={whatsUpIcon} alt="" className={'socialIconMenuDesktop'} />
              </a>
            </div>
            <div>
              <a href="https://www.facebook.com/">
                <img src={FaceBook} alt="" className={'socialIconMenuDesktop'} />
              </a>
            </div>
            <div >
              <a href="https://www.facebook.com/">
                <img src={Instagram} alt="" className={'socialIconMenuDesktop'} />
              </a>
            </div>
          </div>
        </div>
        <div className={'poweredByDesktop'} >
          <a href="idt.co.il" className={'poweredByText'}>Powered By IDT </a>
        </div> */}

      </div >
    )
  }
}

export default DeskHome1
