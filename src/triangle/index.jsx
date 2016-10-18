import React from 'react';

export default class Triangle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const points = this.getPoints(this.props.rise, this.props.direction);
        const transform = `translate(${this.props.x},${this.props.y} )`;
        
        return (<polygon
            points={points}
            fill={this.props.fill}
            strokeWidth={1}
            transform={transform}
            >
        </polygon>);
    }

    getPoints(rise, direction) {
        if (direction === 'up') {
            return `${rise},0 ${rise * 2},${rise * 2} 0,${rise * 2}`;
        }
        return `0,0 ${rise * 2},0 ${rise},${rise * 2}`;
    }
}

Triangle.propTypes = {
    rise: React.PropTypes.number,
    fill: React.PropTypes.string,
    direction: React.PropTypes.string,
    x: React.PropTypes.number,
    y: React.PropTypes.number
};
