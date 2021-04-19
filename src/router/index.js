import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from '../views/home';

const history = createBrowserHistory();

const ViewsRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={ViewsRoutes} />
    </Switch>
  </Router>
);

export default Routes;
