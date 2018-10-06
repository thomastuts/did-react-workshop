import React from 'react';
import ReactDOM from 'react-dom';

const THE_MAGIC_NUMBER = 42;

// Without JSX
//ReactDOM.render(
//  React.createElement(
//    'div',
//    {},
//    React.createElement('h1', {}, 'Hello world!'),
//    React.createElement('h2', {}, 'This is a subtitle!'),
//    React.createElement('p', {}, `2 + 2 equals ${2 + 2}`),
//    React.createElement('p', {}, `The meaning of life is ${THE_MAGIC_NUMBER}`),
//  ),
//  document.getElementById('root')
//);

// With JSX
ReactDOM.render(
  (
    <div>
      <h1>Hello world!</h1>
      <h2>This is a subtitle!</h2>
      <p>2 + 2 equals {2 + 2}</p>
      <p>The meaning of life is {THE_MAGIC_NUMBER}</p>
    </div>
  ),
  document.getElementById('root')
);