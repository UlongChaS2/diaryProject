import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import mixin from 'styles/mixin';
import Routes from './Routes';

ReactDOM.render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={{ ...mixin }}>
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
