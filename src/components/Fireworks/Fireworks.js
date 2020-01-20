import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es.js';
import mainImage from '../../assets/images/waterfall.jpg';
import CanvasOverlay from '../CanvasOverlay/CanvasOverlay';

import classes from './Fireworks.css';

var colors = ['#46237a', '#fee452', '#4350c6', '#dcff00', '#fd79ad', '#9091f6', '#ee6054'];

class Fireworks extends Component {
  state = {
    ctx: undefined
  }

  // START anime js code
  componentDidMount() {
    var human = false;

    var canvasEl = document.querySelector('canvas');
    var ctx = this.refs.canvas.getContext('2d');

    var cH;
    var cW;
    var bgColor = "#ee6054";
    var animations = [];
    var circles = [];

    var colorPicker = (function() {
      var index = 0;
      function next() {
        index = index++ < colors.length - 1 ? index : 0;
        return colors[index];
      }
      function current() {
        return colors[index]
      }
      return {
        next: next,
        current: current
      }
    })();

    function removeAnimation(animation) {
      var index = animations.indexOf(animation);
      if (index > -1) animations.splice(index, 1);
    }

    function calcPageFillRadius(x, y) {
      var l = Math.max(x - 0, cW - x);
      var h = Math.max(y - 0, cH - y);
      return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
    }

    function addClickListeners() {
      document.addEventListener("mousedown", handleEvent);
    };

    // Note - I changed from using pageX and pageY to using x and y
    function handleEvent(e) {
        if (!e.isTriggered) {
          human = true;
        }

        if (e.touches) {
          e.preventDefault();
          e = e.touches[0];
        }
        var currentColor = colorPicker.current();
        var nextColor = colorPicker.next();
        var targetR = calcPageFillRadius(e.x, e.y);
        var rippleSize = Math.min(200, (cW * .4));
        var minCoverDuration = 750;

        var pageFill = new Circle({
          x: e.x,
          y: e.y,
          r: 0,
          fill: nextColor
        });
        var fillAnimation = anime({
          targets: pageFill,
          r: targetR,
          duration:  Math.max(targetR / 2 , minCoverDuration ),
          easing: "easeOutQuart",
          complete: function(){
            bgColor = pageFill.fill;
            removeAnimation(fillAnimation);
          }
        });

        var ripple = new Circle({
          x: e.x,
          y: e.y,
          r: 0,
          fill: currentColor,
          stroke: {
            width: 3,
            color: currentColor
          },
          opacity: 1
        });
        var rippleAnimation = anime({
          targets: ripple,
          r: rippleSize,
          opacity: 0,
          easing: "easeOutExpo",
          duration: 900,
          complete: removeAnimation
        });

        var particles = [];
        for (var i=0; i<32; i++) {
          var particle = new Circle({
            x: e.x,
            y: e.y,
            fill: currentColor,
            r: anime.random(24, 48)
          })
          particles.push(particle);
        }
        var particlesAnimation = anime({
          targets: particles,
          x: function(particle){
            return particle.x + anime.random(rippleSize, -rippleSize);
          },
          y: function(particle){
            return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15);
          },
          r: 0,
          easing: "easeOutExpo",
          duration: anime.random(1000,1300),
          complete: removeAnimation
        });
        animations.push(fillAnimation, rippleAnimation, particlesAnimation);
    }

    function extend(a, b){
      for(var key in b) {
        if(b.hasOwnProperty(key)) {
          a[key] = b[key];
        }
      }
      return a;
    }

    var Circle = function(opts) {
      extend(this, opts);
    }

    Circle.prototype.draw = function() {
      ctx.globalAlpha = this.opacity || 1;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
      if (this.stroke) {
        ctx.strokeStyle = this.stroke.color;
        ctx.lineWidth = this.stroke.width;
        ctx.stroke();
      }
      if (this.fill) {
        ctx.fillStyle = this.fill;
        ctx.fill();
      }
      ctx.closePath();
      ctx.globalAlpha = 1;
    }

    var animate = anime({
      duration: Infinity,
      update: function() {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, cW, cH);
        animations.forEach(function(anim) {
          anim.animatables.forEach(function(animatable) {
            animatable.target.draw();
          });
        });
      }
    });

    var resizeCanvas = function() {
      cW = window.innerWidth;
      cH = window.innerHeight;
      canvasEl.width = cW;
      canvasEl.height = cH;
    };

    (function init() {
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);
      addClickListeners();
      triggerFakeClicks();
    })();


    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function triggerFakeClicks() {
      if (human) return;

      await sleep(3000);
      fakeClick(anime.random(cW * .2, cW * .8), anime.random(cH * .2, cH * .8));
      triggerFakeClicks();
    }

    function fakeClick(x, y) {
      if (human) return;

      var fakeClick = new Event("mousedown");
      fakeClick.x = x;
      fakeClick.y = y;
      fakeClick.isTriggered = true;
      document.dispatchEvent(fakeClick);
    }
  }

  // END anime js code
  render() {
    return (
      <div className={classes.Fireworks}>
        <canvas ref="canvas" className={classes.Canvas}/>
        <CanvasOverlay/>
      </div>
    );
  }
}

export default Fireworks;
