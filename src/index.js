import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${this.state.email}, password: ${this.state.password}`);
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Email address:
            <br/>
            <input type="email" name="email" onChange={this.handleInputChange} value={this.state.email} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <br/>
            <input type="password" name="password" onChange={this.handleInputChange} value={this.state.password} />
          </label>
        </div>
        <button type="submit">Log in</button>
      </form>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);