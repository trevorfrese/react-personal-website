import React from 'react';

import Projects from './Projects/Projects';

import classes from './Timeline.css';

const timeline = (props) => (
  <div className={classes.Timeline}>
    {/* <p style={{textAlign:'center'}}>Here's what I've done so far</p> */}
    <Projects/>
  </div>
);

export default timeline;
