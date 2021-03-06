import { firestore } from 'services/firebase';

export const fetchBookmarks = async () => {
	const query = await firestore.collection('bookmarks').get();
	return query.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
