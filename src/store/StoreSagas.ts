import { spawn } from 'redux-saga/effects';

import { userSagas } from './users/UserSagas';
import { groupSagas } from './groups/GroupSagas';
import { bookmarkSagas } from './bookmarks/BookmarkSagas';

export function* storeSagas() {
	yield spawn(userSagas);
	yield spawn(groupSagas);
	yield spawn(bookmarkSagas);
}
