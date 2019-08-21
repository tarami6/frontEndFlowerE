import React from 'react';
import './App.css';
import Routes from './routes';
import HttpsRedirect from 'react-https-redirect';
import LiveChat from 'react-livechat'

class App extends React.Component {

    render() {
        return (
            <HttpsRedirect>
                <div className="App">
                    <Routes/>
                    <LiveChat license={11218937} />
                </div>
            </HttpsRedirect>

        )
    }
}

export default App;

// "start": "serve -s build",
