import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import classes from './Contact.css';

class Contact extends Component {
  state = {
    ctx: undefined
  }

  componentDidMount() {
     this.updateCanvas();
     setInterval(this.updateCanvas, 100)
   }

  // componentDidMount() {
  //   console.log('done render');
  //   // var c = document.getElementById('canvas');
  //   // var ctx = c.getContext("2d");
  //   let ctx = this.context;
  //
  // }
  updateCanvas = () => {
    if (!this.state.ctx){
      this.setState({ctx: this.refs.canvas.getContext('2d')});
    }
    const ctx = this.state.ctx || this.refs.canvas.getContext('2d');
    // const ctx = this.refs.canvas.getContext('2d');
    var width = window.innerWidth;
    var height = window.innerHeight;
    // console.log(width, height)
    /* ctx.fillRect(0,0,width,height); */

    let i = 0;
    let j = 0;
    for(i = 0; i < width; i += 50) {
      for(j = 0; j < height; j += 37) {
      	// let r = (Math.floor(Math.random() * 10 * i) + 96) % 255;
        // let g = (Math.floor(Math.random() * 10) + 211 + i) % 255;
        let r = 96;
        let g = 211;
        let b = (148 + Math.floor(Math.random() * 30)) % 255;
        ctx.fillStyle = "rgb(" + r + ", " + g + ", " + b + ")";
        ctx.fillRect(i, j, 50, 37);
      }
    }
    // console.log(i, j);
    // ctx.fillRect(50, 50, 100, 100);
  }

  render() {
    return (
      <div className={classes.Contact}>
        <canvas ref="canvas" className={classes.Canvas}/>
        <div className={classes.Info}>
          <p className={classes.Text}>I'm in Los Angeles.</p>
          <p className={classes.Text}>I love ramen.</p>
          <p className={classes.Text}>Let's get in touch.</p>
        </div>
      </div>
    );
  }
}

export default Contact;
ReactDOM.render(<Contact/>, document.getElementById('root'));
