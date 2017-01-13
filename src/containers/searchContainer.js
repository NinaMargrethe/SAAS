import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchAlbums } from '../actions/index';
import { Navbar, FormGroup, FormControl, Button, InputGroup, Glyphicon } from 'react-bootstrap';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { album: ''};

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render(){

        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <p>Finn Album</p>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form>
                        <form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <InputGroup bsSize="lg">
                                    <FormControl
                                        inputRef={ref => { this.searchBar = ref; }}
                                        onChange={this.onChange}
                                        type="text"
                                    />
                                    <InputGroup.Addon>
                                        <Glyphicon glyph="search" />
                                    </InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                        </form>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }

    onChange(){
        const value = ReactDOM.findDOMNode(this.searchBar).value;
        this.setState({album: value})
    }

    onSubmit(event){
        event.preventDefault();
        this.props.searchAlbums(this.state.album);
        this.setState({album: ''})
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({searchAlbums}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);