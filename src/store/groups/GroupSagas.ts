import { takeEvery, call, put } from 'redux-saga/effects';

import { FETCH_GROUPS } from './GroupTypes';
import { fetchGroups } from './GroupApi';
import { updateAllGroups } from './GroupActions';

export function* groupSagas() {
	yield takeEvery(FETCH_GROUPS, fetchGroupsSaga);
}

export function* fetchGroupsSaga() {
	const groups = yield call(fetchGroups);
	yield put(updateAllGroups(groups));
}
