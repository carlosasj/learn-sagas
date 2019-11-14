import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
    const { currentUser: username } = state;
    return ({ username });
};


function Username({ username }) {
    return ( username ? <p>{username}</p> : null );
}

export default connect(
    mapStateToProps,
)(Username);
