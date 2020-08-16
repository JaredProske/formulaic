import App from '../src/app.jsx';
import TestUtils from 'react-addons-test-utils';
import React from 'react';

let app;

describe('Given an instance of the App', () => {
  describe('when we render the app', () => {
    before(() => {
      app = TestUtils.renderIntoDocument(<App title='title'/>);
    });
    it('should render a svg container', () => {
      let svgContainer = TestUtils.scryRenderedDOMComponentsWithTag(app, 'svg');

      expect(svgContainer).to.have.length.above(0, 'Expected to have element with tag <svg>');
    });

     it('should render a polygon', () => {
      let polygon = TestUtils.scryRenderedDOMComponentsWithTag(app, 'polygon');

      expect(polygon).to.have.length.above(0, 'Expected to have element with tag <polygon>');
    });
  });
});
