# Examples

I'll be copying some of the exercises I've been doing on codecademy into this document.

React:

import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(
  (person, i) => <li key={'person_' + i}>{person}</li>
);

ReactDOM.render(
  <ul>{peopleLis}</ul>, document.getElementById('app')
);
