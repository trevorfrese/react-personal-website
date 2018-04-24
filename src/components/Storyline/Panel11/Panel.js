import React from 'react';

import Wrapper from '../../UI/Layout/Wrapper/Wrapper';

import classes from './Panel.css';

const panel = (props) => (
  <div className={classes.Panel}>
    <Wrapper>
      <p>These two principles guide all my actions.</p><br/>

      <p>Now, I always evaluate <b>what</b> I'm doing and <b>how</b> I'm doing it.</p>
    </Wrapper>
  </div>
);

export default panel;
