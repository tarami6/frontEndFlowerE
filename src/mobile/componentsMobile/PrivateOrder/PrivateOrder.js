import React from "react";
import ActionToCall from "../../componentsMobile/ActionToCall/ActionToCall";

const PrivateOrder = (props) => {
    return (
        <div className={'privateOrderConteiner'}>
            <p className={'privateOrderText'}>הזמנת זר בעיצוב אישי</p>
            <p className={'privateOrderText'}>בתקציב שלך</p>
            <p className={'privateOrderTextInto'}>אנחנו נעצב לך זר לפי התקציב שלך, לפני שהזר ישלח אנחנו
                נשלח לך תמונה של הזר כדי לקבל את האישור שלך... </p>
            <ActionToCall show={true} title={"להזמנה"} page={"HomePageMobile"} homePage={false} eventGA={props.eventGA}/>
        </div>
    )
}

export default PrivateOrder
