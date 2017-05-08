import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';

const App = () =>
(
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Home}/>
    </div>
  </Router>
);

export default App;
