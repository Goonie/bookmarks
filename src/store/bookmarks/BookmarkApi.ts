import { firestore } from 'services/firebase';

export const fetchBookmarks = async () => {
	const query = await firestore.collection('bookmarks').get();
	const docs = query.docs.map(doc => ({ id: doc.id, ...doc.data() }));

	return docs;
};
