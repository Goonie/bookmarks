import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { auth } from 'services/firebase';

import { StoreState } from 'store/StoreTypes';

export const useUserLoading = () => {
	const [loading, setLoading] = useState(true);

	const users = useSelector((state: StoreState) => state.users);

	auth.onAuthStateChanged(user => {
		const userRecord = users.find(
			userRecord => userRecord.uid === auth.currentUser?.uid
		);

		if (!user || userRecord) {
			setLoading(false);
		}
	});

	return loading;
};

export const useUserSignedIn = () => {
	const [signedIn, setSignedIn] = useState(false);

	auth.onAuthStateChanged(user => {
		setSignedIn(user ? true : false);
	});

	return signedIn;
};

export const useUserName = () => {
	const [name, setName] = useState('');

	const users = useSelector((state: StoreState) => state.users);

	useEffect(() => {
		const userRecord = users.find(
			userRecord => userRecord.uid === auth.currentUser?.uid
		);

		setName(userRecord?.name || '');
	}, [users]);

	return name;
};
