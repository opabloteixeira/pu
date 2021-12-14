import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/global';
import { Store } from './pages';

ReactDOM.render(
  <React.StrictMode>
    <Store />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root'),
);
