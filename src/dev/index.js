import React from 'react';
import { View, Text, Button } from 'react-native';

import * as Clipboard from 'expo-clipboard';

import {useDispatch} from 'react-redux'

//import styles from './style'


import { setData } from '../storege';

export default function Dev({navigation}){

  const dispatch = useDispatch();

  const list = [ 
    {
      id: Math.random(),
      date:['Mon', 'Thu'],

      treino1: 'Supino Reto',
      serie1: '3',
      repeat1: '15',
      carga1: '15',
      
      treino2: 'Crucifixo Reto',
      serie2: '3',
      repeat2: '15',
      carga2: '4'
      
      },
      {
      id: Math.random(),
      date:['Mon', 'Thu'],

      treino1: 'Supino Inclinado',
      serie1: '4',
      repeat1: '15',
      carga1: '10'
      },
      {
      id: Math.random(),
      date:['Mon', 'Thu'], 

      treino1: 'Voador',
      serie1: '4',
      repeat1: '15',
      carga1: '4'
      },
      {
      id: Math.random(),
      date:['Mon', 'Thu'],

      treino1: 'Triceps Corda',
      serie1: '3',
      repeat1: '15',
      carga1: '4',
      
      treino2: 'Triceps Frances',
      serie2: '3',
      repeat2: '15',
      carga2: '6'
      },
      {
      id: Math.random(),
      date:['Mon', 'Thu'],  
      treino1: 'Triceps Testa',
      serie1: '4',
      repeat1: '15',
      carga1: '15'
      },
      {
      id: Math.random(),
      date:['Mon', 'Thu'], 
      treino1: 'Elevação Frontal',
      serie1: '4',
      repeat1: '15',
      carga1: '10'
      },  
      {
      id: Math.random(),
      date:['Mon', 'Thu'],  
      treino1: 'Flexão',
      serie1: '4',
      
      
      treino2: 'Prancha',
      serie2: '4',
      
      },
      {
      id: Math.random(),
      date:['Tue', 'Fri'],
      treino1: 'Remada Articulada',
      serie1: '4',
      repeat1: '15',
      carga1: '15',
      },  
      {
      id: Math.random(),
      date:['Tue', 'Fri'],
      treino1: 'Puxada Frente',
      serie1: '4',
      repeat1: '12',
      carga1: '28',
      
      treino2: 'Rosca com Halter',
      serie2: '4',
      repeat2: '15',
      carga2: '8',
      },  
      {
      id: Math.random(),
      date:['Tue', 'Fri'],
      treino1: 'Remada Unilateral',
      serie1: '4',
      repeat1: '15',
      carga1: '10'
      },
      {
      id: Math.random(),
      date:['Tue', 'Fri'],
      treino1: 'Remada Baixa',
      serie1: '4',
      repeat1: '12',
      carga1: '26'
      },
      {
      id: Math.random(),
      date:['Tue', 'Fri'],
      treino1: 'Rosca 21',
      serie1: '4',
      repeat1: '21',
      carga1: '5'
      },
      {
      id: Math.random(),
      date:['Tue', 'Fri'],
      treino1: 'Rosca Unilateral Pegada Invertida',
      serie1: '3',
      repeat1: '15',
      carga1: '5'
      },
      {
      id: Math.random(),
      date:['Tue', 'Fri'],
      treino1: 'Desenvolvimento',
      serie1: '3',
      repeat1: '15',
      carga1: '10',
      
      treino2: 'Elevação Lateral',
      serie2: '3',
      repeat2: '15',
      carga2: '10',
      },
      {
      id: Math.random(),
      date:['Tue', 'Fri'],
      treino1: 'Abdominal Supra Completo',
      serie1: '4',
      repeat1: '20',
      },
      {
      id: Math.random(),
      date:['Wed'],
      treino1: 'Agachamento Barra Livre',
      serie1: '4',
      repeat1: '20',
      carga1: '8',
      },
      {
      id: Math.random(),
      date:['Wed'],
      treino1: 'Leg 45',
      serie1: '4',
      repeat1: '20',
      carga1: '80'
      },
      {
      id: Math.random(),
      date:['Wed'],
      treino1: 'Cadeira Extensora',
      serie1: '4',
      repeat1: '20',
      carga1: '10'
      },
      {
      id: Math.random(),
      date:['Wed'],
      treino1: 'Mesa Flexora',
      serie1: '4',
      repeat1: '20',
      carga1: '10'
      },
      {
      id: Math.random(),
      date:['Wed'],
      treino1: 'Avanço',
      serie1: '4',
      repeat1: '20',
      carga1: '6'
      },
      {
      id: Math.random(),
      date:['Wed'],
      treino1: 'Panturrilha Máquina',
      serie1: '4',
      repeat1: '20',
      carga1: '15'
      },
      {
      id: Math.random(),
      date:['Wed'],
      treino1: 'Panturrilha no Smith',
      serie1: '4',
      repeat1: '20',
      carga1: '10'
      },
      {
      id: Math.random(),
      date:['Wed'],
      treino1: 'Abdominal Infra',
      serie1: '4',
      repeat1: '20',
      },
    
    ];

  const vazio = [];

  async function Preencher(){
    dispatch({type: 'listData', listData: list});
    setData('db', list);
    navigation.goBack();
     
  }
  
  async function Zerar(){
    dispatch({type: 'listData', listData: vazio});
    setData('db', vazio);
    navigation.goBack();
  }



  return (
    <View style={{flex:1,alignItems: 'center',justifyContent:'space-evenly', backgroundColor: '#fff'}}>
      <Button title="Preencher" onPress={()=>Preencher()}/>
      <Button title="Zero" onPress={()=>Zerar()}/>
      
    </View>
  )
}