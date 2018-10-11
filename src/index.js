import ReactDOM from 'react-dom';
import React from 'react';

import designers from './data/designers';
import Designer from './components/Designer/Designer';
import Card from './components/Card/Card';

import './index.css';

class App extends React.Component {
  // TODO: add state property to keep track of all liked designers
  // TODO: implement method to toggle liked status for one designer

  render() {
    return (
      <div className="app">
        {/*TODO: map the designers and add the <Designer /> component with all the right props below.
        Wrap the Designer component in a Card component.*/}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);