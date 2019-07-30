import React ,{Fragment} from 'react'
import {Link} from "react-router-dom";

const ProductItem = (props) => {
    let products = props.products.map(product => {
        let {image, name, price, description, sell, procentege, sells} = product
        let d = new Date();
        let day = d.getDay()
        let sellWeek = day * 0.5 * sells
        console.log("product", product)
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
                                            <p className={'buquetPriceText'}>{price * procentege} ש"ח </p>
                                            <p className={'buquetPriceTextSell'}><strike>{price} </strike> </p>
                                        </Fragment>
                                        :
                                        <p className={'buquetPriceText'}>{price} ש"ח </p>
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
    console.log("product", products)
    return (
        <div className="productsContents">
            {products}
        </div>
    )
}

export default ProductItem;
