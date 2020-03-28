import React, { Component } from 'react';
import ColorBox from './ColorBox';

import './Pallete.css';

export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name} />
    ));
    return (
      <div className='Pallete'>
        <div className='Pallete-colors'>{colorBoxes}</div>
      </div>
    );
  }
}
