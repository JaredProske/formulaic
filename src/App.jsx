import React from 'react';
import Triangle from './triangle';
import Utilities from './utilities';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <svg preserveAspectRatio='none' width='1600' height='1000' >{this._getTriangles()}</svg>;
  }

  _getTriangles(rise = 20, spacing = 0, frequency = 2) {

    const startX = 1;
    let incrementY = (rise * 4 + spacing * 2);

    let aCoord = { x: startX, y: 1 };
    let bCoord = { x: startX, y: 1 + rise * 2 };

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
      aCoord.x = startX;
      bCoord.x = startX;
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
