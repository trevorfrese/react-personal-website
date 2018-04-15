import React from 'react';

import Wrapper from '../../UI/Layout/Wrapper/Wrapper';
import Background from '../../UI/Text/Background/Background';

import classes from './Panel.css';

const panel = (props) => (
  <div className={classes.Panel}>
    <Wrapper>
      <p>
        My guiding principles are&nbsp;
        <Background backgroundColor="white" fontColor="orange">
          Discipline
        </Background>
        &nbsp;and&nbsp;
        <Background backgroundColor="white" fontColor="green">
          Technique
        </Background>
      </p>
    </Wrapper>
  </div>
);

export default panel;
