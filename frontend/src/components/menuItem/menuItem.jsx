import React from 'react';

export default (props) => (
  <li className='active'>
    <a href={props.path}>
    <i className={props.icon}></i> <span>{props.label}</span></a>
  </li>
)