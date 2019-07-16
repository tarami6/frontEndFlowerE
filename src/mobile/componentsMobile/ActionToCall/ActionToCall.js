import React, {Component} from 'react';

import CallButton from '../../componentsMobile/CallButton/CallButton.js'
import CallActionPopUP from '../../componentsMobile/PopUps/CallActionPopUP/CallActionPopUP'

class ActionToCall extends Component {
    constructor(props) {
        super(props)
        this.state = {
            callToActionPopUp: false,
        }
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


    render() {
        let showPopUp = this.state.callToActionPopUp

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
                            <button   className={'buy-now-btn'}> קניה</button>
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
