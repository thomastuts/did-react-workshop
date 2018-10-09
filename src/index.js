import ReactDOM from 'react-dom';
import React from 'react';

import designers from './data/designers';

ReactDOM.render(
  (
    <ul>
      {designers.map(designer => (
        <li key={designer.id} style={{ color: designer.favoriteColor }}>
          {designer.name} ({designer.birthYear}{designer.deathYear && `-${designer.deathYear}`})
        </li>
      ))}
    </ul>
  ),
  document.getElementById('root')
);