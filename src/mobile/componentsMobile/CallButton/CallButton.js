import React from 'react'
import callButton from "../../assetsMobile/imagesMobile/callButton01.png";

const CallButton = (props) => {
    return(
        <div onClick={() => props.onPress()} className={'callButtonContainer'}>
            <img src={callButton} alt="Logo" className={'callButtonContainer'}/>
        </div>
    )
}

export default CallButton
