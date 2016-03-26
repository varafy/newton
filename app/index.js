/**
 * Created by jsharp on 2016-03-25.
 *
 *      Varafy Inc.
 *
 */

'use strict';
import React from 'react';
import { render } from 'react-dom';
import Hello from './components/Hello';

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Hello />,
    document.getElementById('app')
  );
});