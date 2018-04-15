import React from 'react';

import Wrapper from '../../UI/Layout/Wrapper/Wrapper';
import Background from '../../UI/Text/Background/Background';

import classes from './Panel.css';

const panel = (props) => (
  <div className={classes.Panel}>
    <Wrapper>
      <p><Background backgroundColor="white" fontColor="#46237A">Discipline</Background>&nbsp;
      and&nbsp;<Background backgroundColor="white" fontColor="#46237A">Technique</Background>&nbsp;
      are the ways I handle the pain.</p>

    </Wrapper>
  </div>
);

export default panel;
