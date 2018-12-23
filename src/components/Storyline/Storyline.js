import React, { Component } from 'react';

import Panel2 from './Panel2/Panel';
import Panel3 from './Panel3/Panel';
import Panel4 from './Panel4/Panel';
import Panel6 from './Panel6/Panel';
import Panel7 from './Panel7/Panel';
import Panel8 from './Panel8/Panel';
import Panel9 from './Panel9/Panel';
import Panel10 from './Panel10/Panel';
import Panel11 from './Panel11/Panel';

import BackButton from '../UI/BackButton/BackButton';

import classes from './Storyline.css';

class storyline extends Component {
  constructor(props){
    super(props);
    this.hideButton = this.hideButton.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.hideButton);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideButton);
  }

  hideButton(){
    // If they ever scroll up, they're maybe thinking of going back to another page
    if (window.scrollY < this.prev && window.scrollY > 1000) {
      this.setState({ hideBackButton: false })
      window.removeEventListener('scroll', this.hideButton);
    } else {
      this.setState({ hideBackButton: true})
    }
    this.prev = window.scrollY;
  }

  state = {
    hideBackButton: true,
  }

  render() {
    let back = '';
    if (!this.state.hideBackButton) {
      back = <BackButton/>
    }

    return (
      <div className={classes.Storyline}>
        {back}
        <Panel3/>
        <Panel2/>
        <Panel4/>
        <Panel8/>
        <Panel6/>
        <Panel7/>

        <Panel11/>
        <Panel9/>
        <Panel10/>
      </div>
    )
  }
}

export default storyline;
