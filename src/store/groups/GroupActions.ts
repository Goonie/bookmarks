import { ActionCreator } from 'redux';

import { GroupAction, FETCH_GROUPS, UPDATE_ALL_GROUPS } from './GroupTypes';

export const fetchGroups: ActionCreator<GroupAction> = () => ({
	type: FETCH_GROUPS
});

export const updateAllGroups: ActionCreator<GroupAction> = groups => ({
	type: UPDATE_ALL_GROUPS,
	payload: groups
});
