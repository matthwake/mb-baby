import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Store from '~/database/data';

import mainStack from '~/navigators/MainStack';

export default () => {
  const signed = false;

  const MainStack = mainStack(signed);

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
};
