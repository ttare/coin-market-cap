import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Header from './components/Header';
import CurrencyList from './screens/list'
import Settings from './screens/settings'


class App extends Component {
  render() {
    const {currency} = this.props.app;
    return (
      <Router>
        <div>
          <Header currency={currency} />
          <div className="container">
            <Route exact path="/" component={CurrencyList}/>
            <Route path="/settings" component={Settings}/>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(App);
