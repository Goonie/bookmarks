import * as firebase from 'firebase/app';

import 'firebase/firestore';

firebase.initializeApp({
	apiKey: process.env.REACT_APP__FIREBASE__API_KEY,
	authDomain: process.env.REACT_APP__FIREBASE__AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP__FIREBASE__DATABASE_URL,
	projectId: process.env.REACT_APP__FIREBASE__PROJECT_ID,
	storageBucket: process.env.REACT_APP__FIREBASE__STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP__FIREBASE__MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP__FIREBASE__APP_ID,
	measurementId: process.env.REACT_APP__FIREBASE__MEASUREMENT_ID
});

export const firestore = firebase.firestore();
