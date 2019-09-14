import React, {Fragment} from 'react'
import {withRouter} from 'react-router-dom';

import './DeskProductPage.css'
import {flowersMobile} from "../../../services/Const/const";
import Phone from 'react-icons/lib/fa/phone';
import Instagram from 'react-icons/lib/fa/instagram';
import Facebook from 'react-icons/lib/fa/facebook';
import Linkedin from 'react-icons/lib/fa/linkedin';
import Twitter from 'react-icons/lib/fa/twitter';
import MdArrowBack from "react-icons/lib/md/arrow-forward";

class DeskProductPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productNum: '',
        }
    }

    componentWillMount() {
        console.log("DeskProductPage this.props", this.props)
        this.setState({
            productNum: this.props.match.params.product
        })
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        console.log("DeskProductPage", this.props)
        let {name, story, description, productSlider, sell, procentege, priceSizes, category} = flowersMobile[this.state.productNum];

        return (
            <div className={'deskHome'}>
                <div className={'back-btn-div p-22-0 '} style={{paddingRight: '10px'}}>
                    <button
                        onClick={() => this.props.renderedFromApp ? this.props.history.goBack() : window.location.replace("https://zerbayad.co.il/")}
                        className={'pull-left back-btn'}>
                        <MdArrowBack size={35} color={"#895ECC"}/>
                    </button>
                </div>
                <div class='col-md-12 p-0'>
                    <div class="col-md-6 p-0">
                        <div id="myCarousel" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                {
                                    productSlider && productSlider.map((x, index) => {
                                        if (index === 0) {
                                            return (
                                                <li data-target="#myCarousel" data-slide-to={index} className="active"/>
                                            )
                                        }
                                        return (<li data-target="#myCarousel" data-slide-to={index}/>)
                                    })
                                }

                            </ol>
                            <div class="carousel-inner">
                                {
                                    productSlider && productSlider.map((pic, index) => {
                                        if (index == 0)
                                            return (
                                                <div className="item active">
                                                    <div>
                                                        <img src={pic} alt={description} className="desk2SliderImg"/>
                                                    </div>
                                                </div>
                                            )
                                        return (
                                            <div className="item">
                                                <div>
                                                    <img src={pic} alt={description} className="desk2SliderImg"/>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left desk2-slide-btn"/>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right desk2-slide-btn"/>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class='col-md-11 display-inline-box mt-50'>
                            <div class=''>
                                <p class='phone-text1'>972-054-229-1101+</p>
                                <p class='phone-text1'>054-2291101</p>
                            </div>
                            <div onClick={() => this.props.openChat()} class='phone-icon-div'>
                                <Phone size={24} color={"#efc368"}/>
                            </div>
                        </div>
                        <div class='col-md-12 p-0-5vw'>
                            <p class='desk2-title'>{name}</p>
                            <p class='desk2-title-text'>{description}</p>
                        </div>
                        <div class='col-md-12 p-0-5vw '>
                            <p class='desk2-info'>
                                {story}
                            </p>
                        </div>
                        <div className={'col-md-12 mt-70 p-0-5vw'}>
                            {
                                priceSizes.map((price, index) => {
                                    let size = category === 'pot' ? ["ענף 1 ", "2 ענפים", "3 ענפים"] : ['רגיל', 'גדול (*בתמונה)', 'ענק']
                                    return (
                                        <Fragment key={price}>
                                            {
                                                sell ?
                                                    <div
                                                        className={index === 1 ? 'priceCategoryHolder' : 'priceCategoryHolder currentPriceHolder'}>
                                                        <p className={' price-textDesk '}>
                                                            {size[index]}
                                                        </p>
                                                        <p className={'pl-4vw  m-0 price-text mb-5'}>
                                                            {price * procentege} ₪ <span
                                                            className={'sellPriceStrike'}><strike>{price}</strike></span>
                                                        </p>

                                                    </div>

                                                    :
                                                    <div
                                                        className={index === 1 ? 'priceCategoryHolder' : 'priceCategoryHolder currentPriceHolder'}>
                                                        {priceSizes.length > 1 &&
                                                        <p className={' price-textDesk '}>
                                                            {
                                                                price.length ? size[index] : ''
                                                            }
                                                        </p>}
                                                        <p className={'pl-4vw pr-4vw m-0 price-text mb-5'}>
                                                            { price.length ? `${price} ₪` : ''}

                                                        </p>
                                                    </div>
                                            }
                                        </Fragment>

                                    )
                                })
                            }
                        </div>
                        <div className='col-md-12 col-md-12 p-0-5vw mt-70 display-flex mb-70'>
                            <button onClick={() => this.props.openChat()} className={'desk2-order-now-btn'}>הזמנה
                            </button>
                        </div>
                    </div>
                </div>
                <div class='col-md-12 col-sm-12 col-xs-12 desk-footer'>
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

export default withRouter(DeskProductPage)
