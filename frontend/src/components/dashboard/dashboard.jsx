import React from 'react';

import ContentHeader from '../contentHeader/contentHeader';
import Content from '../content/content';
import ValueBox from '../valueBox/valueBox';

export default (props) => (
  <div>
    <ContentHeader title='Dashboard' subtitle='Versão 1.0'/>
    <Content>
      <div class='row'>
        <div class='col-sm-4'>
          <ValueBox bg='bg-green' icon='fa fa-institution' label='Total de Créditos' value='R$ 0,00' />
        </div>
        <div class='col-sm-4'>
          <ValueBox bg='bg-red' icon='fa fa-credit-card' label='Total de Débitos' value='R$ 0,00' />
        </div>
        <div class='col-sm-4'>
          <ValueBox bg='bg-aqua' icon='fa fa-money' label='Valor Consolidado' value='R$ 0,00' />
        </div>
      </div>
    </Content>
  </div>
)