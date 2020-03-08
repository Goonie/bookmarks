import { createStore, applyMiddleware } from 'redux';
import createReduxSagaMiddleware from 'redux-saga';

import { storeReducer } from 'store/StoreReducer';
import { storeSagas } from 'store/StoreSagas';

const reduxSagaMiddleware = createReduxSagaMiddleware();
const store = createStore(storeReducer, applyMiddleware(reduxSagaMiddleware));
reduxSagaMiddleware.run(storeSagas);

export { store };
