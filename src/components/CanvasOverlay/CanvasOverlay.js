import React, { Component } from 'react';

import mainImage from '../../assets/images/waterfall.jpg';
import classes from './CanvasOverlay.css';

// <div className={classes.ImageContainer}>
  // <img className={classes.MainImage} src={mainImage} alt="" />
// </div>

// <div className={classes.ScrollBounce}>
//   <div className={classes.Bounce}>
//     <div class="fa fa-chevron-down fa-2x"></div>
//   </div>
// </div>

class CanvasOverlay extends Component {
  render() {
    return (
      <div className={classes.CanvasOverlay}>
        <p className={classes.Greeting}>
          I AM COLORFUL
        </p>
        <br/>
        <a className={classes.Greeting + ' ' + classes.Link}
           href="https://www.youtube.com/channel/UC5574LWEAlmbfJBezvj828A"
           target="_blank">
          I REVIEW CONCERTS
        </a>
        <a className={classes.Greeting + ' ' + classes.Link}
           href="https://www.instagram.com/trevors_bookclub/"
           target="_blank">
          I REVIEW BOOKS
        </a>
        <a className={classes.Greeting + ' ' + classes.Link}
           href="https://soundcloud.com/trevor-frese"
           target="_blank">
          I MAKE MUSIC
        </a>
        <a className={classes.Greeting + ' ' + classes.Link}
           href="https://forms.gle/qELvnbtQes1UnJUt7"
           target="_blank">
          MY NEWSLETTER
        </a>
      </div>
    );
  }
}

export default CanvasOverlay;
