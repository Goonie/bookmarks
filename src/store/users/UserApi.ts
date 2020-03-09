import { firestore } from 'services/firebase';

export const fetchUsers = async () => {
	const query = await firestore.collection('users').get();
	return query.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
