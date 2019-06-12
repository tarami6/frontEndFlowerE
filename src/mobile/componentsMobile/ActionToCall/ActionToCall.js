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

    callAction = () => {
        console.log("callAction")
        this.setState({callToActionPopUp: true})
        this.props.eventGA("Call", "Call button pressed", "HOME_PAGE_MOBILE")
    }

    exitPopUp = () => {
        console.log("exitPopUp")
        this.setState({callToActionPopUp: false})
    }

    render() {
        let showPopUp = this.state.callToActionPopUp
        return (
            <div>
                <CallButton
                    onPress={this.callAction}
                />
                {showPopUp &&
                <CallActionPopUP
                    exit={this.exitPopUp}
                />
                }
            </div>
        );
    }
}

export default ActionToCall;
