import React from 'react'
import whatsUpIcon from "../../assetsMobile/imagesMobile/whatsUpIcon.png";
import FaceBook from "../../assetsMobile/imagesMobile/FaceBook.png";
import Instagram from "../../assetsMobile/imagesMobile/Instagram.png";

const Footer = () => {
    return(
        <div className={'footer'}>
            <div className={'footerContainer'}>
                <h2 className={'footerTitle'}> החוויה שלה<br />  האהבה שלך</h2>
                <p className={'footerStory'}>
                    לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט

                    נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
                </p>
                <div className={'footerSocialMenu'}>
                    <div >
                        <a href="https://www.facebook.com/" >
                            <img src={whatsUpIcon} alt="" className={'socialIconMenu'}/>
                        </a>
                    </div>
                    <div >
                        <a href="https://www.facebook.com/" >
                            <img src={FaceBook} alt="" className={'socialIconMenu'}/>
                        </a>
                    </div>
                    <div >
                        <a href="https://www.facebook.com/" >
                            <img src={Instagram} alt="" className={'socialIconMenu'}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className={'poweredBy'}>
                <a href="idt.co.il" className={'poweredByText'}>Powered By IDT </a>
            </div>
        </div>
    )
}

export default  Footer
