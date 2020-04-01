import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';

import { generatePalette } from './ColorHelpers';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>Pallete list</h1>} />
        <Route
          exact
          path='/pallete/:id'
          render={() => <h1>Individual pallete</h1>}
        />
      </Switch>
      // <div>
      //   <Palette pallete={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
