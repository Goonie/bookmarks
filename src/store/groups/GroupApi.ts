import { firestore } from 'services/firebase';

export const fetchGroups = async () => {
	const query = await firestore.collection('groups').get();
	return query.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
