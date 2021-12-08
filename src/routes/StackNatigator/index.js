import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomePage from '../../screen/Home/index';
import Detalhes from '../../components/detalhes/index';
import Editition from '../../screen/Editition/index';
import ExibirTreinos from '../../screen/ExibirTreinos';

export default function StackNavigator(){
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator >

        <Stack.Screen name="Academy" options={
          {
            title: 'Academy',
            headerStyle:{backgroundColor: '#24d139'},  
            headerTintColor: '#fff', 
            headerTitleAlign: 'center', 
            headerTitleStyle:{fontSize: 40} ,
            headerShown: false
          }} 
          component={HomePage}
        />
      
      <Stack.Screen name="More" options={
          {
            title: 'Sobre',
            headerStyle:{backgroundColor: '#24d139'},  
            headerTintColor: '#fff', 
            headerTitleAlign: 'center', 
            headerTitleStyle:{fontSize: 40} ,
            headerShown: false,
          }} 
          component={Detalhes}
        />

        <Stack.Screen name="Editition" options={
          {
            title: 'Editar',
            headerStyle:{backgroundColor: '#24d139'},  
            headerTintColor: '#fff', 
            headerTitleAlign: 'center', 
            headerTitleStyle:{fontSize: 40},
            headerShown: false,
          }} 
          component={Editition}
        />
        
        <Stack.Screen name="ExibirTreinos" options={
          {
            title: 'Treinos',
            headerStyle:{backgroundColor: '#24d139'},  
            headerTintColor: '#fff', 
            headerTitleAlign: 'center', 
            headerTitleStyle:{fontSize: 40},
            headerShown: false,
          }} 
          component={ExibirTreinos}
        />

    </Stack.Navigator>
  )
}