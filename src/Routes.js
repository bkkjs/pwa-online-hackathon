import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './components/Home';
import Rules from './components/Rules';
import Nav from './components/Nav';

const App = () =>
(
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Home}/>
      <Route exact path="/rules" component={Rules}/>
    </div>
  </Router>
);

export default App;
