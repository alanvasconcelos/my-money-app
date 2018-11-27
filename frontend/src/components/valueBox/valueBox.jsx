import React from 'react';

export default (props) => (
  <div class={`small-box ${props.bg}`}>
    <div class='inner'>
      <h3>{props.value}</h3>
      <p>{props.label}</p>
    </div>
    <div class='icon'>
      <i class={props.icon}></i>
    </div>
    <a href='#' class='small-box-footer'>
      More info <i class='fa fa-arrow-circle-right'></i>
    </a>
  </div>
)