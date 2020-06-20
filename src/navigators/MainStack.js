import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Cart from '~/pages/Cart';
import Payments from '~/pages/Payments';
import Product from '~/pages/Product';

const MainStack = createStackNavigator();

export default () => {
  return (
    <MainStack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
          color: '#fff',
        },
        headerStyle: {
          backgroundColor: '#0ebff3',
        },
      }}
    >
      <MainStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'MB Baby',
          headerShown: true,
        }}
      />
      <MainStack.Screen name="Profile" component={Profile} />
      <MainStack.Screen
        name="Cart"
        component={Cart}
        options={{
          title: 'Carrinho',
        }}
      />

      <MainStack.Screen name="Payments" component={Payments} />
      <MainStack.Screen
        name="Product"
        component={Product}
        options={{
          title: 'Produto',
          headerShown: true,
        }}
      />
    </MainStack.Navigator>
  );
};
