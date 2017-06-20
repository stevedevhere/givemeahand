import React from 'react';
import Header from '../components/Header';
import {connect} from 'react-redux';
// import * as actions from '../actions';

const MainLayout = props => {



    // console.log(props);
    return (
      <div className="wrapper">
        <Header />

        {props.children}
      </div>
    );

}
// export default

const mapStateToProps = state => state;

// const AppContainer = connect(
//   mapStateToProps
// )(MainLayout)

export default connect(
  mapStateToProps
)(MainLayout);
