import React, { Component } from 'react';
import Particles from './components/Particles/Particles';
import Timeline from './components/Timeline/Timeline';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles/>
        <Timeline/>
        <Contact/>
      </div>
    );
  }
}

export default App;
