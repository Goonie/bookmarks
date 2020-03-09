export type UserState = User[];

export type UserAction = FetchUsersAction | UpdateAllUsersAction;

export interface User {
	id: string;
	uid: string;
	name: string;
}

export const FETCH_USERS = 'FETCH_USERS';
export const UPDATE_ALL_USERS = 'UPDATE_ALL_USERS';

export interface FetchUsersAction {
	type: typeof FETCH_USERS;
}

export interface UpdateAllUsersAction {
	type: typeof UPDATE_ALL_USERS;
	payload: User[];
}
