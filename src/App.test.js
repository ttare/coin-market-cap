import React from 'react';
import ReactDOM from 'react-dom';
import Header from './index';

it('renders header without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header currency="USD" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
