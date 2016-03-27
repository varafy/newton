/**
 * Created by jsharp on 2016-03-27.
 *
 *      Varafy Inc.
 *
 */

import React, { Component } from 'react';

class Input extends Component {

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onSubmit(this._input.value);
  }

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your expression..."
          ref={(c) => this._input = c}
        />
        <span className="input-group-btn">
          <button className="btn btn-success" type="button" onClick={this.onClick}>Solve Expression</button>
        </span>
      </div>
    );
  }

}

export default Input;