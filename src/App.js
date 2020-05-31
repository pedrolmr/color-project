import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import NewPaletteForm from './NewPaletteForm';
import SingleColorPalette from './SingleColorPalette';
import seedColors from './seedColors';

import { generatePalette } from './ColorHelpers';

class App extends Component {
  findPalette = (id) => {
    return seedColors.find((palette) => {
      return palette.id === id;
    });
  };
  render() {
    return (
      <Switch>
        <Route exact path='/palette/new' render={() => <NewPaletteForm />} />
        <Route
          exact
          path='/'
          render={(props) => <PaletteList palettes={seedColors} {...props} />}
        />
        <Route
          exact
          path='/palette/:id'
          render={(props) => (
            <Palette
              palette={generatePalette(this.findPalette(props.match.params.id))}
            />
          )}
        />

        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={(props) => (
            <SingleColorPalette
              colorId={props.match.params.colorId}
              palette={generatePalette(
                this.findPalette(props.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
