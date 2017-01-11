import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchList extends Component {

    render() {
        if(!this.props.searchResult) return null;

        const albums = this.props.searchResult.albums.items.map(album => album.name) ;
        console.log("Albums: ", albums);

        return (
            <ul className="list-group">
                { albums.map(this.renderSearchResult) }
            </ul>
        );
    }

    renderSearchResult(album, counter) {
        return (
            <li key={ counter } className="list-group-item">
                { album }
            </li>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchResult : state.search.searchResult
    };
}

export default connect(mapStateToProps)(SearchList);
