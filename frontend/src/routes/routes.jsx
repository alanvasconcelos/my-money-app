import React from 'react';
import { Route, HashRouter, Redirect } from 'react-router-dom';

import Dashboard from '../components/dashboard/dashboard';
import BillingCycles from '../components/billingCycles/billingCycles';

export default (props) => (
  <HashRouter>
    <div>
      <Route exact path='/' component={Dashboard} />
      <Route path='/billingCycles' component={BillingCycles} />
      <Redirect from='*' to='/' />
    </div>
  </HashRouter>
)