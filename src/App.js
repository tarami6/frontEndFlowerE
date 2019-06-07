import React from 'react';
import './App.css';
import MobileHome from './mobile/screensMobile/MobileHome/MobileHome'
import DeskHome from './desktop/screensDesktop/DeskHome/DeskHome'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {width: 0, height: 0};
    }

    componentWillMount() {
        this.updateWindowDimensions();
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
                        <MobileHome/>

                }
            </div>
        )
    }
}

export default App;
