import React from 'react'
import Zoom from 'react-reveal/Fade';

const CallActionPopUP = (props) => {
    return (
        <Zoom duration={1000}>
            <div className={'callActionPopUP'}>

                <div className={'callPopUp'}>
                    <div onClick={() => props.exit()} className={'exitPopUp'}>
                        <p>X</p>
                    </div>
                    <div className={'popUpTextHolder'}>
                        <p>להזמנה</p>
                    </div>
                    <div className={'buttonsHolder'}>
                        <div className={'callToButton'} onClick={() => props.eventGA("CallButton", "Call button pressed", "HOME_PAGE_MOBILE")}>
                            <a href="tel:0547574737">חייג </a>
                        </div>
                        <div className={'separatorCallButton'}/>
                        <div className={'whatUpButton'} onClick={() => props.eventGA("WhatsUpButton", "WhatsUpButton button pressed", "HOME_PAGE_MOBILE")}>
                            <a href="whatsapp://send?text=שלום :) &phone=+972547574737">WhatsApp</a>
                        </div>
                    </div>
                </div>

            </div>
        </Zoom>

    )
}

export default CallActionPopUP
