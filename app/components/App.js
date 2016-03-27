/**
 * Created by jsharp on 2016-03-25.
 *
 *      Varafy Inc.
 *
 */

'use strict';

import Input from './Input';
import Results from './Results';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.fireExpressionSolver = this.fireExpressionSolver.bind(this);
  }

  fireExpressionSolver(value) {
    this.props.store.dispatch({
      type: 'SET_EXPRESSION',
      expression: value,
    });
  }

  render() {
    return (
      <div>
        <Input onSubmit={this.fireExpressionSolver} />
        <Results state={this.props.store.getState()} />
      </div>
    );
  }

}

export default App;
