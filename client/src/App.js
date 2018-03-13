import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Dish from './components/Dish';
import NavBar from './components/NavBar';

import NoMatch from './components/NoMatch';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Menu" component={Menu} />
      <Route path="/menus/:id" component={Dish} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default App;
