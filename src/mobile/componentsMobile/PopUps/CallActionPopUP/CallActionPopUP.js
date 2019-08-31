import React from 'react'
import Zoom from 'react-reveal/Fade';
import Phone from 'react-icons/lib/fa/phone';
import WhatsApp from 'react-icons/lib/fa/whatsapp';

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
                            <a className={'callToButton'} href="tel:0546712717"  > חייג  <Phone size={20} color={"#efc368"} style={{marginRight: 5}} /> </a>
                        </div>
                        <div className={'separatorCallButton'}/>
                        <div className={'whatUpButton'} onClick={() => props.eventGA("WhatsUpButton", "WhatsUpButton button pressed", props.page)}>
                            <a  href="https://wa.me/+972546712717/?text=שלום אני רוצה להזמין זר" ><WhatsApp size={20} color={"darkgreen"} style={{marginLeft: 5}} /> WhatsApp </a>
                        </div>
                    </div>
                </div>

            </div>
        </Zoom>

    )
}

export default CallActionPopUP
