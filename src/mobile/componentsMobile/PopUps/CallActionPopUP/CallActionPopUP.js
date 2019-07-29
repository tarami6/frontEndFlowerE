import React from 'react'
import Zoom from 'react-reveal/Fade';

import Close from "react-icons/lib/md/clear";

const CallActionPopUP = (props) => {
    return (

        <Zoom duration={1000}>
            <div className={'callActionPopUP'}>

                <div className={'callPopUp'}>
                    <div onClick={() => props.exit()} className={'exitPopUp'}>
                        <Close size={20} color={"#000"} />
                    </div>
                    <div className={'popUpTextHolder'}>
                        <p>אנו שמחים שהחלטתם להזמין עם זר ביד, בחרו אחת מהאפשרויות ההזמנה הבאות</p>
                    </div>
                    <div className={'buttonsHolder'}>
                        <div className={'callToButton'} onClick={() => props.eventGA("Phone", "Phone pressed", props.page)}>
                            <a lassName={'callToButton'} href="tel:0546712717" target="_blank" >חייג </a>
                        </div>
                        <div className={'separatorCallButton'}/>
                        <div className={'whatUpButton'} onClick={() => props.eventGA("WhatsUpButton", "WhatsUpButton button pressed", props.page)}>
                            <a  href="https://wa.me/+972546712717/?text=שלום אני רוצה להזמין זר" >WhatsApp</a>
                        </div>
                    </div>
                </div>

            </div>
        </Zoom>

    )
}

export default CallActionPopUP
