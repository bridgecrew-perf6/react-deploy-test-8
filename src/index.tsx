import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Globalstyle from './themes/GlobalStyle';

render(
  <React.StrictMode>
    <Globalstyle />
    <App />
  </React.StrictMode>,
  document.querySelector('#root'),
);
