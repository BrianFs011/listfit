import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Intervalo from '../../screen/Intervalo';
import CriarTreino from '../../screen/NovoTreino/index';
import StackNavigator from '../StackNatigator/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import commun from '../../communStyle';
import TabBarIcon from '../../components/TabBarIcon/index';
import ExibirTreinos from '../../screen/ExibirTreinos';
import StackNavigatorConfig from '../StackNavigatorConfig/index';

export default function DrawerNavigator(){
 
  const Tab = createBottomTabNavigator();
  return(

      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: commun.secondColor,
          tabBarActiveBackgroundColor: '#fff',
          tabBarStyle:{
            marginBottom: 10,
            height: '6%',
            justifyContent: 'center', 
            
          },
        }}
      >
        
        <Tab.Screen 
          name="Home"
          component={ExibirTreinos}  
          options={
            {
              title: 'Home',
              headerStyle:{backgroundColor: commun.primaryColor},  
              headerTintColor: '#fff', 
              headerTitleAlign: 'center', 
              headerTitleStyle:{fontSize: 40},
              headerShown: false,
              
              tabBarIcon: ({color, size})=>{
                return(
                  <Icon name='home' color={color} size={size} />
                )
              }
            }
          } 
          
        />
        <Tab.Screen 
          name="Lista"
          component={StackNavigator}  
          options={
            {
              title: 'List',
              headerStyle:{backgroundColor: commun.primaryColor},  
              headerTintColor: '#fff', 
              headerTitleAlign: 'center', 
              headerTitleStyle:{fontSize: 40},
              headerShown: false,
              
              tabBarIcon: ({color, size})=>{
                return(
                  <Icon name='list' color={color} size={size} />
                )
              }
            }
          } 
          
        />

        <Tab.Screen name="CriarTreino" options={
          {
            title: '',
            headerStyle:{backgroundColor: commun.primaryColor},  
            headerTintColor: '#fff', 
            headerTitleAlign: 'center', 
            headerTitleStyle:{fontSize: 40},
            headerShown: false,
            tabBarIcon: ({focused, color, size})=>{
              return(
                <TabBarIcon focused={focused} color={color} size={size} />
              )
            } 
          }} 
          component={CriarTreino}
        />
        
        <Tab.Screen name="Intervalo" options={
          {
            title: 'Timer',
            headerStyle:{backgroundColor: commun.primaryColor},  
            headerTintColor: '#fff', 
            headerTitleAlign: 'center', 
            headerTitleStyle:{fontSize: 40},
            headerShown: false,
            tabBarIcon: ({color, size})=>{
              return(
                <Icon name='clock' color={color} size={size} />
              )
            } 
          }} 
          component={Intervalo}
        />

        <Tab.Screen 
          name="Config"
          component={StackNavigatorConfig}  
          options={
            {
              title: 'Config',
              headerStyle:{backgroundColor: commun.primaryColor},  
              headerTintColor: '#fff', 
              headerTitleAlign: 'center', 
              headerTitleStyle:{fontSize: 40},
              headerShown: false,
              
              tabBarIcon: ({color, size})=>{
                return(
                  <Icon name='cog' color={color} size={size} />
                )
              }
            }
          } 
          
        />
        
     </Tab.Navigator>     
     
    
  )
}