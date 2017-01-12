import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {addAlbum} from '../actions/index';

class SearchList extends Component {

    constructor(props){
        super(props);
        this.renderSearchResult = this.renderSearchResult.bind(this);
    }

    render() {
        if(!this.props.searchResult) return null;

        const albums = this.props.searchResult.albums.items.map(album => {
            const images = album.images;
            const name = album.name;
            return {
                images, name
            };
        });

        return (
            <div id="search-list" className="row">
                <ul className="list-group">
                    { albums.map(this.renderSearchResult) }
                </ul>
            </div>
        );
    }

    renderSearchResult(album, counter) {
        return (
            <li onClick={this.onAlbumClick.bind(this, album)} key={ counter } className="list-group-item clearfix vertical-align">
                <a href="#">
                    <img className="img-responsive" src={ album.images[2].url } />
                    <span>{ album.name }</span>
                </a>
            </li>
        );
    }

    onAlbumClick(album){
        this.props.addAlbum(album);
    }
}

function mapStateToProps(state) {
    return {
        searchResult : state.search.searchResult
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addAlbum}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
