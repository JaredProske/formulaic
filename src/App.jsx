import React from 'react';
import Triangle from './Triangle';
import Utilities from './Utilities';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let triangles = [
    //   <Triangle key={1} direction={'down'} rise={20} fill={Utilities.getRandomHexColor()} />,
    //   <Triangle key={2} direction={'up'} rise={20} fill={Utilities.getRandomHexColor()} />
    // ];

    return <svg height='1600' width='1600'>{this._getTriangles()}</svg>;
  }

  _getTriangles(rise = 20, spacing = 0, frequency = 2) {

    const startA = { x: 1, y: 1 };
    const startB = { x: 1, y: 1 + rise * 2 };

    let incrementY = (rise * 4 + spacing * 2);

    let aCoord = Object.assign({}, startA);
    let bCoord = Object.assign({}, startB);

    bCoord.y += spacing;
    const length = (rise * 3 + 1);
    const triangles = [];

    for (let i = 0; i < rise; i++) {
      this
        ._getRowOfTriangles(aCoord, length, frequency, ['up', 'down'], rise, spacing)
        .forEach(t => triangles.push(t));
      this
        ._getRowOfTriangles(bCoord, length, frequency, ['down', 'up'], rise, spacing)
        .forEach(t => triangles.push(t));
      aCoord.y += incrementY;
      bCoord.y += incrementY;
      aCoord.x = startA.x;
      bCoord.x = startB.x;
    }

    return triangles;
  }

  _getRowOfTriangles(coord, width, frequency, directions, rise, spacing) {
    let incrementX = (rise + spacing);
    const numberTriangles = width;
    const triangles = [];

    for (let i = 0; i < numberTriangles; i++) {
      if (Utilities.getRandomBool()) {
        let triangleProps = {
          rise: rise,
          fill: Utilities.getRandomHexColor(),
          x: coord.x,
          y: coord.y,
          direction: directions[i % frequency]          
        };

        triangles.push(<Triangle {...triangleProps} />);
      }
      coord.x += incrementX;
    }
    return triangles;
  }
};
