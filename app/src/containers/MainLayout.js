import React from 'react';
import Header from '../components/Header';


const MainLayout = props => {
    console.log('MainLayout: ', props);
    return (
      <div className="wrapper">
        <Header />

        {props.children}
      </div>
    );

}

export default MainLayout;
