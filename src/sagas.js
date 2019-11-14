import { takeLatest, all, call, put } from "@redux-saga/core/effects"
import { GITHUB_SEARCH_USERS, GITHUB_SEARCH_USERS_SUCCESS, GITHUB_SEARCH_USERS_FAILURE } from "./constants"
import { searchUsers } from "./fetchs";


// export function* helloSaga() {
//     console.log('Hello Sagas!')
// }

function* fetchUsers({ payload }) {
    const { query } = payload;
    try {
        const resp = yield call(searchUsers, query);
        yield put({
            type: GITHUB_SEARCH_USERS_SUCCESS,
            payload: {
                users: resp.items,
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

export function* rootSaga() {
    yield all([
        takeLatest(GITHUB_SEARCH_USERS, fetchUsers),
    ]);
}
