/**
 * Created by jsharp on 2016-03-25.
 *
 *      Varafy Inc.
 *
 */

'use strict';
import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './components/App';

const store = configureStore();
document.addEventListener('DOMContentLoaded', () => {
  render(
    //=<Provider store={store}>
      <App store={store} />,
    //</Provider>,
    document.getElementById('app')
  );

  store.subscribe(() => {
    render(
      //=<Provider store={store}>
      <App store={store} />,
      //</Provider>,
      document.getElementById('app')
    );
  });
});