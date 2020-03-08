import { ActionCreator } from 'redux';

import {
	BookmarkAction,
	FETCH_BOOKMARKS,
	UPDATE_ALL_BOOKMARKS
} from './BookmarkTypes';

export const fetchBookmarks: ActionCreator<BookmarkAction> = () => ({
	type: FETCH_BOOKMARKS
});

export const updateAllBookmarks: ActionCreator<BookmarkAction> = bookmarks => ({
	type: UPDATE_ALL_BOOKMARKS,
	payload: bookmarks
});
