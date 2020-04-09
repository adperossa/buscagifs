import React from 'react';

const Gif = props => (
  <li className="gif-wrap">
    <a target="_blank" href={props.url}>
      <img src={props.url} alt=""/>
    </a>
  </li>
);

export default Gif;