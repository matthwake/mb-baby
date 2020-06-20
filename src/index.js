import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './config/ReactotronConfig';

import { store, persistor } from '~/database/data';
import App from './App';

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);

export default function index() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#0ebff3" />
        <App />
      </PersistGate>
    </Provider>
  );
}
