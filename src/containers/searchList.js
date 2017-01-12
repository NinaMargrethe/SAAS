import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAlbum } from '../actions/index';
import { Image, Row, Col, Thumbnail, Grid } from 'react-bootstrap';

class SearchList extends Component {

    constructor(props){
        super(props);
        this.renderSearchResult = this.renderSearchResult.bind(this);
    }

    render() {
        if(!this.props.searchResult) return null;

        console.log(this.props.searchResult);

        const albums = this.props.searchResult.albums.items.map(album => {
            const images = album.images;
            const artists = album.artists.map((artist)=> artist.name);
            const name = album.name;
            const id = album.external_urls.spotify;
            return {
                id, name, artists, images
            };
        });

        return (
            <Grid fluid>
                <Row>
                    { albums.map(this.renderSearchResult) }
                </Row>
            </Grid>
        );
    }

    renderSearchResult(album, counter) {

        const artistAsString = album.artists.join(', ');

        return (
            <Col key={ album.id } md={6}>
                <Thumbnail className="search-result" href="#" onClick={this.onAlbumClick.bind(this, album)}>
                    <Image src={ album.images[2].url } thumbnail />
                    <p><b>{ artistAsString }</b></p>
                    <p>{ album.name }</p>
                </Thumbnail>
            </Col>
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
