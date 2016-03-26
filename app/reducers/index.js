/**
 * Created by jsharp on 2016-03-25.
 *
 *      Varafy Inc.
 *
 */

const initialState = {
  expression: null
};

module.exports = function (state = initialState, action) {
  switch (action.type) {
    case 'SET_EXPRESSION': {
      state.expression = action.expression;
      break;
    }

    default: {
      return state;
    }
  }
};