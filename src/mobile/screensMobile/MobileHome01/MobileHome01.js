import React, {Component} from 'react';
import '../Mobile.css'
import './MobileHome.css';
import {Link} from 'react-router-dom';


import Slider from "react-slick";
import ActionToCall from '../../componentsMobile/ActionToCall/ActionToCall'
import Footer from '../../componentsMobile/Footer/Footer'

import sliderTuBeav from "../../assetsMobile/imagesMobile/sliderHomePage/toBeAv.jpg";
import goodService from "../../assetsMobile/imagesMobile/sliderHomePage/goodService.jpg"
import fstDelivery from "../../assetsMobile/imagesMobile/sliderHomePage/fstDelivery.jpg"
import womanSmileMission from "../../assetsMobile/imagesMobile/sliderHomePage/womanSmileMission.jpg";
import mobileLogo from "../../assetsMobile/mobileLogo.png";


import Whatsapp from "react-icons/lib/fa/whatsapp";
import Smile from "react-icons/lib/fa/smile-o";

// produts
import {bottomIcons, flowersMobile} from '../../../services/Const/const';


class MobileHome01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: flowersMobile,
            showButton: false
        }
    }

    componentDidMount() {
        console.log("MobileHome01 componentDidMount ", this.state.products)
        this.props.pageView("MobileHome")
        window.addEventListener('scroll', this.addActionButton)

    }

    addActionButton= () => {
        console.log("YYY",window.pageYOffset)
        let y = window.pageYOffset
        if(y > 150 && !this.state.showButton){
            this.setState({showButton:true})
        }
        console.log("stt", this.state)

    }


    productItem = () => {
        let products = this.state.products.map(product => {
            let {image, name, price} = product
            console.log("product", product)
            return (
                <div key={Math.random()} className=" w-50pr" onClick={() => {this.props.eventGA("Flower pressed",name,"Home Page Mobile")}}>
                    <Link to={{pathname: '/productPage', state: {productInfo: product }}}>
                        <div className={'productHolder'}
                             style={{backgroundImage: `url(${image})`}}>
                            <div className={"productText"}>
                                <p className={'buquetNameText'}>{name}</p>
                                <p className={'buquetPriceText'}>{price} ש"ח </p>
                            </div>
                        </div>
                    </Link>
                </div>

            )
        })
        console.log("product", products)
        return (
            <div className="productsContents">
                {products}
            </div>
        )
    }

    bottomIcons = () => {
        let icons = bottomIcons.map(icon => {
            return (
                <div key={Math.random()} className={"bottomIconsImageContainer"}>
                    <img src={icon.image} className={"bottomIconsImage"} alt=""/>
                    <p className={"iconTitle lightGreyColor"}>{icon.title}</p>
                </div>
            )
        })
        return (
            icons
        )
    }



    render() {
        console.log("this.props", this.props)
        const settings = {
            dots: true,
            speed: 700,
            className: "Slider",
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: false
        };

        return (
            <div>
                <div>
                    <Slider {...settings}>
                        <div onClick={() => console.log("clicked")} className={'slideHolder'}>
                            <img src={sliderTuBeav} alt="MakeHerHappy" className={'sliderImage'}/>
                        </div>
                        <div onClick={() => console.log("clicked")} className={'slideHolder'}>
                            <img src={goodService} alt="MakeHerHappy" className={'sliderImage'}/>
                        </div>
                        <div onClick={() => console.log("clicked")} className={'slideHolder'}>
                            <img src={fstDelivery} alt="MakeHerHappy" className={'sliderImage'}/>
                        </div>
                        <div onClick={() => console.log("clicked")} className={'slideHolder'}>
                            <img src={womanSmileMission} alt="MakeHerHappy" className={'sliderImage'}/>
                        </div>
                    </Slider>
                    <div onClick={() => console.log("clicked")} className={'mobileLogoContainer'}>
                        <img src={mobileLogo} alt="zerbayad Logo" className={'mobileLogo'}/>
                    </div>
                    <div className="mt-20">
                        {this.productItem()}
                    </div>
                    <div className={"textComInfo01"} onClick={() => this.props.eventGA("CallToAction", "Whats button more flowers", "MobileHomePage")}>
                        <h4 >
                            <a className={'lightGreyColor'}href="https://wa.me/+972546712717/?text=שלום אני רוצה להזמין זר">
                                ניתן לראות זרים נוספים
                                <Whatsapp size={40} color={"#fff"} className={"whatspIconCircle"}/>
                            </a>
                        </h4>
                    </div>
                    <div className={'bottomIconsContainer'}>
                        {
                            this.bottomIcons()
                        }
                    </div>
                    <div className={"textComInfo"}>
                        <h4 className={"title01"}>הזמנת פרחים בקליק עם זר ביד</h4>
                        <p className={"textComInfoPargraphOrderOnline greyFont"}>
                            אין מקום טוב יותר להזמין באינטרנט פרחים מאשר עם zerbayad.co.il. בין אם אתם מחפשים לקנות
                            פרחים
                            ומתנות כמו ורדים, סחלבים, סלסלות מתנה, עצי בונסאי, צמחים פורחים או זרי חתונה.
                            <br/>
                            <br/>
                            לנו יש את
                            הפריחה היפה ביותר ואת המשזרים המוכשרים ביותר שיכולים ליצור בדיוק מה שאתם רוצים. לסנוור ולשמח
                            את יקיריכם בכל רגע ובכל מקום עם זרים מקוריים, ומתנות מבית zerbayd.
                        </p>
                        <br/>
                        <h4 className={"title01"}>משלוח פרחים מהיר ושירות לקוחות מדהים</h4>
                        <p className={"textComInfoPargraphOrderOnline greyFont"}>
                            משלוח פרחים באותו יום זמין בכל יום ובכל מקום, לכל עונות השנה: באביב, בחורף, בקיץ ובסתיו. כדי
                            לשלוח
                            פרחים למסירה באותו יום, כל שעליכם לעשות הוא לבצע את ההזמנה.
                            <br/><br/>
                            צוות שירות הלקוחות שלנו עומד
                            לשירותכם על מנת לעזור לכם עם כל מתנה או הזמנת פרחים. בין אם אתם שולחים ורדים אדומים באהבה,
                            או
                            מתנה ליום הולדת, אנחנו לשירותכם...
                            <br/><br/>
                            אנו נעזור לכם למצוא ולספק את הפרחים המושלמים, הצמחים או המתנות כדי לחגוג את הרגעים
                            המשמעותיים ביותר של החיים - החל מהמלצות של מתנות יום ההולדת, ועד לסדורי פרחים של חתונה או
                            יום נישואים
                            שהיא בטוח תאהב.
                            <br/><br/>
                            לקבלת מתנות אהדה ופרחים להלוויה, הצוות שלנו מונה יועצי סימפטיה מנוסים שמוכנים לסייע
                            לכם בכל רגע נתון.
                        </p>
                    </div>
                    <div className={'forUServiceTextContainer'}>
                        <p className={'serviceTitle lightGreyColor'}> אנחנו לשירותכם <Smile size={30}
                                                                                            color={"#c0c0c0"}/></p>
                    </div>
                    {
                        this.state.showButton &&
                        <ActionToCall page={"HomePageMobile"} homePage={true} eventGA={this.props.eventGA}/>
                    }
                </div>
               <Footer page={"HomePageMobile"} eventGA={this.props.eventGA} />
            </div>
        )
    }
}

export default MobileHome01;
