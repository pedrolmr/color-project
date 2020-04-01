import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';

import { generatePalette } from './ColorHelpers';

class App extends Component {
  findPalette = id => {
    return seedColors.find(palette => {
      return palette.id === id;
    });
  };
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>Palette list</h1>} />
        <Route
          exact
          path='/palette/:id'
          render={props => (
            <Palette
              palette={generatePalette(this.findPalette(props.match.params.id))}
            />
          )}
        />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
