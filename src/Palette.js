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
      level: 500,
      format: 'hex'
    };

    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { colors } = this.props.pallete;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color[format]} name={color.name} />
    ));
    return (
      <div className='Pallete'>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className='Pallete-colors'>{colorBoxes}</div>
      </div>
    );
  }
}
