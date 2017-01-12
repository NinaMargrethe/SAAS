import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearSearch } from '../actions/index';
import { Jumbotron, Button, Glyphicon, Modal, ModalHeader, ModalBody } from 'react-bootstrap';

import SearchBar from '../containers/searchContainer';
import SearchList from '../containers/searchList';


class SearchOverlay extends Component {

    constructor (props) {
        super(props);

        // Overlay should not be shown at start
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
        // Clear search field when closing modal
        this.props.clearSearch();
    }

    render() {

        const { albums } = this.props;
        const noAlbums = !albums || albums.length == 0;

        const noAlbumsJSX = (
            <Jumbotron className="search-jumbotron">
                <h1>OBS!</h1>
                <p>
                    Det ser ikke ut til at du har lagt inn noen <i>album</i> enda.<br/>
                    Gjør ditt første søk her:<br/><br/>
                    <Button bsStyle="primary" bsSize="large" onClick={this.handleOpenModal} >
                        <Glyphicon glyph="search" />
                    </Button>
                </p>
            </Jumbotron>
        );

        const someAlbumsJSX = (
            <div className="search-overlay-container">
                <Button bsSize="large" bsStyle="default" onClick={this.handleOpenModal}>
                    <Glyphicon glyph="search" /> Finn Album
                </Button>
                <hr/>
                <Modal
                    show={this.state.showModal}
                    onHide={this.handleCloseModal}
                    contentLabel="Search for album photos and add them to your album view.">
                    <ModalHeader closeButton>
                        <SearchBar/>
                    </ModalHeader>
                    <ModalBody>
                        <SearchList/>
                    </ModalBody>
                </Modal>
            </div>
        );

        if(noAlbums && !this.state.showModal) {
            return noAlbumsJSX;
        } else {
            return someAlbumsJSX;
        }
    }
}

function mapStateToProps({ albums, search }) {
    return { albums, search };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ clearSearch }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchOverlay);