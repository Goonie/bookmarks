import { Reducer } from 'redux';

import { AppState, AppAction, SIGN_IN, SIGN_OUT } from './AppTypes';

export const initialAppState = {
	user: ''
};

export const appReducer: Reducer<AppState, AppAction> = (
	state = initialAppState,
	action
) => {
	switch (action.type) {
		case SIGN_IN:
			return { user: action.payload };

		case SIGN_OUT:
			return initialAppState;

		default:
			return state;
	}
};
