import { combineReducers } from 'redux';

import { bookmarkReducer } from './bookmarks/BookmarkReducer';

export const storeReducer = combineReducers({
	bookmarks: bookmarkReducer
});
