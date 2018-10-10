import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label>
            Email address:
            <br/>
            <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <br/>
            <input type="password" name="password" />
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