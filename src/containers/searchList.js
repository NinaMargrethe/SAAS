import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { addAlbum, searchAlbumsFromLink } from '../actions/index';
import { Image, Row, Col, Thumbnail, Grid, Pager } from 'react-bootstrap';


const IMAGE_SIZE_SMALL = { min: 50, max: 100 };
const IMAGE_SIZE_MEDIUM = { min: 100, max: 400 };
const IMAGE_SIZE_LARGE =  { min: 400, max: 800 };

class SearchList extends Component {

    constructor(props){
        super(props);
        this.renderSearchResult = this.renderSearchResult.bind(this);
    }

    render() {
        // Fetch all results from search
        const { searchResult } = this.props;

        if(!searchResult) return null;

        // Fetching the links for next and previous 20 results as well as
        // id, name, artists and images for the current viewed albums
        const nextLink = searchResult.albums.next;
        const prevLink = searchResult.albums.previous;
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
                <Pager>
                    <Pager.Item previous disabled={ !prevLink } onSelect={this.onPrevLinkClink.bind(this, prevLink )} >&larr; Previous</Pager.Item>
                    <Pager.Item next disabled={ !nextLink } onSelect={this.onNextLinkClick.bind(this, nextLink )} >Next &rarr;</Pager.Item>
                </Pager>
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

    onAlbumClick(album) {
        this.props.addAlbum(album);
    }

    onNextLinkClick(link) {
        this.props.searchAlbumsFromLink(link);
    }

    onPrevLinkClink(link) {
        this.props.searchAlbumsFromLink(link);
    }
}

function mapStateToProps(state) {
    return {
        searchResult : state.search.searchResult
    };
}

export default connect(mapStateToProps, { addAlbum, searchAlbumsFromLink })(SearchList);
