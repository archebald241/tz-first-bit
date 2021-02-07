import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Elements from './Pages/Elements';


class MainContent extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/elements/:id' component={Elements} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MainContent
