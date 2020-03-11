import { UserState } from './users/UserTypes';
import { BookmarkState } from './bookmarks/BookmarkTypes';

export interface StoreState {
	users: UserState;
	bookmarks: BookmarkState;
}
