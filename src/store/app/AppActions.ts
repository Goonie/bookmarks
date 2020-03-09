import { ActionCreator } from 'redux';

import { AppAction, SIGN_IN, SIGN_OUT } from './AppTypes';

export const signIn: ActionCreator<AppAction> = uid => ({
	type: SIGN_IN,
	payload: uid
});

export const signOut: ActionCreator<AppAction> = () => ({
	type: SIGN_OUT
});
