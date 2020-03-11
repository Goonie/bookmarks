import { combineReducers } from 'redux';

import { userReducer } from './users/UserReducer';
import { groupReducer } from './groups/GroupReducer';
import { bookmarkReducer } from './bookmarks/BookmarkReducer';

export const storeReducer = combineReducers({
	users: userReducer,
	groups: groupReducer,
	bookmarks: bookmarkReducer
});
