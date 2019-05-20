import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appReducer from './reducers';
import middlewares from './middlewares';

const config = {
  key: 'root',
  storage,
  blacklist: ['router', /* 'name_reducer' */],
  debug: true //to get useful logging
};

const combinedReducer = persistReducer(config, appReducer);

const store = createStore(combinedReducer, {}, applyMiddleware(...middlewares))
const persistor = persistStore(store)

export { store, persistor };
