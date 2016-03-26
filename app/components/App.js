/**
 * Created by jsharp on 2016-03-25.
 *
 *      Varafy Inc.
 *
 */

'use strict';

import React, { Component } from 'react';

function solveExpression(exp) {
  return (
    <h3>
      {exp}
    </h3>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.store.getState();

    this.fireExpressionSolver = this.fireExpressionSolver.bind(this);
  }

  fireExpressionSolver() {
    this.props.store.dispatch({
      type: 'SET_EXPRESSION',
      expression: this._input.value,
    });
  }

  render() {
    return (
      <div>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your expression..."
          ref={(c) => this._input = c}
        />
        <span className="input-group-btn">
          <button className="btn btn-success" type="button" onClick={this.fireExpressionSolver}>Solve Expression</button>
        </span>
      </div>
        {solveExpression(this.state.expression)}
      </div>
    );
  }
}

export default App;
