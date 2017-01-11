import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchAlbums} from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { album: ''};

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    render(){
        return (
            <form className="input-group" onSubmit={this.onSubmit}>
                <input
                    placeholder="Search"
                    className="form-control"
                    autoFocus="true"
                    value={this.state.album}
                    onChange={this.onChange}
                    />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>

        );
    }

    onChange(event){
        this.setState({album: event.target.value})
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