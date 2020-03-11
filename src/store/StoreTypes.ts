import { UserState } from './users/UserTypes';
import { GroupState } from './groups/GroupTypes';
import { BookmarkState } from './bookmarks/BookmarkTypes';

export interface StoreState {
	users: UserState;
	groups: GroupState;
	bookmarks: BookmarkState;
}
