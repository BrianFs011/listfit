import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function TabBarIcon({focused, color, size}){
  return (
    <View style={[styles.conteiner, {backgroundColor: color}, focused ? {marginBottom: 30,height: 60, width: 60} : {}]}>
      <Icon name='plus' color='#fff' size={size}/>
    </View>
  )
}