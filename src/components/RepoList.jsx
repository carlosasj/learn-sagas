import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    const { repos, currentUser } = state;
    return { repos, currentUser };
};


class RepoList extends React.Component {
    render() {
        const { repos, currentUser } = this.props;

        if (!currentUser) { return null; }

        if (!repos || !repos.length) {
            return (
                <p>Hum... Looks like this user don't have any repo :(</p>
            )
        }

        return (
            <ul>
                {repos.map(r => (
                    <li key={r.id}>
                        <a href={r.html_url} target="_blank">{r.name}</a>
                    </li>
                ))}
            </ul>
        );
    }
}

export default connect(
    mapStateToProps,
)(RepoList);
