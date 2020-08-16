import React from 'react';
import TriangleFactory from './triangleFactory';
import TitleForm from './titleForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let title = this._getQueryVariable('title') || this.props.title;

    if (!title) {
      return <TitleForm />;
    }
    return <TriangleFactory title={title} />;
  }

  _getQueryVariable(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split('&');

    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split('=');

      if (pair[0] === variable) { return pair[1]; }
    }
    return false;
  }
};

App.propTypes = {
    title: React.PropTypes.string
};

