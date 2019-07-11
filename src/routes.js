import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import MobileHome from './mobile/screensMobile/MobileHome/MobileHome';
import MobileHome01 from './mobile/screensMobile/MobileHome01/MobileHome01';
import MobileHome02 from './mobile/screensMobile/MobileHome02/MobileHome02';
import DeskHome from './desktop/screensDesktop/DeskHome/DeskHome';
import DeskHome1 from './desktop/screensDesktop/DeskHome1/DeskHome1';
import DeskHome2 from './desktop/screensDesktop/DeskHome2/DeskHome2';
import ReactGA from 'react-ga';
import smoothscroll from 'smoothscroll-polyfill';
import { createBrowserHistory } from "history";

const history = createBrowserHistory()

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

class Routes extends Component {
  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0 };
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
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={
            this.state.width > 501
              ?
              DeskHome1
              :
              MobileHome01
          } />
          <Route path="/deskHome" component={DeskHome} />
          <Route path="/deskHome1" component={DeskHome1} />
          <Route path="/deskHome2" component={DeskHome2} />
          <Route path="/mobileHome" component={MobileHome} />
          <Route path="/mobileHome01" component={MobileHome01} />
          <Route path="/mobileHome02" component={MobileHome02} />
        </div>
      </Router>
    )
  }
}
export default Routes;