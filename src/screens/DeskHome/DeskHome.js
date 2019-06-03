import React, {Fragment} from 'react'
import './DeskHome.css'
import logo from '../../assets/imagesDesk/DesktopLogo'
import zer from '../../assets/imagesDesk/zerMazimaSheli.jpg'

import {flowers} from "../../services/Const/const";


function FirstContainer() {
    // return <animated.div style={props}>I will fade in</animated.div>
    return (
        <div className={'firstDiv'}>
            <img src={logo} alt="" className={'logo'}/>
        </div>
    )
}

class DeskHome  extends React.Component{
    constructor(props){
        super(props)
            this.state = {
                flowers: flowers,
                flowerLoad: false
            }
    }

    render() {
        return(

            <Fragment>
                <div className={'contentContainer'}>
                    <div>
                        <div>
                            <img src={zer} alt=""/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default DeskHome
