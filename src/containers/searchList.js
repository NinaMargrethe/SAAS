import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchList extends Component {

    render() {
        if(!this.props.searchResult) return null;

        const albums = this.props.searchResult.albums.items.map(album => {
            const url = album.images[2].url;
            const name = album.name;
            return {
                url, name
            };
        });

        console.log("Albums: ", albums);

        return (
            <div className="row">
                <ul className="list-group">
                    { albums.map(this.renderSearchResult) }
                </ul>
            </div>
        );
    }

    renderSearchResult(album, counter) {
        return (
            <li key={ counter } className="list-group-item clearfix vertical-align">
                <img className="img-responsive" src={ album.url } />
                <span>{ album.name }</span>
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
