import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    email: '',
    password: '',
    message: '',
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.password = 'foo') {
      this.setState({
        message: 'Success! Welcome :)',
      });
    } else {
      this.setState({
        message: 'Oops! Check your credentials :(',
      });
    }
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
        {this.state.message && <p id="message">{this.state.message}</p>}
      </form>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);