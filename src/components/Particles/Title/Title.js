import React from 'react';

import classes from './Title.css';

const title = (props) => (
    <div className={classes.TitleContainer}>
      <div className={classes.SubTitle}>
        Hi, I'm
      </div>
      <div className={classes.Title}>
        Trevor Frese
      </div>
    </div>
);

export default title;
