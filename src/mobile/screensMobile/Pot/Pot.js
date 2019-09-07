import React, {Component} from 'react';
import '../Mobile.css'
import {withRouter} from "react-router-dom";
import Footer from '../../componentsMobile/Footer/Footer'


import imageAziz from '../../assetsMobile/imagesMobile/productPage/orchidSlider01.jpg'
import MdArrowBack from 'react-icons/lib/md/arrow-forward';
import {azizimMobile} from "../../../services/Const/const";
import ProducttItem from "../../componentsMobile/ProductItem/ProductItem";
import Logo from "../../componentsMobile/Logo/Logo";
import Event from "../../../services/Const/functions"
import ActionToCall from "../../componentsMobile/ActionToCall/ActionToCall";


class Pot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: azizimMobile,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        console.log("componentDidMount", this.props)
    }

    render() {
        return (
            <div>
               <div className={'potPageFirstContainer'}
                   style={{backgroundImage: `url(${imageAziz})`}} >
                   <div className={'back-btn-div p-22-0'}>
                       <button onClick={() => this.props.renderedFromApp ? this.props.history.goBack() :  window.location.replace("https://zerbayad.co.il/")} className={'pull-left,  back-btn'}>
                           <MdArrowBack size={25} color={"#895ECC"}/>
                       </button>
                   </div>
               </div>
                <Logo/>
                <div className="mt-20, productItemHolder">
                    <ProducttItem pot={true} products={this.state.products} eventGA={Event}/>
                </div>
                <ActionToCall
                    show={false}
                    page={"HomePageMobile"}
                    homePage={true}
                    eventGA={Event}
                />
                <Footer page={"HomePageMobile"} eventGA={this.props.eventGA}/>
            </div>
        )
    }
}

export default withRouter(Pot)
