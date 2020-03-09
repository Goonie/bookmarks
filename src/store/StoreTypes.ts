import { AppState } from './app/AppTypes';
import { UserState } from './users/UserTypes';
import { BookmarkState } from './bookmarks/BookmarkTypes';

export interface StoreState {
	app: AppState;
	users: UserState;
	bookmarks: BookmarkState;
}
