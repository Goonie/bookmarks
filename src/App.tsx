import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { store } from 'services/store';

import { signIn } from 'store/app/AppActions';
import { fetchUsers } from 'store/users/UserActions';
import { fetchBookmarks } from 'store/bookmarks/BookmarkActions';

import { auth } from 'services/firebase';

import DashboardPage from 'pages/DashboardPage';
import RedirectPage from 'pages/RedirectPage';

import 'styles/app.scss';

const App: React.FC = () => {
	useEffect(() => {
		auth.onAuthStateChanged(user => {
			store.dispatch(signIn(user?.uid));
		});

		store.dispatch(fetchUsers());
		store.dispatch(fetchBookmarks());
	}, []);

	return (
		<Provider store={store}>
			<main className="layout">
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={DashboardPage} />
						<Route path="/:id" component={RedirectPage} />
					</Switch>
				</BrowserRouter>
			</main>
		</Provider>
	);
};

export default App;
