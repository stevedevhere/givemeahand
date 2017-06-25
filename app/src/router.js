import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import MainLayout from './containers/MainLayout';

import Home from './components/Home';
import QuestionsList from './components/QuestionsList';
import QuestionItem from './components/QuestionItem';
import AddQuestion from './components/AddQuestion';

import MessagesList from './components/MessagesList';
import Chat from './components/Chat';


const App = (props) => {
  return (

      <Router history={browserHistory}>
        <Route component={MainLayout}>

          <Route path="/" component={Home}/>

          <Route path="/add-question" component={AddQuestion}/>

          <Route path="/questions" component={QuestionsList}/>
          <Route path="/question/:questionID" component={QuestionItem}/>

          <Route path="/im" component={MessagesList}/>
          <Route path="/im/:messageID" component={Chat}/>

        </Route>
      </Router>

  );
}

export default App;
