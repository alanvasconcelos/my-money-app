import React from 'react';

export default (props) => (
  <li className="active">
    <a href="#">
    <i className="{props.icon}"></i> <span>{props.nome}</span></a>
  </li>
)