import React from 'react';

import Wrapper from '../../UI/Layout/Wrapper/Wrapper';
import Background from '../../UI/Text/Background/Background';

import classes from './Panel.css';

const panel = (props) => (
  <div className={classes.Panel}>
    <Wrapper>
      <p>
        <Background backgroundColor="white" fontColor="#46237A">Technique:</Background>&nbsp;
      </p>
      <p>A skillful or efficient way of doing something.</p>
    </Wrapper>
  </div>
);

export default panel;
