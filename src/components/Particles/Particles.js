import React from 'react';
import Particles from 'react-particles-js';

import Title from './Title/Title';
import classes from './Particles.css';

const particles = (props) => (
  <div className={classes.Particles}>
    <Particles
      params={{
            		particles: {
                  "number": {
                    "value": 30,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
            			color: {
                    value: '#C9B940'
                  },
                  line_linked: {
                    color: '#C9B940'
                  },
            		}
            	}}
      width="100vw"
      height="100vh">
    </Particles>
    <Title>SOFTWARE ENGINEER</Title>


  </div>
);

export default particles;
