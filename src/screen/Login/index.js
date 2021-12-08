import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as Google from 'expo-google-app-auth';

//import styles from './styles';

export default function Login(){

  
  const [userName, setUserName] = useState();
  const [userPhoto, setUserPhoto] = useState();

  async function log(){  
    const { type, accessToken, user } = await Google.logInAsync({

      androidClientId: `16429856744-f26aegkbe9m43hkt537pnr49829bbjao.apps.googleusercontent.com`,

    });
    
    if (type === 'success') {
      setUserName(user.name)
      setUserPhoto(user.photoUrl)
      //console.log(user);
    }
  }

  return (
    <View style={{flex:1,alignItems: 'center',justifyContent:'center'}}>
      <Text>{userName}</Text>
      <Image source={{uri:userPhoto}} style={{height: 80, width: 80, borderRadius: 1000}} />
      <TouchableOpacity style={{backgroundColor: '#0bf', padding: 20}} onPress={()=>log()}>
        <Text>Sing In</Text>
      </TouchableOpacity>
    </View>
  )
}