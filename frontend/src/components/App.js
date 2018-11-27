import React from 'react';

import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Routes from '../routes/routes';

import './dependencies';

export default () => (
  <div className="wrapper">
    <Header />
    <Sidebar />
    <div className="content-wrapper">
      <Routes />
    </div>
  </div>
)