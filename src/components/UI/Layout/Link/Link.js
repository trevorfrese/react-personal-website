import React from 'react';

import classes from './Link.css';

const link = (props) => (
  <a
    className={classes.Link}
    target="_blank"
    rel="noopener noreferrer"
    href={props.url}>
    {props.linkText}
  </a>
);

export default link;
