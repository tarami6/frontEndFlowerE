import React from 'react';
import {bottomIcons} from '../../../services/Const/const';

const BottomIcons = () => {
    let icons = bottomIcons.map(icon => {
        return (
            <div key={Math.random()} className={"bottomIconsImageContainer"}>
                <p className={"iconTitle lightGreyColor"}><img src={icon.image} className={"bottomIconsImage"} alt=""/>{icon.title}</p>
                <p className={'iconDescription'}>
                    {icon.description}
                </p>
            </div>
        )
    })
    return (
        icons
    )
}

export default BottomIcons;
