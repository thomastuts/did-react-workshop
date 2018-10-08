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

  state = {
    secondsSinceMount: 0,
    isLoggedIn: false,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return {
          secondsSinceMount: state.secondsSinceMount + 1,
        };
      });
    }, 1000);
  }

  componentDidUpdate() {
    console.log('Greeting component was updated');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.secondsSinceMount % 2 === 0;
  }

  handleClickButton = (event) => {
    event.persist();
    console.log('I have been clicked!', event);
  };

  render() {
    let authButton;

    if (this.state.isLoggedIn) {
      authButton = (
        <button>Log out</button>
      );
    } else {
      authButton = (
        <button>Log in</button>
      );
    }

    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <h2>This is a subtitle!</h2>
        <p>2 + 2 equals {2 + 2}</p>
        <p>The meaning of life is {THE_MAGIC_NUMBER}</p>
        <p>It has been {this.state.secondsSinceMount} seconds since this component was mounted.</p>
        <button onClick={this.handleClickButton}>Click me!</button>
        {authButton}
      </div>
    );
  }
}

ReactDOM.render(
  <Greeting name="General Kenobi" />,
  document.getElementById('root')
);