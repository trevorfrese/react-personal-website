import React from 'react';

import { Link } from 'react-router-dom';
import Fireworks from '../Fireworks/Fireworks';
import Background from '../UI/Text/Background/Background';
import Welcome from '../Welcome/Welcome';


import mainImage from '../../assets/images/waterfall.jpg';

import classes from './HomePage.css';
// <div className={classes.CanvasOverlay}>
//   <div className={classes.Row}>
//     <div className={classes.ImageContainer}>
//       <img className={classes.MainImage} src={mainImage} alt="" />
//         <p className={classes.Greeting}>
//           <Background backgroundColor="white" fontColor="#000">
//             I'm Trevor Frese
//           </Background>
//         </p>
//     </div>
//   </div>
//   <div className={classes.Controls}>
//     <div className={classes.Control + ' ' + classes.ButtonContainer}>
//       <Link to="/work">
//         <button className={classes.Button + ' ' + classes.Blue}>WORK</button>
//       </Link>
//     </div>
//     <div className={classes.Control + ' ' +  classes.ButtonContainer}>
//       <Link to="/my_story">
//         <button className={classes.Button + ' ' + classes.Purple}>WHO I AM</button>
//       </Link>
//     </div>
//     <div className={classes.Control + ' ' + classes.ButtonContainer}>
//       <Link to="/mentors">
//         <button className={classes.Button + ' ' + classes.Orange}>MENTORS</button>
//       </Link>
//     </div>
//   </div>
// </div>
const homePage = (props) => (
  <div className={classes.HomePage}>
    <Welcome/>
    <Fireworks/>
  </div>
);

export default homePage;
