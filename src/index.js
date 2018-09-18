import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';
import {CurrencyHelper} from "./utils/helpers";

const initalState = {
  app: {
    currency: CurrencyHelper.getLastSelected(),
    list: []
  }
};
const store = configureStore(initalState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
