import React from 'react';
import { useColorScheme } from 'react-native-appearance';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

import {Provider} from 'react-redux';
import store from './redux/index';

import TabNavigator from './routes/TabNavigator/index';

export default function App({navigation}){
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Provider store={store}>
        <TabNavigator/>     
      </Provider>
    </NavigationContainer>
  );
}