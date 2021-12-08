import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Config from '../../screen/Config';
import Dev from '../../dev/index';

export default function StackNavigator(){
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator >

        <Stack.Screen 
          name="ConfigStack" 
          component={Config}
          options={
            {
              title: '',
              headerStyle:{backgroundColor: '#24d139'},  
              headerTintColor: '#fff', 
              headerTitleAlign: 'center', 
              headerTitleStyle:{fontSize: 40} ,
              headerShown: false
            }} 
        />

        <Stack.Screen 
          name="Dev" 
          component={Dev}
          options={
            {
              title: '',
              headerStyle:{backgroundColor: '#24d139'},  
              headerTintColor: '#fff', 
              headerTitleAlign: 'center', 
              headerTitleStyle:{fontSize: 40} ,
              headerShown: false
            }} 
        />

    </Stack.Navigator>
  )
}