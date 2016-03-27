/**
 * Created by jsharp on 2016-03-27.
 *
 *      Varafy Inc.
 *
 */

import React, { Component } from 'react';

function solveExpression(exp) {
  return (
    <h3>
      {exp}
    </h3>
  );
}

class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="well">
        {solveExpression(this.props.state.expression)}
      </div>
    );
  }
}

export default Results;
