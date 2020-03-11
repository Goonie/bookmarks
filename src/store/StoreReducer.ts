import { combineReducers } from 'redux';

import { userReducer } from './users/UserReducer';
import { bookmarkReducer } from './bookmarks/BookmarkReducer';

export const storeReducer = combineReducers({
	users: userReducer,
	bookmarks: bookmarkReducer
});
