import React from 'react';
import { StatusBar } from 'react-native';
// <StatusBar barStyle="light-content" backgroundColor="#7159c1" #14c3f6 />

import './config/ReactotronConfig';

import App from './App';

export default function index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0ebff3" />
      <App />
    </>
  );
}
