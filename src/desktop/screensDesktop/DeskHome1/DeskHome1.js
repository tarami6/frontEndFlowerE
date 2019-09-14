import React, {Fragment} from 'react'
import './DeskHome1.css'
import {flowersMobile} from "../../../services/Const/const";
import zerBayadLogo from "../../../desktop/assetsDesktop/imagesDesk/homeSlider/headerLogo.png";


import Phone from 'react-icons/lib/fa/phone';
import Instagram from 'react-icons/lib/fa/instagram';
import Facebook from 'react-icons/lib/fa/facebook';
import Linkedin from 'react-icons/lib/fa/linkedin';
import freshDlowersIcon from "../../../mobile/assetsMobile/imagesMobile/bottomIcons/freshDlowersIcon.png";
import uniqueDesignIcon from "../../../mobile/assetsMobile/imagesMobile/bottomIcons/uniqueDesign.jpg";
import fastDeliveryIcon from "../../../mobile/assetsMobile/imagesMobile/bottomIcons/fastDeliveryIcon.png";
import {Link} from "react-router-dom";
import {isMobile} from "react-device-detect";


class DeskHome1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flowers: flowersMobile,
            flowerLoad: false
        }
    }

    componentDidMount() {
        this.props.pageRenderedFromApp()
    }

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
                                    <p className='phone-text'>054-2291101</p>
                                </div>
                                <div className='phone-icon-div' onClick={()=>this.props.openChat()}>
                                    <Phone size={24} color={"#eec368"}/>
                                </div>
                            </div>
                        </div>
                        <div className={"homePageFirstScreen"}>
                            <h1>זר ביד כאן תמצאו זרי פרחים מדהימים<br/> ורדים, חמניות, סחלבים ועוד.</h1>
                            <p>לחג, למשרד, לחתונה, או סתם מאהבה</p>
                        </div>
                    </div>
                    <div className={'deskSlogenContainer'}>
                        <div className={'deskSlogenHolder'}>
                            <div className={'deskSlogenIconHolder'}>
                                <img src={uniqueDesignIcon}
                                     className={"bottomIconsImage"} alt=""/>
                            </div>
                            <div className={'deskTextIconHolder'}>
                                <h2 className={"iconTitleDesk lightGreyColor"}>
                                    זר פרחים מדהים וייחודי</h2>
                                <p className={'iconDescription'}>
                                    לרגעים הטובים ביותר בחיים, לחגיגה הכי מדהימה תמיד אפשר לסמוך על זר פרחים כדי לשפר את
                                    הרגע
                                </p>
                            </div>
                        </div>
                    </div>
                    {
                        flowersMobile.map((product, index) => {
                            let {image, name, price, description, sell, procentege, sells} = product
                            let d = new Date();
                            let day = d.getDay()
                            if (day === 0) day = 0.5
                            let sellWeek = Math.round(day * 0.5 * sells)
                            if (index === 6) {
                                return (
                                    <Fragment key={index}>
                                        <div className={'deskSlogenContainer'}>
                                            <div className={'deskSlogenHolder'}>
                                                <div className={'deskSlogenIconHolder'}>
                                                    <img src={freshDlowersIcon}
                                                         className={"bottomIconsImage"} alt=""/>
                                                </div>
                                                <div className={'deskTextIconHolder'}>
                                                    <h2 className={"iconTitleDesk lightGreyColor"}>
                                                        זרי פרחים טריים ויפים</h2>
                                                    <p className={'iconDescription'}>
                                                        אנחנו יוצרים את הזרים שלנו עם הפרחים הטריים ביותר בחנות הפרחים
                                                        שלנו
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to={{pathname: `/productPage/${index}`}}>
                                        <div title={description} className="col-md-4 deskProductContainer">
                                                <div className="w-100pr">
                                                    <div className={'deskProductHolder'}
                                                         style={{backgroundImage: `url(${image})`}}>

                                                        <div className={"sellIconDesk"}>
                                                            {sell &&  <p className={'sellTextIconDesk'}>מבצע</p>}
                                                        </div>
                                                        <div className={"deskProductText"}>
                                                            <div className={'deskProductInfo'}>
                                                                <p className={'title'}>{name}</p>
                                                                <p className={'info'}>{description}</p>
                                                            </div>
                                                            <div className={'deskProductPriceContainer'}>
                                                                {sell ?
                                                                    <div className={'deskPriceHolder'}>
                                                                        <p className={'price'}>{price * procentege} ₪ </p>
                                                                        <p className={'priceSell'}>
                                                                            <strike>{price} </strike>
                                                                        </p>
                                                                    </div>
                                                                    :
                                                                    <p className={'price'}>{price} ₪ </p>
                                                                }
                                                                <p className={'deskHowManyBuysText'}>השבוע
                                                                    קנו-{sellWeek}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                        </Link>
                                    </Fragment>

                                )
                            }
                            if (index === 12) {
                                return (
                                    <Fragment key={index}>
                                    <div className={'deskSlogenContainer'}>
                                            <div className={'deskSlogenHolder'}>
                                                <div className={'deskSlogenIconHolder'}>
                                                    <img src={fastDeliveryIcon}
                                                         className={"bottomIconsImage"} alt=""/>
                                                </div>
                                                <div className={'deskTextIconHolder'}>
                                                    <h1 className={"iconTitleDesk lightGreyColor"}>
                                                        משלוח פרחים מהיר</h1>
                                                    <p className={'iconDescription'}>
                                                        משלוחי פרחים בחיפה, טירת הכרמל, נשר, קריות
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to={{pathname:  `/productPage/${index}`}}>
                                        <div title={description} className="col-md-4 deskProductContainer">

                                                <div className="w-100pr">
                                                    <div className={'deskProductHolder'}
                                                         style={{backgroundImage: `url(${image})`}}>
                                                        <div className={"sellIconDesk"}>
                                                            {sell &&  <p className={'sellTextIconDesk'}>מבצע</p>}
                                                        </div>
                                                        <div className={"deskProductText"}>
                                                            <div className={'deskProductInfo'}>
                                                                <p className={'title'}>{name}</p>
                                                                <p className={'info'}>{description}</p>
                                                            </div>
                                                            <div className={'deskProductPriceContainer'}>
                                                                {sell ?
                                                                    <div className={'deskPriceHolder'}>
                                                                        <p className={'price'}>{price * procentege} ₪ </p>
                                                                        <p className={'priceSell'}>
                                                                            <strike>{price} </strike></p>
                                                                    </div>
                                                                    :
                                                                    <p className={'price'}>{price} ₪ </p>
                                                                }
                                                                <p className={'deskHowManyBuysText'}>השבוע
                                                                    קנו-{sellWeek}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                        </Link>
                                    </Fragment>

                                )
                            }
                            return (

                                <Fragment key={index}>

                                <Link to={{pathname:  `/productPage/${index}`}}>
                                <div title={description} className="col-md-4 deskProductContainer">

                                        <div className="w-100pr">
                                            <div className={'deskProductHolder'}
                                                 style={{backgroundImage: `url(${image})`}}>
                                                <div className={"sellIconDesk"}>
                                                    {sell &&  <p className={'sellTextIconDesk'}>מבצע</p>}
                                                </div>
                                                <div className={"deskProductText"}>
                                                    <div className={'deskProductInfo'}>
                                                        <p className={'title'}>{name}</p>
                                                        <p className={'info'}>{description}</p>
                                                    </div>
                                                    <div className={'deskProductPriceContainer'}>
                                                        {sell ?
                                                            <div className={'deskPriceHolder'}>
                                                                <p className={'price'}>{price * procentege} ₪ </p>
                                                                <p className={'priceSell'}><strike>{price} </strike></p>
                                                            </div>
                                                            :
                                                            <p className={'price'}>{price} ₪ </p>
                                                        }
                                                        <p className={'deskHowManyBuysText'}>השבוע קנו-{sellWeek}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                </Link>

                                </Fragment>
                            )
                        })
                    }

                </div>
                <div class='col-md-12 col-sm-12 col-xs-12 desk-footer w-100pr'>
                    <div class='col-md-11 col-sm-9 col-xs-12'>
                        <div class=''>
                            <p class='desk-footer-text mb-0 pull-right'> 2019. All rights reserved IDT Version:1.1.9</p>
                        </div>

                    </div>
                    <div class='col-md-1 display-inline-box'>
                        <a href="https://www.instagram.com/zerbayad/" target="_blank">
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
