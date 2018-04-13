import React from 'react';

import mainImage from '../../assets/images/just-face.jpg';

import classes from './HomePage.css';

const homePage = (props) => (
  <div className={classes.HomePage}>
    <div className={classes.Row}>
      <div className={classes.ImageContainer}>
        <img className={classes.MainImage} src={mainImage} alt="" />
        <p className={classes.Greeting}>I'm Trevor Frese</p>
      </div>
    </div>
    <div className={classes.Controls}>
      <div className={classes.Control + ' ' + classes.ButtonContainer}>
        <button className={classes.Button + ' ' + classes.Blue}>WORK</button>
      </div>
      <div className={classes.Control + ' ' +  classes.ButtonContainer}>
        <button className={classes.Button + ' ' + classes.Purple}>WHO AM I</button>
      </div>
      <div className={classes.Control + ' ' + classes.ButtonContainer}>
          <button className={classes.Button + ' ' + classes.Orange}>ROLE MODELS</button>
      </div>
    </div>


  </div>
);

export default homePage;
