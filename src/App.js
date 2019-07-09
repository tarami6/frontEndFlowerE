import React from 'react';
import './App.css';
import Routes from './routes';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0 };
  }

  render() {
    console.log('App render this.state', this.state)

    return (
      <div className="App">
        <Routes />
      </div>
    )
  }
}

export default App;
{/*<MobileHome eventGA={Event}/>*/ }
