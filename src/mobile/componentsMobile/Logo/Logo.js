import React from 'react'
import mobileLogo from "../../assetsMobile/mobileLogo.png";

const Logo = () => {
    return (
        <div  className={'mobileLogoContainer'}>
            <img src={mobileLogo} alt="zerbayad Logo" className={'mobileLogo'}/>
        </div>
    )
}

export default Logo
