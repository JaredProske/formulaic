import Triangle from '../src/Triangle/index.jsx';
import TestUtils from 'react-addons-test-utils';
import React from 'react';

let triangle;
const rise = 20, fill = '#ffffff', x = 42, y = 99;

describe('Given a Triangle', () => {
    describe('when we render the triangle', () => {
        before(() => {
            triangle = TestUtils.renderIntoDocument(<Triangle x={x} y={y} rise={rise} fill={fill} />);
        });

        it('should render a polygon', () => {
            let renderedTriangle = TestUtils.scryRenderedDOMComponentsWithTag(triangle, 'polygon');

            expect(renderedTriangle).to.have.length.above(0, 'Expected to have element with tag <polygon>');
        });

        it('should fill', () => {
            const renderedTriangle = TestUtils.scryRenderedDOMComponentsWithTag(triangle, 'polygon')[0];
            const actualFill = renderedTriangle.getAttribute('fill');

            expect(actualFill).to.equal(fill);
        });

        it('should set location', () => {
            const renderedTriangle = TestUtils.scryRenderedDOMComponentsWithTag(triangle, 'polygon')[0];
            const actualTransfrom = renderedTriangle.getAttribute('transform');
            
            expect(actualTransfrom).to.equal(`translate(${x},${y})`);
        });

    });
});

describe('Given a DOWN triangle', () => {
    describe('when we render the triangle', () => {
        before(() => {
            triangle = TestUtils.renderIntoDocument(<Triangle rise={rise} direction={'down'} />);
        });

        it('should have points = 0,0 rise * 2,0 rise,rise *2', () => {
            const renderedTriangle = TestUtils.scryRenderedDOMComponentsWithTag(triangle, 'polygon')[0];
            const points = renderedTriangle.getAttribute('points');

            expect(points).to.equal('0,0 40,0 20,40');
        });
    });
});

describe('Given an UP triangle', () => {
    describe('when we render the triangle', () => {
        before(() => {
            triangle = TestUtils.renderIntoDocument(<Triangle rise={rise} direction={'up'} />);
        });

        it('should have points = rise,0 rise*2,rise*2 0,rise*2', () => {
            const renderedTriangle = TestUtils.scryRenderedDOMComponentsWithTag(triangle, 'polygon')[0];
            const points = renderedTriangle.getAttribute('points');

            expect(points).to.equal('20,0 40,40 0,40');
        });
    });
});
