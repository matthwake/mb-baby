import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import rootReducers from '~/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

const persistorReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(persistorReducer);
export const persistor = persistStore(store);
