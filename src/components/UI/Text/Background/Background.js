import React from 'react';

import classes from './Background.css';

const background = (props) => (
  <span
    className={classes.Background}
    style={{
      color: props.fontColor,
      backgroundColor: props.backgroundColor
    }}>
    {props.children}
  </span>
);

export default background;
