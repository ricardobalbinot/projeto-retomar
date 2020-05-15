import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import FilterPage from 'pages/FilterPage';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/filter" component={FilterPage} />
    </Switch>
  );
}

export default Routes;
