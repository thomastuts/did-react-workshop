import ReactDOM from 'react-dom';
import React from 'react';

import designers from './data/designers';
import Designer from './components/Designer/Designer';
import Card from './components/Card/Card';

import './index.css';

class App extends React.Component {
  state = {
    likedDesigners: [],
  };

  handleToggleLikedStatusForDesigner = (designerId) => {
    if (this.state.likedDesigners.includes(designerId)) {
      this.setState({
        likedDesigners: this.state.likedDesigners.filter(id => id !== designerId),
      });
    } else {
      this.setState({
        likedDesigners: [
          ...this.state.likedDesigners,
          designerId,
        ],
      });
    }
  };

  render() {
    return (
      <div className="app">
        {designers.map(designer => (
          <Card key={designer.id}>
            <Designer
              designer={designer}
              isLiked={this.state.likedDesigners.includes(designer.id)}
              onToggleLikedStatus={() => this.handleToggleLikedStatusForDesigner(designer.id)}
            />
          </Card>
        ))}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);