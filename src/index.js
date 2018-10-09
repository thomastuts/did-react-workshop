import ReactDOM from 'react-dom';
import React from 'react';

import designers from './data/designers';

class App extends React.Component {
  state = {
    filter: 'all',
  };

  handleChangeFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    let filteredDesigners = designers;

    switch (this.state.filter) {
      case 'alive':
        filteredDesigners = designers.filter(designer => !designer.deathYear);
        break;
      case 'dead':
        filteredDesigners = designers.filter(designer => designer.deathYear);
        break;
      // no default
    }

    return (
      <div>
        {['all', 'alive', 'dead'].map(filter => (
          <label key={filter}>
            <input
              type="radio"
              name="filter"
              value={filter}
              checked={this.state.filter === filter}
              onChange={this.handleChangeFilter}
            />
            {filter}
          </label>
        ))}

        <ul>
          {filteredDesigners.map(designer => (
            <li key={designer.id} style={{ color: designer.favoriteColor }}>
              {designer.name} ({designer.birthYear}{designer.deathYear && `-${designer.deathYear}`})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);