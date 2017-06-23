import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider, connect } from 'react-redux';

// import { Provider } from 'react-redux';
import store from './store';

import {bindActionCreators} from 'redux';
import * as actions from './actions';

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



const mapStateToProps = state => {
  console.log('mapStateToProps: ', state);
  return {questionsData: state.questions};
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

const AppContainer = connect( mapStateToProps, mapDispatchToProps )( App );
export default AppContainer;
// #  connect ( stateToProps [, ~actions from reducers~, applyMiddleware() ] )(~Main component className~)
