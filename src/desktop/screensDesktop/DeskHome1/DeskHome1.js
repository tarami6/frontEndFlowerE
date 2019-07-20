import React from 'react'
import './DeskHome1.css'
import {flowersMobile} from "../../../services/Const/const";
import zerBayadLogo from "../../../desktop/assetsDesktop/imagesDesk/homeSlider/headerLogo.png";


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
                        <div className={'headerLogoPhone'}>
                            <div className=''>
                                <img src={zerBayadLogo} alt="Los Angeles" className="logoDesktop"/>
                            </div>
                            <div className='phoneHeaderContainer'>
                                <div className="">
                                    <p className='phone-text'>972-054-229-1101+</p>
                                    <p className='phone-text'>05422911011</p>
                                </div>
                                <div className='phone-icon-div'>
                                    <Phone size={24} color={"#eec368"}/>
                                </div>
                            </div>
                        </div>
                        <div className={"homePageFirstScreen"}>
                            <h1>בזר ביד תמצאו זרי פרחים מדהימים<br/> עציצים, סלסלות, ומתנות.</h1>
                            <p>לחג, למשרד, לחתונה, או סתם מאהבה</p>
                        </div>
                    </div>
                    <div>
                        <div className={"contentHolder01"}>
                            <div className='mt-80 mb-70 '>
                                <p className="popular-text">פופולרי</p>
                                <p className="popular-info">
                                    פרחים הם אחת היצירות היפות ביותר של הטבע. הדבר המושלם לביטוי רגשות.
                                </p>

                            </div>
                        </div>

                    </div>

                    <div onClick={() => console.log("clicked")} className='deskSlideHolder col-md-12'>
                        <div class="col-md-4">
                            <div class="w-100pr">
                                    <div className={'deskProductHolder'}
                                         style={{backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/desktopBuquets/flowerBox.jpg')})`}}>

                                        <div className={"deskProductText"}>
                                            <p className={'title'}>אהבה בוערת</p>
                                            <p className={'info'}>סידור ורדים בקופסא</p>
                                            <p className={'price'}>החל מ: 150 ש"ח </p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="w-100pr">
                                    <div className={'deskProductHolder'}
                                         style={{backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/desktopBuquets/flowerBox2.jpg')})`}}>
                                        <div className={"deskProductText"}>
                                            <p className={'title'}>אהבה בוערת</p>
                                            <p className={'info'}>סידור ורדים בקופסא</p>
                                            <p className={'price'}>החל מ: 150 ש"ח </p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="w-100pr">
                                    <div className={'deskProductHolder'}
                                         style={{backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/desktopBuquets/rosesBuquet.jpg')})`}}>
                                        <div className={"deskProductText"}>
                                            <p className={'title'}>תשוקה אינסופית</p>
                                            <p className={'info'}>זר וורדים עשיר</p>
                                            <p className={'price'}>החל מ: 120 ש"ח </p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    {/* ---------------------------------------------------------------------------------- */}
                    <div className={"contentHolder01"}>
                        <div class='col-md-12 mt-80 mb-70 align-content-center'>
                            <p class="popular-text">קלאסי</p>
                            <p class="popular-info">
                                בזר ביד אתם תמצאו מגוון זרי פרחים מדהים וגדול שמתאים לכל אירוע, מימי הולד, יום אהבה,
                                לידה, מתנה למשרד, סידור לחתונה, ולמגוון אירועים נוספים
                            </p>
                        </div>
                    </div>

                    <div onClick={() => console.log("clicked")} className='deskSlideHolder col-md-12'>
                        <div class="col-md-4">
                            <div class="w-100pr">
                                    <div className={'deskProductHolder'}
                                         style={{backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/desktopBuquets/pinkBuquet.jpg')})`}}>
                                        <div className={"deskProductText"}>
                                            <p className={'title'}>נעורים בוורוד</p>
                                            <p className={'info'}>זר גרברות יפייפה</p>
                                            <p className={'price'}>החל מ: 120 ש"ח </p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="w-100pr">
                                    <div className={'deskProductHolder'}
                                         style={{backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/desktopBuquets/sunFlower.jpg')})`}}>
                                        <div className={"deskProductText"}>
                                            <p className={'title'}>טיול בגן</p>
                                            <p className={'info'}>זר חמניות גרברות וליזאנטוס</p>
                                            <p className={'price'}>החל מ: 80 ש"ח </p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="w-100pr">
                                    <div className={'deskProductHolder'}
                                         style={{backgroundImage: `url(${require('../../../desktop/assetsDesktop/imagesDesk/desktopBuquets/purpleBuquet.jpg')})`}}>
                                        <div className={"deskProductText"}>
                                            <p className={'title'}>סגול בטבע</p>
                                            <p className={'info'}>זר שושן צחור ליזאנטוס וחרצית</p>
                                            <p className={'price'}>החל מ: 120 ש"ח </p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='col-md-12 col-sm-12 col-xs-12 desk-footer w-100pr'>
                    <div class='col-md-11 col-sm-9 col-xs-12'>
                        <div class=''>
                            <p class='desk-footer-text mb-0 pull-right'> 2019. All rights reserved IDT</p>
                        </div>

                    </div>
                    <div class='col-md-1 display-inline-box'>
                        <a href="https://www.instagram.com/zerbayad/" target="_blank" >
                            <Instagram size={30} color={"#efc368"}/>
                        </a>
                        <div className={'mr-2vh'}>
                            <a className="mobile" target="_blank"
                               href="https://www.facebook.com/Zerbayad/notifications/">
                                <Facebook size={30} color={"#efc368"}/>
                            </a>
                        </div>
                        <div class='p-0-10'>
                            <Linkedin size={30} color={"#efc368"}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeskHome1
