import React from 'react'
import Zoom from 'react-reveal/Fade';
import Phone from 'react-icons/lib/fa/phone';
import WhatsApp from 'react-icons/lib/fa/whatsapp';

import Close from "react-icons/lib/md/clear";
import buquetOfTheWeekIcon from '../../../assetsMobile/imagesMobile/popUps/buquetOfTheWeekRound.png'
import greatService from '../../../assetsMobile/imagesMobile/popUps/greatService.jpg'
import smile from '../../../assetsMobile/imagesMobile/popUps/smile.jpg'


const CallActionPopUP = (props) => {
    const {category, text} = props.category ? props.category : {}

    let textToCostumer = "חוויית שירות בלתי נשכחת"

    let imgShowTo = greatService
    let alt = "שירות לקוחות זר ביד"
    let titleImg = "חנות פרחים"
    if (category === "FLOWER_OF_THE_WEEK" || category === "FLOWER_BUQUET") {
        imgShowTo = buquetOfTheWeekIcon
        alt = "זר השבוע"
        titleImg = "זר השבוע"
        textToCostumer = "בחירה מעולה"
    }
    switch (category) {
        case "FLOWER_OF_THE_WEEK":
            imgShowTo = buquetOfTheWeekIcon
            alt = "זר השבוע"
            titleImg = "זר השבוע"
            textToCostumer = " בחירה מעולה"
            break;
        case "FLOWER_BUQUET":
            imgShowTo = smile
            alt = "חיוך"
            titleImg = "חיוך"
            textToCostumer = " בחירה מעולה"
            break;

    }

    return (

        <Zoom duration={1000}>
            <div className={'callActionPopUP'}>

                <div className={'callPopUp'}>
                    <div onClick={() => props.exit()} className={'exitPopUp'}>
                        <Close size={20} color={"#b7b7b7"}/>
                    </div>
                    <div className={'popUpImageHolder'}>
                        <img src={imgShowTo} className={'popUpImg'} alt={alt} title={titleImg}/>
                    </div>
                    <div className={'popUpTextHolder'}>
                        <p className={'popUpTitle'}>{textToCostumer} </p>
                        <p className={'popUpDescription howYouOrderText'}>תנו לנציג שלנו לתת לכם שירות אישי</p>
                        <p className={'howYouOrderText'}>איך תרצו להזמין?</p>
                    </div>
                    <div className={'buttonsHolder'}>
                        <div className={'callToButton'}
                             onClick={() => props.eventGA("ContactMade", "Phone pressed", props.page)}>
                            <a className={'callToButton'} href="tel:0546712717"> חייג <Phone size={20}
                                                                                             color={"darkgreen"}
                                                                                             style={{marginRight: 5}}/>
                            </a>
                        </div>
                        <div className={'separatorCallButton'}/>
                        <div className={'whatUpButton'}
                             onClick={() => props.eventGA("ContactMade", "WhatsUpButton button pressed", props.page)}>
                            <a href="https://wa.me/+972546712717/?text=שלום אני רוצה להזמין זר"><WhatsApp size={20}
                                                                                                          color={"darkgreen"}
                                                                                                          style={{marginLeft: 5}}/> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </Zoom>

    )
}

export default CallActionPopUP
