import React, { Component } from 'react';
// import Particles from './components/Particles/Particles';
import Storyline from './components/Storyline/Storyline';
import HomePage from './components/HomePage/HomePage';
import RoleModels from './components/RoleModels/RoleModels';

import { Switch, Route, withRouter } from 'react-router-dom';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {/* <Route exact path="/work" component={Work} /> */}
          <Route exact path="/my_story" component={Storyline} />
          <Route exact path="/role_models" component={RoleModels} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
