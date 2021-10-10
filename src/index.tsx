import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import mixin from 'styles/mixin';
import App from './App';

ReactDOM.render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={{ ...mixin }}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
