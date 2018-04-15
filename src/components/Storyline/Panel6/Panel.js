import React from 'react';

import Wrapper from '../../UI/Layout/Wrapper/Wrapper';
import Background from '../../UI/Text/Background/Background';

import classes from './Panel.css';

const panel = (props) => (
  <div className={classes.Panel}>
    <Wrapper>
      <p>
        <Background backgroundColor="white" fontColor="#46237A">Discipline:</Background>&nbsp;
      </p>
      <p>A constant process of trying again despite slow progress.</p>
    </Wrapper>
  </div>
);

export default panel;
