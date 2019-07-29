import React from 'react'
import {Link} from "react-router-dom";

const ProductItem = (props) => {
    let products = props.products.map(product => {
        let {image, name, price} = product
        console.log("product", product)
        return (
            <div key={Math.random()} className=" w-50pr" onClick={() => {
                props.eventGA("Flower pressed", name, "Home Page Mobile")
            }}>
                <Link to={{pathname: '/productPage', state: {productInfo: product}}}>
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

export default ProductItem;
