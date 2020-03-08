import React from 'react';
import { useSelector } from 'react-redux';

import { StoreState } from 'store/StoreTypes';

import Bookmark from 'components/Bookmark';

const DashboardPage: React.FC = () => {
	const bookmarks = useSelector((state: StoreState) => state.bookmarks);

	bookmarks.sort((a, b) => {
		return a.name.localeCompare(b.name);
	});

	return (
		<main>
			<h1>Goonie Bookmarks</h1>

			{!bookmarks.length && <p>Loading...</p>}

			{bookmarks.map(bookmark => (
				<Bookmark key={bookmark.id} {...bookmark} />
			))}
		</main>
	);
};

export default DashboardPage;
