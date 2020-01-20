import React, { Component } from 'react';

import mainImage from '../../assets/images/waterfall.jpg';
import classes from './CanvasOverlay.css';

class CanvasOverlay extends Component {
  render() {
    return (
      <div className={classes.CanvasOverlay}>
        <div className={classes.ImageContainer}>
          <img className={classes.MainImage} src={mainImage} alt="" />
        </div>
        <p className={classes.Greeting}>
          I AM COLORFUL
        </p>
      </div>
    );
  }
}

export default CanvasOverlay;
