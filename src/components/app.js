import React, { Component } from 'react';

import AlbumList from '../containers/albumList';
import SearchOverlay from '../containers/searchOverlay';

export default class App extends Component {

    render() {
        return (
            <div>
                <SearchOverlay />
                <AlbumList />
            </div>
        );
    }
}
