import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import moment from 'moment';

import styles from './styles'

export default function Intervalo(){

  const initialDate = new Date(0,0,0,0,1,0);

  const [start, setStart] = useState(false);
  const [time, setTime] = useState(initialDate);

  useEffect(()=>{
    if(start == true){
     
      if(moment(time).format("mm:ss") == moment(new Date(0,0,0,0,0,0)).format("mm:ss")){
        setStart(false);
        setTime(initialDate);
      }
       
      let id = setInterval(()=>{
        setTime(time - 1000);
      }, 1000);
      return ()=> clearInterval(id);
    }
   
      
  })

  
  function Start(){
    if(moment(time).format("mm:ss") != moment(new Date(0,0,0,0,1,0)).format("mm:ss")) {
      setTime(initialDate)
    }
    setStart(!start);
  }

  const stylesClock = [styles.button];
  if(moment(time).format("mm:ss") <= moment(new Date(0,0,0,0,0,30)).format("mm:ss")) stylesClock.push({borderColor: '#fe0'});
  if(moment(time).format("mm:ss") <= moment(new Date(0,0,0,0,0,10)).format("mm:ss")) stylesClock.push({borderColor: '#f00'});

  return (
  <View style={styles.conteinerButton}>
    <Text style={styles.title}>Timer</Text>
    <TouchableOpacity 
      style={stylesClock}
      onPress={()=>Start()}
    >
      <Text 
        style={styles.text}
      >
        {moment(time).format("mm:ss")}
      </Text>
    </TouchableOpacity>
  </View >
  )
}