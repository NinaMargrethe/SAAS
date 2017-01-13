import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { addAlbum, searchAlbums } from '../actions/index';
import { Image, Row, Col, Thumbnail, Grid, Pagination } from 'react-bootstrap';


const IMAGE_SIZE_SMALL = { min: 50, max: 100 };
const IMAGE_SIZE_MEDIUM = { min: 100, max: 400 };
const IMAGE_SIZE_LARGE =  { min: 400, max: 800 };

class SearchList extends Component {

    constructor(props){
        super(props);

        this.state = {
            activePage: 1
        };

        this.renderSearchResult = this.renderSearchResult.bind(this);
    }

    render() {
        // Fetch all results from search
        const { searchResult, query } = this.props;

        if(!searchResult) return null;

        console.log(searchResult);

        // Fetching the links for next and previous 20 results as well as
        // id, name, artists and images for the current viewed albums
        const { next, previous, offset, limit, total } = searchResult.albums;
        const totalNumberOfLinks = _.ceil(total/limit);

        const albums = searchResult.albums.items.map(album => {
            const id = album.external_urls.spotify;
            const name = album.name;
            const artists = album.artists.map((artist)=> artist.name);
            const images = album.images;
            return {
                id, name, artists, images
            };
        });



        const noAlbumsFoundJSX = (
            <p>No results.</p>
        );

        const someAlbumsFoundJSX = (
            <div>
                <Grid fluid>
                    <Row>
                        { albums.map(this.renderSearchResult) }
                    </Row>
                </Grid>
                <div className="text-center">
                    <Pagination
                        prev
                        next
                        first
                        last
                        boundaryLinks
                        items={totalNumberOfLinks}
                        maxButtons={5}
                        activePage={this.state.activePage}
                        onSelect={this.onPageSelect.bind(this, query, limit)} />
                </div>
            </div>
        );

        if(albums.length == 0) {
            return noAlbumsFoundJSX;
        } else {
            return someAlbumsFoundJSX;
        }
    }

    renderSearchResult(album, counter) {

        // Convert list of artist to one string
        const artistAsString = album.artists.join(', ');
        // Try to find icon for album
        const img = _.find(album.images, function(image) {
            return image.width >= IMAGE_SIZE_SMALL.min && image.width < IMAGE_SIZE_SMALL.max;
        }) ;


        return (
            <Col key={ counter } md={6}>
                <Thumbnail className="search-result" href="#" onClick={this.onAlbumClick.bind(this, album)}>
                    { img &&  <Image src={ img.url } thumbnail /> }
                    <p><b>{ artistAsString }</b></p>
                    <p>{ album.name }</p>
                </Thumbnail>
            </Col>
        );
    }

    onPageSelect(query, limit, pageNumber) {
        const offset = limit * (pageNumber - 1);
        this.setState({ activePage: pageNumber })
        this.props.searchAlbums(query, offset);
    }

    onAlbumClick(album) {
        this.props.addAlbum(album);
    }
}

function mapStateToProps(state) {
    return {
        searchResult : state.search.searchResult,
        query : state.search.query
    };
}

export default connect(mapStateToProps, { addAlbum, searchAlbums })(SearchList);
