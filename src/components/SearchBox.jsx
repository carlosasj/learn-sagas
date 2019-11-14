import React from 'react';
import { connect } from 'react-redux';
import { searchUsers } from '../actions';

const mapDispatchToProps = {
    searchUsers,
};


class SearchBox extends React.Component {
    state = {
        query: '',
    };

    render() {
        const { query } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={this.onQueryChange}
                />
                <button type="submit">Search</button>
            </form>
        );
    }

    onQueryChange = event => { this.setState({ query: event.target.value }); }
    onSubmit = e => {
        e.preventDefault();
        const { query } = this.state;
        this.props.searchUsers(query);
    }
}

export default connect(
    null,
    mapDispatchToProps,
)(SearchBox);
