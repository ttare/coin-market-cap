import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Header from './components/Header';
import CurrencyList from './screens/list'
import Settings from './screens/settings'


class App extends Component {
  render() {
    const {currency} = this.props;
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
  currency: state.app.currency
});

export default connect(mapStateToProps)(App);
