import React, {Component} from 'react';
import {Route, Router} from 'react-router-dom';

import MobileHome01 from './mobile/screensMobile/MobileHome01/MobileHome01';
import ProductPage from './mobile/screensMobile/ProductPage/ProductPage';
import DeskHome from './desktop/screensDesktop/DeskHome/DeskHome';
import DeskHome1 from './desktop/screensDesktop/DeskHome1/DeskHome1';
import DeskHome2 from './desktop/screensDesktop/DeskHome2/DeskHome2';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';
import smoothscroll from 'smoothscroll-polyfill';
import {createBrowserHistory} from "history";

const options = {
    autoConfig: true, 	// set pixel's autoConfig
    debug: false, 		// enable logs
};
const advancedMatching = {  };



const history = createBrowserHistory()

function initializeReactGA() {
    ReactGA.initialize('UA-141866567-1');

}

function Event(category, action, label) {
    ReactGA.event({
        category: category,
        action: action,
        label: label
    });
}


function PageView(page){
    ReactGA.pageview(page);
}

ReactPixel.init('2856091371283259', {}, { debug: true, autoConfig: false });
ReactPixel.pageView();
ReactPixel.fbq('track', 'PageView');

const Product = (props) => {
    return <ProductPage {...props} pageView={PageView} eventGA={Event} />
}

class Routes extends Component {
    constructor(props) {
        super(props)
        this.state = {width: 0, height: 0};
    }

    componentWillMount() {
        initializeReactGA()
        this.updateWindowDimensions();
        smoothscroll.polyfill();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    render() {
        console.log("history",history)
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" render={() => {
                        if (this.state.width > 501)
                            return <DeskHome1 eventGA={Event} />
                        return <MobileHome01 pageView={PageView} eventGA={Event} />
                    }}/>
                    <Route path="/deskHome" component={DeskHome} eventGA={Event}/>
                    <Route path="/deskHome1" component={DeskHome1} eventGA={Event}/>
                    <Route path="/deskHome2" component={DeskHome2} eventGA={Event}/>
                    <Route path="/productPage" component={Product} />
                </div>
            </Router>
        )
    }
}

export default Routes;
