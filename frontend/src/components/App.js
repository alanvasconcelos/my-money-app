import React from 'react';

import Header from './header/header';
import Sidebar from './sidebar/sidebar';

import './dependencies';

export default () => (
  <div className="wrapper">
    <Header />
    <Sidebar />
    <div className="content-wrapper">
    <section className="content-header">
      <h1>
        Page Header
        <small>Optional description</small>
      </h1>
      <ol className="breadcrumb">
        <li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>
        <li className="active">Here</li>
      </ol>
      <section className="content container-fluid">
      </section>
    </section>
    </div>
  </div>
)