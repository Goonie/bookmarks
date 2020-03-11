export type GroupState = Group[];

export type GroupAction = FetchGroupsAction | UpdateAllGroupsAction;

export interface Group {
	id: string;
	name: string;
}

export const FETCH_GROUPS = 'FETCH_GROUPS';
export const UPDATE_ALL_GROUPS = 'UPDATE_ALL_GROUPS';

export interface FetchGroupsAction {
	type: typeof FETCH_GROUPS;
}

export interface UpdateAllGroupsAction {
	type: typeof UPDATE_ALL_GROUPS;
	payload: Group[];
}
