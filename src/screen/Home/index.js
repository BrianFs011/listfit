import React,{useState, useEffect} from 'react';
import { View, Text, FlatList, Button, Alert,
          SafeAreaView } from 'react-native';

import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { useColorScheme } from 'react-native-appearance';

import { getData } from '../../storege';
import Treinos from '../../components/Treinos';
import SelectDays from '../../components/selectDays';

import styles from './styles';

import commun from '../../communStyle';

const initialDate = new Date();//2021,10,23
export default function Home({navigation}){

  const dispatch = useDispatch();
  const storage = useSelector(state=>state.listData);
  const [date, setDate] = useState(moment(initialDate).format('ddd'));

  const scheme = useColorScheme();
  const color = scheme === 'dark' ? '#999' : commun.bottonColorDisable;
  const [colorSeg, setColorSeg] = useState(date == 'Mon' ? commun.bottonColorEnable : color);
  const [colorTer, setColorTer] = useState(date == 'Tue' ? commun.bottonColorEnable : color);
  const [colorQua, setColorQua] = useState(date == 'Wed' ? commun.bottonColorEnable : color);
  const [colorQui, setColorQui] = useState(date == 'Thu' ? commun.bottonColorEnable : color);
  const [colorSet, setColorSex] = useState(date == 'Fri' ? commun.bottonColorEnable : color);

  useEffect (async ()=>{
    const value = await getData('db');
    const list = [];
    value.map(m=>{
      const indexDate = m.date.indexOf(date);
      if(indexDate != -1) list.push(m) 
    });
    dispatch({type: 'listData', listData: list});
  },[date])
  
  function Select(day){
    setDate(day);
    
    setColorSeg(day == 'Mon' ? commun.bottonColorEnable : color);
    setColorTer(day == 'Tue' ? commun.bottonColorEnable : color);
    setColorQua(day == 'Wed' ? commun.bottonColorEnable : color);
    setColorQui(day == 'Thu' ? commun.bottonColorEnable : color);
    setColorSex(day == 'Fri' ? commun.bottonColorEnable : color);

  }

  function IniciarTreino(day){
    const list = [];
    storage.map(s=>s.date.map(d=>{
      if(d == day){
        list.push(s);
      }
    }));
    if(list.length != 0){

      navigation.navigate('ExibirTreinos',{
        list
      });
      
      setColorSeg(day == 'Mon' ? commun.bottonColorEnable : commun.bottonColorDisable);
      setColorTer(day == 'Tue' ? commun.bottonColorEnable : commun.bottonColorDisable);
      setColorQua(day == 'Wed' ? commun.bottonColorEnable : commun.bottonColorDisable);
      setColorQui(day == 'Thu' ? commun.bottonColorEnable : commun.bottonColorDisable);
      setColorSex(day == 'Fri' ? commun.bottonColorEnable : commun.bottonColorDisable);
    }
    else{
      Alert.alert('Treinos não encontrador','Você não tem treinos definidos para esse dia!');
    }
  }

  return (
    <SafeAreaView style={styles.conteiner}>
      <>
        <View style={[styles.conteinerSelectButtons, {marginVertical: 10}]}>
          <SelectDays day='Seg' val='Mon' fun={Select} cor={colorSeg} longVal={'Mon'} longPress={IniciarTreino}/>
          <SelectDays day='Ter' val='Tue' fun={Select} cor={colorTer} longVal={'Tue'} longPress={IniciarTreino}/>
          <SelectDays day='Qua' val='Wed' fun={Select} cor={colorQua} longVal={'Wed'} longPress={IniciarTreino}/>
          <SelectDays day='Qui' val='Thu' fun={Select} cor={colorQui} longVal={'Thu'} longPress={IniciarTreino}/>
          <SelectDays day='Sex' val='Fri' fun={Select} cor={colorSet} longVal={'Fri'} longPress={IniciarTreino}/>
        </View>
          <FlatList 
            style={{width: '95%'}}
            keyExtractor={(item)=> item.id}
            data={storage}
            renderItem={({item}) => (
              <Treinos 
                treino1={item.treino1}
                serie1={item.serie1}
                repeat1={item.repeat1}
                carga1={item.carga1}
                image1={item.image1}
                
                treino2={item.treino2}
                serie2={item.serie2}
                repeat2={item.repeat2}
                carga2={item.carga2}
                image2={item.image2}

                id={item.id}

                nav={navigation}
              />
            )}
          />
      </>
    </SafeAreaView>
  )
}