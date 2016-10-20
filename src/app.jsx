import React from 'react';
import TriangleFactory from './triangleFactory';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.keyIncrement = 0;
  }

  render() {
    const factory = new TriangleFactory(this._getQueryVariable('title'));

    return <svg width='1600' height='1000' >{factory.createTriangles()}</svg>;
  }

  _getQueryVariable(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split('&');

    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split('=');
      
      if (pair[0] === variable) { return pair[1]; }
    }
    return (false);
  }
};
