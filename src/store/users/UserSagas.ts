import { takeEvery, call, put } from 'redux-saga/effects';

import { FETCH_USERS } from './UserTypes';
import { fetchUsers } from './UserApi';
import { updateAllUsers } from './UserActions';

export function* userSagas() {
	yield takeEvery(FETCH_USERS, fetchUsersSaga);
}

export function* fetchUsersSaga() {
	const users = yield call(fetchUsers);
	yield put(updateAllUsers(users));
}
