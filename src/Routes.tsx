import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import Home from './dashboard';
import Leaderboard from './leaderboard';

export default (): React.ReactElement => (
  <Switch>
    <Route exact path="/sign-up" component={SignUp} />
    <Route exact path="/leaderboards" component={Leaderboard} />
    <Route exact path="/" component={Home} />
    <Route exact path="/sign-in" component={SignIn} />
  </Switch>
);
