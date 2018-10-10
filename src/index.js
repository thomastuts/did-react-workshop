import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    people: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({
      loading: true,
    });

    fetch('https://swapi.co/api/people')
      .then(response => response.json())
      .then((response) => {
        this.setState({
          people: response.results,
          loading: false,
        });
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <p>Loading data...</p>
      );
    }

    return (
      <ul>
        {this.state.people.map(person => (
          <li key={person.url}>{person.name}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);