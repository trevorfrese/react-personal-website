import React, { Component } from 'react';
import Particles from './components/Particles/Particles';
import Timeline from './components/Timeline/Timeline';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Particles/>
          <Timeline/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
