import React, { Component } from 'react';

import Ball from './Ball/Ball';
import BallsCard from './BallsCard/BallsCard';
import classes from './Balls.css';
// Some random colors
//
// const numBalls = 50;
// const balls = [];
//
// for (let i = 0; i < numBalls; i++) {
//   let ball = document.createElement("div");
//   ball.classList.add("ball");
//   ball.style.background = colors[Math.floor(Math.random() * colors.length)];
//   ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
//   ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
//   ball.style.transform = `scale(${Math.random()})`;
//   ball.style.width = `${Math.random()}em`;
//   ball.style.height = ball.style.width;
//
//   balls.push(ball);
//   // document.body.append(ball);
// }

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


class Balls extends Component {
  colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

  render () {
    let balls = [];
    balls = Array(100).fill().map((_, i) => {
      const width = Math.random() * 1 + 0.5;
      const ballConfig = {
        key: i,
        background: this.colors[Math.floor(Math.random() * this.colors.length)],
        left: Math.floor(Math.random() * 100),
        top: Math.floor(Math.random() * 100),
        transform: Math.random(),
        width,
        height: width,
      }
      return ballConfig;
    });



    // for (let i = 0; i < numBalls; i++) {
    //   let ball = document.createElement("div");
    //   ball.classList.add("ball");
    //   ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    //   ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    //   ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    //   ball.style.transform = `scale(${Math.random()})`;
    //   ball.style.width = `${Math.random()}em`;
    //   ball.style.height = ball.style.width;
    //
    //   balls.push(ball);
    //   document.body.append(ball);
    // }

    return (
      <div className={classes.Balls}>
        <BallsCard/>
        {balls.map(ball => {
          return <Ball
            key={ball.key}
            identifier={ball.key}
            top={ball.top}
            left={ball.left}
            background={ball.background}
            transform={ball.transform}
            width={ball.width}
            height={ball.height}
          />
        })}
      </div>
    );
  }
}

export default Balls;
