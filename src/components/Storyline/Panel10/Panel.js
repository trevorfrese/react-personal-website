import React from 'react';

import Wrapper from '../../UI/Layout/Wrapper/Wrapper';

import classes from './Panel.css';

const panel = (props) => (
  <div className={classes.Panel}>
    <Wrapper>
      <p>And I'm better now.</p><br/>
    </Wrapper>
  </div>
);

export default panel;
