import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
// import PostingPage from './pages/PostingPage';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={MainPage} exact />
        {/* <Route path='/post' component={DetailPage} exact  /> */}
        {/* <Route path='/post/:id' component={PostingPage} /> */}
      </Switch>
    </Router>
  );
}

export default Routes;
