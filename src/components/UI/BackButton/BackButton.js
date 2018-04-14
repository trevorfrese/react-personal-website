import React from 'react';

import { Link } from 'react-router-dom';

import classes from './BackButton.css';

const backButton = (props) => (
  <Link to="/">
    <button className={classes.BackButton}>
      <div className={classes.Icon}>BACK</div>
    </button>
  </Link>
);

export default backButton;
