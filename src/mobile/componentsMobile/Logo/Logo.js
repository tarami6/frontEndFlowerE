import React from 'react'
import mobileLogo from "../../assetsMobile/mobileLogo.png";

const Logo = (props) => {
    return (
        <div  className={props.class ? props.class : 'mobileLogoContainer'}>
            <img src={mobileLogo} alt="zerbayad Logo" className={'mobileLogo'}/>
        </div>
    )
}

export default Logo
