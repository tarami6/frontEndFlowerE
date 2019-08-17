import React, {Component} from 'react';
import '../Mobile.css'
import {Link} from "react-router-dom";
import Footer from '../../componentsMobile/Footer/Footer'


import imageAziz from '../../assetsMobile/imagesMobile/productPage/orchidSlider01.jpg'
import MdArrowBack from 'react-icons/lib/md/arrow-forward';
import {azizimMobile} from "../../../services/Const/const";
import ProducttItem from "../../componentsMobile/ProductItem/ProductItem";
import Logo from "../../componentsMobile/Logo/Logo";
import Event from "../../../services/Const/functions"


class Pot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: azizimMobile,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        console.log("componentDidMount")
    }

    render() {
        return (
            <div>
               <div className={'potPageFirstContainer'}
                   style={{backgroundImage: `url(${imageAziz})`}} >
                   <div className={'back-btn-div p-22-0'}>
                       <button onClick={this.props.history.goBack} className={'pull-left,  back-btn'}>
                           <MdArrowBack size={25} color={"#efc368"}/>
                       </button>
                   </div>
               </div>
                <Logo/>
                <div className="mt-20">
                    <ProducttItem pot={true} products={this.state.products} eventGA={Event}/>
                </div>

                <Footer page={"HomePageMobile"} eventGA={this.props.eventGA}/>
            </div>
        )
    }
}

export default Pot;
