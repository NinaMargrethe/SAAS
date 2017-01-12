import React, { Component } from 'react';
import { connect } from 'react-redux';

class AlbumList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
          <div className="row">
              {this.props.albums.map(this.renderAlbumList)}
          </div>

        );
    }

    renderAlbumList(album, counter){
        return(
            <div className="col-md-4" key={counter}>
                <img src={album.images[1].url} alt={album.name} className="img-responsive"/>
            </div>
        )
    }
}

function mapStateToProps({albums}) {
    return { albums };
}

export default connect(mapStateToProps)(AlbumList);