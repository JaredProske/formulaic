import React from 'react';
import Triangle from './Triangle';
import Utilities from './Utilities';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let triangles = [
      <Triangle direction={'down'} rise={20} fill={Utilities.getRandomHexColor()} />,
      <Triangle direction={'up'} rise={20} fill={Utilities.getRandomHexColor()} />
    ];

    return <svg height='1000' width='1000'>{triangles}</svg>;
  }
};
