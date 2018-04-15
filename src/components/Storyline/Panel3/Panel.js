import React from 'react';

import Wrapper from '../../UI/Layout/Wrapper/Wrapper';

import classes from './Panel.css';

const panel = (props) => (
  <div className={classes.Panel}>
    <Wrapper>
      <p>
        Here's a short story about me.
      </p>
    </Wrapper>
  </div>
);

export default panel;
