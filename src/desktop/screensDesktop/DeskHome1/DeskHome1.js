import React from 'react'
import './DeskHome1.css'
import {flowersMobile} from "../../../services/Const/const";
import zerBayadLogo from "../../../desktop/assetsDesktop/imagesDesk/zerBayadLogo.png";
import annieSprattBG from "../../../desktop/assetsDesktop/imagesDesk/annieSprattBG.png";
import Phone from 'react-icons/lib/fa/phone';
import Instagram from 'react-icons/lib/fa/instagram';
import Facebook from 'react-icons/lib/fa/facebook';
import Linkedin from 'react-icons/lib/fa/linkedin';
import Twitter from 'react-icons/lib/fa/twitter';


class DeskHome1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flowers: flowersMobile,
            flowerLoad: false
        }
        // this.myRefDektop = React.createRef()
    }

    // componentDidMount() {
    //   console.log('mobileHome didi mount')
    //   this.handleScroll()
    // }


    // handleScroll = () => {
    //   const { index, selected } = this.props
    //   if (index === selected) {
    //     const that = this
    //     setTimeout(() => {
    //       that.myRefDektop.current.scrollIntoView({ behavior: 'smooth' })
    //     }, 1500)
    //   }
    // }

    render() {
        return (
            <div>
                <div className={'deskHome'}>
                    <div class="">
                        <div id="myCarousel" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>

                            <div class="carousel-inner">
                                <div class="item active">
                                    <div>
                                        <img src={annieSprattBG} alt="Los Angeles" class="deskSliderImg"/>
                                    </div>
                                    <div class="carousel-caption">
                                        <div class='col-md-12 col-sm-12'>
                                            <div class='col-md-6 col-sm-4 col-xs-3'>
                                                <img src={zerBayadLogo} alt="Los Angeles" class="w-110px"/>
                                            </div>
                                            <div class='col-md-6 col-sm-5 col-xs-4 display-inline-box mt-50'>
                                                <div class='mr-160m'>
                                                    <p class='phone-text'>+90-532-456-34-23</p>
                                                    <p class='phone-text'>+90-552-112-00-78</p>
                                                </div>
                                                <div class='phone-icon-div'>
                                                    <Phone size={24} color={"#efc368"}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class='col-md-12'>
                                            <p className='fs-80' style={{paddingTop: 60}}>Mothers day</p>
                                            <p className='fs-28 mb-0'>
                                                People who receive flowers reflect immediate
                                            </p>
                                            <p className='fs-28 mb-0'>
                                                happiness. Get <strong>15%</strong> discount on all bouquets,
                                            </p>
                                            <p className='fs-28 mb-0'>
                                                make your mom happy!
                                            </p>
                                            <button class={'order-now-btn'}>Order now</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div>
                                        <img src={annieSprattBG} alt="Los Angeles" class="deskSliderImg"/>
                                    </div>
                                    <div class="carousel-caption">
                                        <div class='col-md-12 col-sm-12'>
                                            <div class='col-md-6 col-sm-4 col-xs-3'>
                                                <img src={zerBayadLogo} alt="Los Angeles" class="w-110px"/>
                                            </div>
                                            <div class='col-md-6 col-sm-5 col-xs-4 display-inline-box mt-50'>
                                                <div class='mr-160m'>
                                                    <p class='phone-text'>+90-532-456-34-23</p>
                                                    <p class='phone-text'>+90-552-112-00-78</p>
                                                </div>
                                                <div class='phone-icon-div'>
                                                    <Phone size={24} color={"#efc368"}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class='col-md-12'>
                                            <p className='fs-80' style={{paddingTop: 60}}>Mothers day</p>
                                            <p className='fs-28 mb-0'>
                                                People who receive flowers reflect immediate
                                            </p>
                                            <p className='fs-28 mb-0'>
                                                happiness. Get <strong>15%</strong> discount on all bouquets,
                                            </p>
                                            <p className='fs-28 mb-0'>
                                                make your mom happy!
                                            </p>
                                            <button class={'order-now-btn'}>Order now</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div>
                                        <img src={annieSprattBG} alt="Los Angeles" class="deskSliderImg"/>
                                    </div>
                                    <div class="carousel-caption">
                                        <div class='col-md-12 col-sm-12'>
                                            <div class='col-md-6 col-sm-4 col-xs-3'>
                                                <img src={zerBayadLogo} alt="Los Angeles" class="w-110px"/>
                                            </div>
                                            <div class='col-md-6 col-sm-5 col-xs-4 display-inline-box mt-50'>
                                                <div class='mr-160m'>
                                                    <p class='phone-text'>+90-532-456-34-23</p>
                                                    <p class='phone-text'>+90-552-112-00-78</p>
                                                </div>
                                                <div class='phone-icon-div'>
                                                    <Phone size={24} color={"#efc368"}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class='col-md-12'>
                                            <p className='fs-80' style={{paddingTop: 60}}>Mothers day</p>
                                            <p className='fs-28 mb-0'>
                                                People who receive flowers reflect immediate
                                            </p>
                                            <p className='fs-28 mb-0'>
                                                happiness. Get <strong>15%</strong> discount on all bouquets,
                                            </p>
                                            <p className='fs-28 mb-0'>
                                                make your mom happy!
                                            </p>
                                            <button class={'order-now-btn'}>Order now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div class='mt-80 mb-70'>
                        <p class="popular-text">Populer</p>
                        <p class="popular-info">
                            Some flowers are popular because of their unique fragrance, beauty or both
                        </p>
                        <p class="popular-info">
                            Rose is the most popular flower in the world </p>
                    </div>
                    <div onClick={() => console.log("clicked")} className='deskSlideHolder col-md-12'>
                        <div class="col-md-4">
                            <div class="w-100pr">
                                <a href="/DeskHome2">
                                    <div className={'deskProductHolder'}
                                         style={{backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/annieSpratt.png')})`}}>

                                        <div className={"deskProductText"}>
                                            <p className={'title'}>Shades of Purple</p>
                                            <p className={'info'}>Looking at this composition is impossible not to fall
                                                in love. Perfect color...</p>
                                            <p className={'price'}>$120.00</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="w-100pr">
                                <a href="/DeskHome2">
                                    <div className={'deskProductHolder'}
                                         style={{backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/annieSpratt1.png')})`}}>
                                        <div className={"deskProductText"}>
                                            <p className={'title'}>Heart’s Desire</p>
                                            <p className={'info'}>Looking at this composition is impossible not to fall
                                                in love. Perfect color...</p>
                                            <p className={'price'}>$199.99</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="w-100pr">
                                <a href="/DeskHome2">
                                    <div className={'deskProductHolder'}
                                         style={{backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/leonardoWong.png')})`}}>
                                        <div className={"deskProductText"}>
                                            <p className={'title'}>Sweet Peach</p>
                                            <p className={'info'}>Looking at this composition is impossible not to fall
                                                in love. Perfect color...</p>
                                            <p className={'price'}>$150.00</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* ---------------------------------------------------------------------------------- */}
                    <div class='col-md-12 mt-80 mb-70'>
                        <p class="popular-text">Classic</p>
                        <p class="popular-info">
                            Have you ever seen a flower and wondered what it was called, or heard a
                        </p>
                        <p class="popular-info">
                            flower name and wished you knew what it looked like? </p>
                    </div>

                    <div onClick={() => console.log("clicked")} className='deskSlideHolder col-md-12'>
                        <div class="col-md-4">
                            <div class="w-100pr">
                                <a href="/DeskHome2">
                                    <div className={'deskProductHolder'}
                                         style={{backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/christieKim.png')})`}}>
                                        {/* <div className={"deskArrowPointer"}>
                    <MdArrowBack size={40} color={"#fff"} />
                  </div> */}
                                        <div className={"deskProductText"}>
                                            <p className={'title'}>Memory Lane</p>
                                            <p className={'info'}>Magnificent air composition in a box gives, so warm
                                                and welcome...</p>
                                            <p className={'price'}>$120.00</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="w-100pr">
                                <a href="/DeskHome2">
                                    <div className={'deskProductHolder'}
                                         style={{backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/oliaGozha.png')})`}}>
                                        <div className={"deskProductText"}>
                                            <p className={'title'}>Sweet & Pink</p>
                                            <p className={'info'}>Light and airy bouquet instantly lifts the mood and
                                                brings to the present summer...</p>
                                            <p className={'price'}>$199.99</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="w-100pr">
                                <a href="/DeskHome2">
                                    <div className={'deskProductHolder'}
                                         style={{backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/annieSpratt2.png')})`}}>
                                        <div className={"deskProductText"}>
                                            <p className={'title'}>Sweetheart</p>
                                            <p className={'info'}>A box of flowers is a good gift idea for any occasion.
                                                Every girl loves flowers...</p>
                                            <p className={'price'}>$150.00</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='col-md-12 col-sm-12 col-xs-12 desk-footer w-100pr'>
                    <div class='col-md-11 col-sm-9 col-xs-12'>
                        <div class=''>
                            <p class='desk-footer-text mb-0 pull-right'>(c) 2019. All rights reserved</p>
                        </div>
                        <div class=''>
                            <p class='desk-footer-text mb-0 pull-right brdr-right'>Terms&Conditions</p>
                        </div>
                        <div class=''>
                            <p class='desk-footer-text mb-0 pull-right brdr-right'>Privacy Policy</p>
                        </div>
                    </div>
                    <div class='col-md-1 display-inline-box'>
                        <div class='p-0-10'>
                            <Instagram size={24} color={"#efc368"}/>
                        </div>
                        <div class='p-0-10'>
                            <Facebook size={20} color={"#efc368"}/>
                        </div>
                        <div class='p-0-10'>
                            <Twitter size={20} color={"#efc368"}/>
                        </div>
                        <div class='p-0-10'>
                            <Linkedin size={20} color={"#efc368"}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeskHome1
