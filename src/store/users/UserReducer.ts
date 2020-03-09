import { Reducer } from 'redux';

import { UserState, UserAction, UPDATE_ALL_USERS } from './UserTypes';

export const initialUserState = [];

export const userReducer: Reducer<UserState, UserAction> = (
	state = initialUserState,
	action
) => {
	switch (action.type) {
		case UPDATE_ALL_USERS:
			return action.payload;

		default:
			return state;
	}
};
