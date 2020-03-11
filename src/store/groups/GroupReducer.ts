import { Reducer } from 'redux';

import { GroupState, GroupAction, UPDATE_ALL_GROUPS } from './GroupTypes';

export const initialGroupState = [];

export const groupReducer: Reducer<GroupState, GroupAction> = (
	state = initialGroupState,
	action
) => {
	switch (action.type) {
		case UPDATE_ALL_GROUPS:
			return action.payload;

		default:
			return state;
	}
};
