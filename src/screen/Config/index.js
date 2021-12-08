import React,{useState} from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';

export default function Config({navigation}){

  const [font, setFont] = useState('');
  
  //ListFont.push({fontSize:font});

  function onDev(){
    navigation.navigate('Dev');
    
  }

  return (
    <View style={styles.conteiner}>
      {/*<View style={styles.conteinerConfig}>
        <Text style={styles.text}>Tamanho da fonte: </Text>
        <TextInput 
          style={styles.textInput} 
          value={font} 
          onChangeText={(text)=>setFont(text)}
          keyboardType='numeric'
        />
  </View>*/}
      <TouchableOpacity style={styles.conteinerButton} onPress={()=>onDev()}>
        <Text style={styles.textButton}>Dev</Text>
      </TouchableOpacity>
    </View>
  )
}