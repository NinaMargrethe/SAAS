import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactModal from 'react-modal';

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
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.handleOpenModal}>
                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                </button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Search for album photos and add them to your album view."
                    onRequestClose={this.handleCloseModal}
                >
                    <SearchBar />
                    <SearchList />
                    <button className="btn btn-primary" onClick={this.handleCloseModal}>
                        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                    </button>
                </ReactModal>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchOverlay);