import React from 'react';
import './App.css';
import MobileHome from './mobile/screensMobile/MobileHome/MobileHome'
import MobileHome01 from './mobile/screensMobile/MobileHome01/MobileHome01'
import DeskHome from './desktop/screensDesktop/DeskHome/DeskHome'
import ReactGA from 'react-ga';
import smoothscroll from 'smoothscroll-polyfill';
import HttpsRedirect from 'react-https-redirect';

function initializeReactGA() {
    ReactGA.initialize('UA-141866567-1');
    ReactGA.pageview('/homepage');
}

function Event(category, action, label) {
    ReactGA.event({
        category: category,
        action: action,
        label: label
    });
}

class App extends React.Component {
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
        console.log('App render this.state', this.state)

        return (
                <div className="App">
                    {
                        this.state.width > 501
                            ?
                            <DeskHome/>
                            :

                            <MobileHome01 />
                    }
                </div>
        )
    }
}

export default App;
{/*<MobileHome eventGA={Event}/>*/}
