import React, {Fragment} from 'react'
import {flowersMobile} from "../../../services/Const/const";
import freshDlowersIcon from "../../../mobile/assetsMobile/imagesMobile/bottomIcons/freshDlowersIcon.png";
import fastDeliveryIcon from "../../../mobile/assetsMobile/imagesMobile/bottomIcons/fastDeliveryIcon.png";
import Item from '../../componentsDesktop/ProductItem/Item/Item'
import Slogen from '../../componentsDesktop/Slogen/Slogen'

const ProductItem = (props) => {
    return(
        flowersMobile.map((product, index) => {
            if (index === 6) {
                return (
                    <Fragment key={index}>
                        <Slogen icon={freshDlowersIcon} title={'זרי פרחים טריים ויפים'} desription={'אנחנו יוצרים את הזרים שלנו עם הפרחים הטריים ביותר בחנות הפרחים שלנו'}/>
                        <Item index={index} product={product}/>
                    </Fragment>
                )
            }
            if (index === 12) {
                return (
                    <Fragment key={index}>
                        <Slogen icon={fastDeliveryIcon} title={'משלוח פרחים מהיר'} desription={'משלוחי פרחים בחיפה, טירת הכרמל, נשר, קריות'}/>
                        <Item index={index} product={product}/>
                    </Fragment>
                )
            }
            return (
                <Fragment key={index}>
                    <Item index={index} product={product}/>
                </Fragment>
            )
        })
    )
}

export default ProductItem
