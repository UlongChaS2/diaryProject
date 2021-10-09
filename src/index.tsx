import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import Routes from './Routes';
import GlobalStyles from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import mixin from 'styles/mixin';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <ThemeProvider theme={{ ...mixin }}>
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
