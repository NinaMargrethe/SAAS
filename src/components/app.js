import React, { Component } from 'react';

import SearchBar from '../containers/searchContainer';
import SearchList from '../containers/searcList';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <SearchList />
      </div>
    );
  }
}
