import React from 'react';

import { signIn, signOut } from 'services/firebase';
import { useUserLoading, useUserSignedIn, useUserName } from 'services/user';

const User: React.FC = () => {
	const userLoading = useUserLoading();
	const userSignedIn = useUserSignedIn();
	const userName = useUserName();

	const signInAndDisable = (event: React.FormEvent<HTMLButtonElement>) => {
		event.currentTarget.disabled = true;
		signIn();
	};

	return (
		<section className={'user' + (userLoading ? ' user--loading' : '')}>
			{!userSignedIn && (
				<section className="user">
					<button className="user__button" onClick={signInAndDisable}>
						Sign In
					</button>
				</section>
			)}

			{userSignedIn && (
				<section className="user">
					<span className="user__name">{userName}</span>
					<button className="user__button" onClick={signOut}>
						Sign Out
					</button>
				</section>
			)}
		</section>
	);
};

export default User;
