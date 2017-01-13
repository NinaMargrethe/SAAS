import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Image, Row } from 'react-bootstrap';

class AlbumList extends Component{
    constructor(props){
        super(props);
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
            <Col md={3} sm={6} key={counter}>
                <a target="_blank" href={ album.id }>
                    <Image src={ album.images[1].url } alt={ album.name } responsive circle />
                    { album.name }
                </a>
            </Col>
        )
    }
}

function mapStateToProps({albums}) {
    return { albums };
}

export default connect(mapStateToProps)(AlbumList);