import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Navbar from './Navbar';

import './Pallete.css';

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500
    };

    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  render() {
    const { colors } = this.props.pallete;
    const { level } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className='Pallete'>
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className='Pallete-colors'>{colorBoxes}</div>
      </div>
    );
  }
}
