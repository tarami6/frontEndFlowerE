import React ,{Fragment} from 'react'
import {Link} from "react-router-dom";
import PrivateOrder from '../../componentsMobile/PrivateOrder/PrivateOrder'

const ProductItem = (props) => {
    let products = props.products.map((product, index) => {
        let {image, name, price, description, sell, procentege, sells} = product
        let d = new Date();
        let day = d.getDay()
        if(day === 0) day = 0.5
        let sellWeek = Math.round(day * 0.5 * sells)
        if(index === 6) {
            return (
                <Fragment key={Math.random()}>
                    < PrivateOrder eventGA={props.eventGA}/>
                    <div  className=" w-50pr" onClick={() => {
                        props.eventGA("Flower pressed", name, "Home Page Mobile")
                    }}>
                        <Link to={{pathname: '/productPage', state: {productInfo: product}}}>
                            <div className={'productHolder'}
                                 style={{backgroundImage: `url(${image})`}}
                            >
                                <div className={"sellIcon"}>
                                    {sell &&  <p className={'sellTextIcon'}>מבצע</p>}
                                </div>
                                <div className={"productText"}>
                                    <p className={'buquetNameText'}>{name}</p>
                                    <p className={'productTextdescription'}>{description}</p>
                                    <div className={'priceHolder'}>
                                        <div className={'priceHolderText'}>
                                            { sell ?
                                                <Fragment>
                                                    <p className={'buquetPriceText'}>{price * procentege} ₪ </p>
                                                    <p className={'buquetPriceTextSell'}><strike>{price} </strike> </p>
                                                </Fragment>
                                                :
                                                <p className={'buquetPriceText'}>{price} ₪ </p>
                                            }
                                        </div>
                                        <p className={'howManyBuysText'}>השבוע קנו-{sellWeek}</p>
                                    </div>
                                    <div className={'buttonProductHome'} >
                                        <p className={'buttonProductHomeText'}>עוד מידע</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </Fragment>
                )
        }
        return (

            <div key={Math.random()} className=" w-50pr" onClick={() => {
                props.eventGA("Flower pressed", name, "Home Page Mobile")
            }}>
                <Link to={{pathname: '/productPage', state: {productInfo: product}}}>
                    <div className={'productHolder'}
                         style={{backgroundImage: `url(${image})`}}
                        >
                        <div className={"sellIcon"}>
                            {sell &&  <p className={'sellTextIcon'}>מבצע</p>}
                        </div>
                        <div className={"productText"}>
                            <p className={'buquetNameText'}>{name}</p>
                            <p className={'productTextdescription'}>{description}</p>
                            <div className={'priceHolder'}>
                                <div className={'priceHolderText'}>
                                    { sell ?
                                        <Fragment>
                                            <p className={'buquetPriceText'}>{price * procentege} ₪ </p>
                                            <p className={'buquetPriceTextSell'}><strike>{price} </strike> </p>
                                        </Fragment>
                                        :
                                        <p className={'buquetPriceText'}>{price} ₪ </p>
                                    }
                                </div>
                                    <p className={'howManyBuysText'}>השבוע קנו-{sellWeek}</p>
                            </div>
                            <div className={'buttonProductHome'} >
                                    <p className={'buttonProductHomeText'}>עוד מידע</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <div className="productsContents">
            {products}
        </div>
    )
}

export default ProductItem;
