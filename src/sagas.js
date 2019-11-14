import { takeLatest, all, call, put } from "@redux-saga/core/effects"
import {
    GITHUB_SEARCH_USERS,
    GITHUB_SEARCH_USERS_SUCCESS,
    GITHUB_SEARCH_USERS_FAILURE,
    GITHUB_GET_REPOS,
    GITHUB_GET_REPOS_SUCCESS,
    GITHUB_GET_REPOS_FAILURE,
} from "./constants"
import { searchUsers, getRepos } from "./fetchs";


// export function* helloSaga() {
//     console.log('Hello Sagas!')
// }

function* fetchUsers({ payload }) {
    const { query } = payload;
    try {
        const
        const resp = yield call(searchUsers, query);
        yield put({
            type: GITHUB_SEARCH_USERS_SUCCESS,
            payload: {
                users: resp.items.map(i => {
                    const { id, login } = i;
                    return { id, login };
                }),
            },
        });
    } catch ({ message, status }) {
        yield put({
            type: GITHUB_SEARCH_USERS_FAILURE,
            payload: {
                users: [],
            },
        })
    }
}

function* fetchRepos({ payload }) {
    const { username } = payload;
    try {
        const resp = yield call(getRepos, username);
        yield put({
            type: GITHUB_GET_REPOS_SUCCESS,
            payload: {
                repos: resp.map(i => {
                    const { id, name, html_url } = i;
                    return { id, name, html_url };
                }),
            },
        });
    } catch ({ message, status }) {
        yield put({
            type: GITHUB_GET_REPOS_FAILURE,
            payload: {
                repos: [],
            },
        })
    }
}

export function* rootSaga() {
    yield all([
        takeLatest(GITHUB_SEARCH_USERS, fetchUsers),
        takeLatest(GITHUB_GET_REPOS, fetchRepos),
    ]);
}
