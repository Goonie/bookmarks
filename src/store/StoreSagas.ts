import { spawn } from 'redux-saga/effects';

import { userSagas } from './users/UserSagas';
import { bookmarkSagas } from './bookmarks/BookmarkSagas';

export function* storeSagas() {
	yield spawn(userSagas);
	yield spawn(bookmarkSagas);
}
