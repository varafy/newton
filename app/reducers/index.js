/**
 * Created by jsharp on 2016-03-25.
 *
 *      Varafy Inc.
 *
 */

const _ = require('lodash');

const initialState = {
  expression: null
};

module.exports = function (state = initialState, action) {
  switch (action.type) {
    case 'SET_EXPRESSION': {
      return _.assign({}, state, {
        expression: action.expression,
      });
    }

    default: {
      return state;
    }
  }
};