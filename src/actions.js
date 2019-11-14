import { GITHUB_GET_REPOS, GITHUB_SEARCH_USERS } from './constants';

export function searchUsers(query) {
    return {
        type: GITHUB_SEARCH_USERS,
        payload: {
            query,
        }
    }
}

export function getRepos(username) {
    return {
        type: GITHUB_GET_REPOS,
        payload: {
            username,
        }
    }
}
