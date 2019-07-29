import React, {Component} from 'react';

import CallButton from '../../componentsMobile/CallButton/CallButton.js'
import CallActionPopUP from '../../componentsMobile/PopUps/CallActionPopUP/CallActionPopUP'

class ActionToCall extends Component {
    constructor(props) {
        super(props)
        this.state = {
            callToActionPopUp: false,
            showButton: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.addActionButton)
    }

    callAction = (action, button, page) => {
        console.log("callAction")
        this.setState({callToActionPopUp: true})
        this.props.eventGA(action, button, page)
    }

    exitPopUp = () => {
        console.log("exitPopUp")
        this.setState({callToActionPopUp: false})
    }

    addActionButton = () => {
        console.log("YYY", window.pageYOffset)
        let y = window.pageYOffset
        if (y > 150 && !this.state.showButton) {
            this.setState({showButton: true})
        }
        console.log("stt", this.state)
    }


    render() {
        let showPopUp = this.state.callToActionPopUp
        let showMe = this.state.showButton
        console.log("showMe",showMe)
        if(!showMe) return null
        return (
            <div>
                {
                    this.props.homePage ?
                    <CallButton
                        page={this.props.page}
                        onPress={this.callAction}
                    />
                    :
                        <div onClick={() => this.callAction("CallToAction", "BuyButton", this.props.page)} >
                            <button   className={'buy-now-btn'}>להזמנה</button>
                        </div>
                }
                {showPopUp &&
                <CallActionPopUP
                    page={this.props.page}
                    eventGA={this.props.eventGA}
                    exit={this.exitPopUp}
                />
                }
            </div>
        );
    }
}

export default ActionToCall;
