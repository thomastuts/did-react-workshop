import React from 'react';
import ReactDOM from 'react-dom';

const THE_MAGIC_NUMBER = 42;

function Greeting() {
  return (
    <div>
      <h1>Hello world!</h1>
      <h2>This is a subtitle!</h2>
      <p>2 + 2 equals {2 + 2}</p>
      <p>The meaning of life is {THE_MAGIC_NUMBER}</p>
    </div>
  );
}

ReactDOM.render(
  <Greeting />,
  document.getElementById('root')
);