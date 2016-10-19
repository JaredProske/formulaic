import React from 'react';
import TriangleFactory from './triangleFactory';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.keyIncrement = 0;
  }

  render() {
    const factory = new TriangleFactory();

    return <svg preserveAspectRatio='none' width='1600' height='1000' >{factory.createTriangles()}</svg>;
  }  
};
