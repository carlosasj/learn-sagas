import { GITHUB_GET_REPOS, GITHUB_SEARCH_USERS, GITHUB_SEARCH_USERS_SUCCESS, GITHUB_SEARCH_USERS_FAILURE } from './constants';

export const appState = {
    query: '',
    users: [],

    currentUser: undefined,
    repos: [],
};

export const reducer = (state = appState, { type, payload }) => {
    switch (type) {
        case GITHUB_SEARCH_USERS:
            return searchUsers(state, payload);

        case GITHUB_SEARCH_USERS_SUCCESS:
        case GITHUB_SEARCH_USERS_FAILURE:
            return merge(state, payload);

        case GITHUB_GET_REPOS:
            return getRepos(state, payload);

        default:
            return state;
    }
};

function searchUsers(state, payload) {
    const { query } = payload;
    console.log('GITHUB_SEARCH_USERS:', query);

    return {
        ...state,
        query,
    };
}

function getRepos(state, payload) {
    const { username } = payload;
    console.log('GITHUB_GET_REPOS:', username);

    return {
        ...state,
        currentUser: username,
    };
}

function merge(state, payload) {
    return {
        ...state,
        ...payload,
    };
}
