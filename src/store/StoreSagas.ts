import { spawn } from 'redux-saga/effects';

import { bookmarkSagas } from './bookmarks/BookmarkSagas';

export function* storeSagas() {
	yield spawn(bookmarkSagas);
}
