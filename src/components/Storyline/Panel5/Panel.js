import React, { Component } from 'react';
import { flipInX, flipOutX } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

import Wrapper from '../../UI/Layout/Wrapper/Wrapper';

import classes from './Panel.css';


class panel extends Component {
  constructor(props){
    super(props);
    this.customFlip = {...flipInX, '80%': {
      ...flipInX['80%']
      }
    }
    console.log(this.customFlip)
    // this.animations = this.animations.bind(this)
  }
  //
  // componentDidMount() {
  //   window.addEventListener('scroll', this.animations);
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.animations);
  // }
  //
  // animations(){
  //   // If they ever scroll up, they're maybe thinking of going back to another page
  //   if (window.scrollY < this.prev) {
  //     this.setState({
  //       styles: {
  //         first: {
  //           text: 'Depression',
  //           animate: {
  //             animation: 'x 2s',
  //             animationName: Radium.keyframes(flipInX, 'flipInX')
  //           },
  //         },
  //       }
  //     })
  //   } else {
  //     this.setState({
  //       styles: {
  //         first: {
  //           text: 'Gratitude',
  //           animate: {
  //             animation: 'x 2s',
  //             animationName: Radium.keyframes(flipInX, 'flipInX')
  //           },
  //         }
  //       }
  //     })
  //   }
  //   this.prev = window.scrollY;
  // }

  state = {
    styles: {
      first: {
        text: 'Depression',
        animate: {
          animation: 'x 1s 1s',
          animationName: Radium.keyframes(flipOutX, 'flipInX')
        },
      },
      second: {
        animate: {
          animation: 'x 1s 1.5s',
          animationName: Radium.keyframes(flipInX, 'flipInX')
        },
      },
      third: {
        animate: {
          animation: 'x 1s 2.25s',
          animationName: Radium.keyframes(flipInX, 'flipInX')
        },
      },
      fourth: {
        animate: {
          animation: 'x 1s 2.75s',
          animationName: Radium.keyframes(flipInX, 'flipInX')
        },
      },
      fifth: {
        animate: {
          animation: 'x 1s 3.25s',
          animationName: Radium.keyframes(flipInX, 'flipInX')
        },
      },
    }
  }



  render() {
    setTimeout(() => {
      const obj = {...this.state}
      obj.styles.first.text = 'Gratitude';
      this.setState({obj})
    }, 1005)
    return (
      <StyleRoot>
        <div className={classes.Panel}>
          <Wrapper>
            <p >
              <span style={this.state.styles.first.animate}>Depression</span>
            </p>
            <p style={this.state.styles.second.animate}>Chronic Pain <br/></p>
            <p style={this.state.styles.third.animate}>Hopelessness <br/></p>
            <p style={this.state.styles.fourth.animate}>Neglect <br/></p>
            <p style={this.state.styles.fifth.animate}>Ignorance <br/></p>
          </Wrapper>
        </div>
      </StyleRoot>
    )
  }
}

export default panel;
