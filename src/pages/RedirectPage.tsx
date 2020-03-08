import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { StoreState } from 'store/StoreTypes';

const RedirectPage: React.FC = () => {
	const { id } = useParams();

	const bookmarks = useSelector((state: StoreState) => state.bookmarks);
	const bookmark = bookmarks.find(bookmark => bookmark.id === id);

	useEffect(() => {
		if (bookmark) {
			window.location.href = bookmark.url;
		}
	}, [bookmark]);

	return (
		<main>
			<h1>Redirecting...</h1>

			{!bookmark && <p>Not found</p>}
		</main>
	);
};

export default RedirectPage;
