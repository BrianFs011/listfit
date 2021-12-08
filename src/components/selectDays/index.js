import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import commun from '../../communStyle';

export default function SelectDays({day, fun, cor, val, longPress, longVal}) {

  function Press(){
    fun(val)
  }
  function LongPress(){
    longPress(longVal)
  }

  const conteinerColor = [styles.conteinerButton, {borderColor: cor}, cor == commun.bottonColorEnable ? {borderBottomWidth: 1} : {borderBottomWidth: 0}];
  const textColor = [styles.buttonText, {color: cor}];

  return (
    <View style={styles.conteiner}>
      <TouchableOpacity style={conteinerColor} onPress={()=>Press()} onLongPress={()=>LongPress()}>
        <Text style={textColor}>{day}</Text>
      </TouchableOpacity>
    </View>
  )
}

function SelectDaysEditition({day, fun, val}) {

  const [color, setColor] = useState(false);

  function Press(){
    fun(val)
    setColor(!color)
  }

  const conteinerColor = [styles.conteinerButton];
  const textColor = [styles.buttonText];

  
  if(color == true) {
    conteinerColor.push({borderColor: commun.bottonColorEnable, borderBottomWidth: 1});
    textColor.push({color:commun.bottonColorEnable});
  }
  else{
    conteinerColor.push({borderColor: commun.bottonColorDisable});
    textColor.push({color:commun.bottonColorDisable});
  }
   
  return (
    <View style={styles.conteiner}>
      <TouchableOpacity style={conteinerColor} onPress={()=>Press()} onLongPress={()=>LongPress()}>
        <Text style={textColor}>{day}</Text>
      </TouchableOpacity>
    </View>
  )
}
export {SelectDaysEditition};