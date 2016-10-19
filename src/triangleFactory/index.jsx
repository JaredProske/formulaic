import React from 'react';
import Triangle from '../triangle';
import Randomizer from '../randomizer';

export default class TriangleFactory {

    constructor(title = 'tube technology') {
        this._currentKey = 0;
        this._randomizer = new Randomizer(title);
    }

    createTriangles(rise = 20, spacing = 0, frequency = 2) {
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
            if (this._randomizer.getRandomBool()) {
                let triangleProps = {
                    rise: rise,
                    fill: this._randomizer.getRandomHexColor(),
                    x: coord.x,
                    y: coord.y,
                    direction: directions[i % frequency]
                };

                triangles.push(<Triangle key={this._currentKey++} {...triangleProps} />);
            }
            coord.x += incrementX;
        }
        return triangles;
    }
}
