import { combineReducers } from 'redux';

import { appReducer } from './app/AppReducer';
import { userReducer } from './users/UserReducer';
import { bookmarkReducer } from './bookmarks/BookmarkReducer';

export const storeReducer = combineReducers({
	app: appReducer,
	users: userReducer,
	bookmarks: bookmarkReducer
});
