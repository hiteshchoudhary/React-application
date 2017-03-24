import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import NoMatch from './NoMatch';
import Fourpointone from './Fourpointone';
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path="/One" component={One}></Route>
    <Route path="/Two" component={Two}></Route>
    <Route path="/Three" component={Three}></Route>
    <Route path="/Four" component={Four}>
      <Route path="/Four/:id" component={Fourpointone} />
    </Route>
    <Route path="*" component={NoMatch}></Route>

  </Router>




,
  document.getElementById('root')
);
