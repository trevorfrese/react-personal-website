import React from 'react';


import Wrapper from '../../UI/Layout/Wrapper/Wrapper';
import Background from '../../UI/Text/Background/Background';

import classes from './Panel.css';

const panel = (props) => {
  const daysSinceInjury = (Math.floor(( Date.parse(new Date()) - Date.parse('05-11-2016') ) / 86400000)) || 703;
  return (
    <div className={classes.Panel}>
      <Wrapper>
        <p className={classes.MarginBottom}>
          <Background backgroundColor="white" fontColor="#46237A">
            4 months
          </Background> on crutches.<br/>
        </p>
        <p className={classes.MarginBottom}>
          <Background backgroundColor="white" fontColor="#46237A">
            1 year
          </Background> without running.<br/>
        </p>
        <p className={classes.MarginBottom}>
          <Background backgroundColor="white" fontColor="#46237A">
            2 years
          </Background> without surfing.<br/>
        </p>
        <p className={classes.MarginBottom}>
          <Background backgroundColor="white" fontColor="#46237A">
            {daysSinceInjury} days
          </Background> in pain.<br/>
        </p>
      </Wrapper>
    </div>
  );
}

export default panel;
