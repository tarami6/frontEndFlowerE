import React from 'react';
import {bottomIcons} from '../../../services/Const/const';

const BottomIcons = () => {
    let icons = bottomIcons.map(icon => {
        return (
            <div key={Math.random()} className={"bottomIconsImageContainer"}>
                <img src={icon.image} className={"bottomIconsImage"} alt=""/>
                <p className={"iconTitle lightGreyColor"}>{icon.title}</p>
            </div>
        )
    })
    return (
        icons
    )
}

export default BottomIcons;
