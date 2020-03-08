import { Reducer } from 'redux';

import { BookmarkState, BookmarkAction } from './BookmarkTypes';
import { UPDATE_ALL_BOOKMARKS } from './BookmarkTypes';

export const initialBookmarkState = [];

export const bookmarkReducer: Reducer<BookmarkState, BookmarkAction> = (
	state = initialBookmarkState,
	action
) => {
	switch (action.type) {
		case UPDATE_ALL_BOOKMARKS:
			return action.payload;

		default:
			return state;
	}
};
