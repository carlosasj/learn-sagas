import * as constants from './constants';
import { combineReducers } from 'redux';
import immutable from 'immutability-helper';


export const appState = {
    users: {
        query: '',
        result: [],
        status: STATUS.IDLE,
    },

    repos: {
        currentUser: undefined,
        result: [],
        status: STATUS.IDLE,
    }

};

export const reducer = (state = appState, { type, payload }) => {
    switch (type) {
        case constants.GITHUB_SEARCH_USERS:
            return searchUsers(state, payload);

        case constants.GITHUB_SEARCH_USERS_SUCCESS:
        case constants.GITHUB_SEARCH_USERS_FAILURE:
        case constants.GITHUB_GET_REPOS_SUCCESS:
        case constants.GITHUB_GET_REPOS_FAILURE:
            return merge(state, payload);

        case constants.GITHUB_GET_REPOS:
            return getRepos(state, payload, );

        default:
            return state;
    }
};

function searchUsers(state, { query }) {
    return immutable(state, {
        users: {
            query: { $set: query },
            result: { $set: [] },
        }
    });
}

function getRepos(state, payload) {
    const { username } = payload;
    return {
        ...state,
        repos: {
            ...state.repos,
            currentUser,
            result: [],
        }
    };
}

function setUserStatus(state, status) {
    return {
        ...state,
        user: {

        }
    }
}

function merge(state, payload) {
    return {
        ...state,
        ...payload,
    };
}
