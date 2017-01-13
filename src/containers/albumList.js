import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Image, Row, Button, Glyphicon, Thumbnail } from 'react-bootstrap';
import { deleteAlbum } from '../actions/index';

class AlbumList extends Component{
    constructor(props){
        super(props);

        this.renderAlbumList = this.renderAlbumList.bind(this);
    }

    render(){
        return(
            <Row>
              {this.props.albums.map(this.renderAlbumList)}
            </Row>
        );
    }

    renderAlbumList(album, counter){
        return(
            <Col md={3} sm={6} key={ counter }>
                <Thumbnail>
                    <a target="_blank" href={ album.id }>
                        <Image src={ album.images[1].url } alt={ album.name } responsive circle />
                    </a>
                    <h4>{ album.name }</h4>
                    <p>
                        <a target="_blank" href={ album.id }>
                            <Button bsStyle="default">
                                Se Album
                            </Button>
                        </a>&nbsp;
                        <Button bsStyle="danger" onClick={this.onDeleteAlbumClick.bind(this, album)}>
                            <Glyphicon glyph="remove"/>
                        </Button>
                    </p>
                </Thumbnail>
            </Col>

        )
    }

    onDeleteAlbumClick(album) {
        this.props.deleteAlbum(album);
    }
}

function mapStateToProps({albums}) {
    return { albums };
}


export default connect(mapStateToProps, { deleteAlbum })(AlbumList);