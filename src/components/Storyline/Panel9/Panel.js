import React from 'react';

import Wrapper from '../../UI/Layout/Wrapper/Wrapper';

import classes from './Panel.css';

const panel = (props) => (
  <div className={classes.Panel}>
    <Wrapper>
      <p>I'm thankful for this injury.</p><br/>
      <p>I'm more mindful, caring, and patient.</p>
    </Wrapper>
  </div>
);

export default panel;
