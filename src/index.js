import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const THE_MAGIC_NUMBER = 42;

class Greeting extends React.Component {
  static defaultProps = {
    name: 'World',
  };

  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <h2>This is a subtitle!</h2>
        <p>2 + 2 equals {2 + 2}</p>
        <p>The meaning of life is {THE_MAGIC_NUMBER}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Greeting name="General Kenobi" />,
  document.getElementById('root')
);