import React from 'react'
import Phone from 'react-icons/lib/fa/phone';


const CallButton = (props) => {
    return (
            <div onClick={() => props.onPress()} className={'callButtonContainer'}>
                <Phone size={30} color={'#fff'}/>
            </div>
    )
}

export default CallButton
