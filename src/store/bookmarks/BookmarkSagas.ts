import { takeEvery, call, put } from 'redux-saga/effects';

import { FETCH_BOOKMARKS } from './BookmarkTypes';
import { fetchBookmarks } from './BookmarkApi';
import { updateAllBookmarks } from './BookmarkActions';

export function* bookmarkSagas() {
	yield takeEvery(FETCH_BOOKMARKS, fetchBookmarksSaga);
}

export function* fetchBookmarksSaga() {
	const bookmarks = yield call(fetchBookmarks);
	yield put(updateAllBookmarks(bookmarks));
}
