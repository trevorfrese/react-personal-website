import React from 'react';

import moment from 'moment';

import Wrapper from '../../UI/Layout/Wrapper/Wrapper';
import Background from '../../UI/Text/Background/Background';

import classes from './Panel.css';

const panel = (props) => {
  const daysSinceInjury = moment().diff(moment('05-11-2016'), 'days')
  return (
    <div className={classes.Panel}>
      <Wrapper>
        <p>
          <Background backgroundColor="white" fontColor="#46237A">
            4 months
          </Background> on crutches.<br/>
          <Background backgroundColor="white" fontColor="#46237A">
            1 year
          </Background> without running.<br/>
          <Background backgroundColor="white" fontColor="#46237A">
            2 years
          </Background> without surfing.<br/>
          <Background backgroundColor="white" fontColor="#46237A">
            {daysSinceInjury} days
          </Background> in pain.<br/>
        </p>
      </Wrapper>
    </div>
  );
}

export default panel;
