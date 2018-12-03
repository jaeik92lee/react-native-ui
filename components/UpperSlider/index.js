import React, { Component } from 'react';
import { Text } from 'react-native';
import BigSlider from 'react-native-big-slider';

class UpperSlider extends Component {
  render() {
    return (
      <BigSlider
        horizontal
        maximumValue={240}
        style={{ backgroundColor: '#81cfe0' }}
        trackStyle={{ backgroundColor: 'rgba(194, 61, 85, 1)' }}
        label="friction"
        minimumValue={-120}
      />
    );
  }
}

export default UpperSlider;
