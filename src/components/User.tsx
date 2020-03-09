import React from 'react';
import { useSelector } from 'react-redux';

import { StoreState } from 'store/StoreTypes';

import { signIn, signOut } from 'services/firebase';

const User: React.FC = () => {
	const app = useSelector((state: StoreState) => state.app);
	const users = useSelector((state: StoreState) => state.users);

	const user = users.find(user => user.uid === app.user);

	const signInAndDisable = (event: React.FormEvent<HTMLButtonElement>) => {
		event.currentTarget.disabled = true;
		signIn();
	};

	const signOutAndDisable = (event: React.FormEvent<HTMLButtonElement>) => {
		event.currentTarget.disabled = true;
		signOut();
	};

	if (!app.user) {
		return (
			<section className="user">
				<button className="user__button" onClick={signInAndDisable}>
					Sign In
				</button>
			</section>
		);
	}

	return (
		<section className="user">
			{user && <span className="user__name">{user.name}</span>}

			<button className="user__button" onClick={signOutAndDisable}>
				Sign Out
			</button>
		</section>
	);
};

export default User;
