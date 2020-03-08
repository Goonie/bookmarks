export type BookmarkState = Bookmark[];

export type BookmarkAction = FetchBookmarksAction | UpdateAllBookmarksAction;

export interface Bookmark {
	id: string;
	name: string;
	url: string;
}

export const FETCH_BOOKMARKS = 'FETCH_BOOKMARKS';
export const UPDATE_ALL_BOOKMARKS = 'UPDATE_ALL_BOOKMARKS';

export interface FetchBookmarksAction {
	type: typeof FETCH_BOOKMARKS;
}

export interface UpdateAllBookmarksAction {
	type: typeof UPDATE_ALL_BOOKMARKS;
	payload: Bookmark[];
}
