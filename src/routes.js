import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import FilterPage from 'pages/FilterPage';
import Horarios from 'pages/Horarios';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/filter" component={FilterPage} />
      <Route path="/horarios" component={Horarios} />
    </Switch>
  );
}

export default Routes;
