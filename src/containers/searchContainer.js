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
            <nav id="search-bar" className="navbar navbar-default">
                <div className="container-fluid">
                    <form className="navbar-form navbar-left" role="search" onSubmit={this.onSubmit}>
                            <input type="text"
                                   placeholder="Enter album ..."
                                   className="form-control"
                                   autoFocus="true"
                                   value={this.state.album}
                                   onChange={this.onChange}
                            />
                        <button type="submit" className="btn btn-default">Search</button>
                    </form>
                </div>
            </nav>
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