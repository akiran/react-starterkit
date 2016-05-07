import React from 'react';
import { Route, Router, browserHistory } from 'react-router';
import App from 'shared/components/App';
import About from 'shared/components/About';

const routes = <Route path="/" component={App}>
    <Route path="about" component={About}></Route>
  </Route>

export default routes;
