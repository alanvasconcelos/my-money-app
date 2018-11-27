import React from 'react';

import MenuItem from '../MenuItem/menuItem';
import MenuTree from '../MenuTree/menuTree';

export default (props) => (
  <ul className='sidebar-menu' data-widget='tree'>
    <MenuItem path='#' icon='fa fa-dashboard' label='Dashboard' />
    <MenuTree icon='fa fa-edit' label='Cadastro'>
      <MenuItem path='#billingCycles' icon='fa fa-usd' label='Ciclos de pagamentos' />
    </MenuTree>
  </ul>
)