import React from 'react';
import { connect } from 'react-redux';
import { getRepos } from '../actions';

const mapStateToProps = (state, ownProps) => {
    const { users, query } = state;
    return { users, query };
};

const mapDispatchToProps = {
    getRepos,
};


class UserList extends React.Component {
    fetchRepos = (e) => {
        const { username } = e.currentTarget.dataset;
        const { getRepos } = this.props;

        getRepos(username);
    }

    render() {
        const { users, query } = this.props;

        if (!query) { return null; }

        if (!users || !users.length) {
            return (
                <p>Sorry, I couldn't find anything :(</p>
            )
        }

        return (
            <ul>
                {users.map(u => (
                    <li key={u.id} onClick={this.fetchRepos} data-username={u.login}>{u.login}</li>
                ))}
            </ul>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserList);
