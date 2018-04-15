import React from 'react';

import Wrapper from '../../UI/Layout/Wrapper/Wrapper';

import classes from './Panel.css';

const panel = (props) => (
  <div className={classes.Panel}>
    <Wrapper>
      <p>
        I had a knee surgery in 2016.
        <br/><br/>
        Life hasn't been the same since.
      </p>
    </Wrapper>
  </div>
);

export default panel;
