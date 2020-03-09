export type AppState = App;

export type AppAction = SignInAction | SignOutAction;

export interface App {
	user: string;
}

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export interface SignInAction {
	type: typeof SIGN_IN;
	payload: string;
}

export interface SignOutAction {
	type: typeof SIGN_OUT;
}
