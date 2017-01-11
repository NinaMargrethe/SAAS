import React, { Component } from 'react';

import SearchBar from '../containers/searchContainer';
import SearchList from '../containers/searchList';
import AlbumList from '../containers/albumList';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <SearchList />
        <AlbumList />
      </div>
    );
  }
}
