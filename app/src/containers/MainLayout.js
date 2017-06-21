import React from 'react';
import Header from '../components/Header';
import {connect} from 'react-redux';
import * as actions from '../actions';

const MainLayout = props => {
  console.log(props);
    return (
      <div className="wrapper">
        <Header />

        {props.children}
      </div>
    );

}

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
  return {
    ...actions
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( MainLayout );
// #  connect ( stateToProps [, ~actions from reducers~, applyMiddleware() ] )(~Main component className~)
