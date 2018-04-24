import React from 'react';

import Wrapper from '../../UI/Layout/Wrapper/Wrapper';

import classes from './Panel.css';

const panel = (props) => (
  <div className={classes.Panel}>
    <Wrapper>
      <p>I appreciate my health and mobility so much now.</p><br/>
      {/* <p>Now, I'm more mindful, caring, and patient.</p> */}
      <p>I'm grateful for what this injury has taught me.</p>
    </Wrapper>
  </div>
);

export default panel;
