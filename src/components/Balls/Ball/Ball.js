import React from 'react';
import classes from './Ball.css';


// // Keyframes
// balls.forEach((el, i, ra) => {
//   let to = {
//     x: Math.random() * (i % 2 === 0 ? -11 : 11),
//     y: Math.random() * 12
//   };
//
//   let anim = el.animate(
//     [
//       { transform: "translate(0, 0)" },
//       { transform: `translate(${to.x}rem, ${to.y}rem)` }
//     ],
//     {
//       duration: (Math.random() + 1) * 2000, // random duration
//       direction: "alternate",
//       fill: "both",
//       iterations: Infinity,
//       easing: "ease-in-out"
//     }
//   );
// });



const Ball = (props) => {
  const x = Math.random() * (props.identifier % 2 === 0 ? -11 : 11);
  const y = Math.random() * 12;

  return (
    <div
      className={classes.Ball}
      style={{
        left: props.left + 'vw',
        background: props.background,
        top: props.top + 'vh',
        width: props.width + 'em',
        height: props.height + 'em',
        transform: 'translate(' + x  + 'rem, ' + y  + 'rem)',
        'animationDuration': Math.random() + 1.25 + 's' ,
        'animationDelay': Math.random() * 0.005 + 's',
        'animationDirection': 'alternate'
      }}>
    </div>
  )
};

export default Ball;
