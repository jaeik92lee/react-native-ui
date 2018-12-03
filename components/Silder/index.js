import React, { Component } from 'react';
import Swiper from 'react-native-animated-swiper';
import UpperSlider from '../UpperSlider';
import CardSlider from '../CardSlider';

class Silder extends Component {
  render() {
    return (
      <Swiper
        dots
        dotsColor="rgba(255, 255, 255, 0.25)"
        dotsColorActive="rgba(255, 255, 255, 0.75)">
        <UpperSlider />
        <CardSlider />
      </Swiper>
    );
  }
}

export default Silder;
