import React from 'react';
import { useSelector } from 'react-redux';

import { StoreState } from 'store/StoreTypes';

import User from 'components/User';
import Bookmark from 'components/Bookmark';

const DashboardPage: React.FC = () => {
	const bookmarks = useSelector((state: StoreState) => state.bookmarks);

	bookmarks.sort((a, b) => {
		return a.name.localeCompare(b.name);
	});

	return (
		<main>
			<header className="header">
				<h1 className="header__title">Bookmarks</h1>
				<User/>
			</header>

			{!bookmarks.length && <p>Loading...</p>}

			{bookmarks.map(bookmark => (
				<Bookmark key={bookmark.id} {...bookmark} />
			))}
		</main>
	);
};

export default DashboardPage;
