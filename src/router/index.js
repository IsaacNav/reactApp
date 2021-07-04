import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from '../views/home';
import Loggin from '../views/loggin';

const history = createBrowserHistory();

const ViewsRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Loggin} />
  </Switch>
);

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={ViewsRoutes} />
      <Route exact path="/login" component={ViewsRoutes} />
    </Switch>
  </Router>
);

export default Routes;
