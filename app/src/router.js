import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import MainLayout from './containers/MainLayout';
import Home from './components/Home';
import QuestionsList from './components/QuestionsList';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>

      <Route path="/" component={Home}/>
      <Route path="/questions" component={QuestionsList}/>


    </Route>
  </Router>
)
