import { ActionCreator } from 'redux';

import { UserAction, FETCH_USERS, UPDATE_ALL_USERS } from './UserTypes';

export const fetchUsers: ActionCreator<UserAction> = () => ({
	type: FETCH_USERS
});

export const updateAllUsers: ActionCreator<UserAction> = users => ({
	type: UPDATE_ALL_USERS,
	payload: users
});
