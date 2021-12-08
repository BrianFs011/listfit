import React, {useState, useRef, useEffect} from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { View, 
         Text, 
         TextInput, 
         Pressable, 
         Image, 
         Keyboard, 
         TouchableOpacity, 
         KeyboardAvoidingView, 
         Alert,
       } from 'react-native';

import {Picker} from '@react-native-picker/picker';

import { useDispatch } from 'react-redux';

import styles from './styles';
import PathImages from '../../../assets/index';
import { getData, setData } from '../../storege';
import SelectDays from '../../components/selectDays/index';
import commun from '../../communStyle'

// Pick a single file
let listDays = [];
export default function MontarTreino({navigation}){

  let result;
  const pickDocument = async () => {
    result = await DocumentPicker.getDocumentAsync({});
    console.log(result.uri);
    console.log(result);

  }

  const [treino1, setTreino1] = useState(null);
  const [treino2, setTreino2] = useState(null);
  const [selectImageTreino, setSelectImageTreino] = useState(null);

  const [series1, setSeries1] = useState('');
  const [series2, setSeries2] = useState('');
  
  const [repeat1, setRepeat1] = useState('');
  const [repeat2, setRepeat2] = useState('');
  
  const [peso1, setPeso1] = useState('');
  const [peso2, setPeso2] = useState('');

  const [colorSeg, setColorSeg] = useState(commun.bottonColorDisable);
  const [colorTer, setColorTer] = useState(commun.bottonColorDisable);
  const [colorQua, setColorQua] = useState(commun.bottonColorDisable);
  const [colorQui, setColorQui] = useState(commun.bottonColorDisable);
  const [colorSet, setColorSet] = useState(commun.bottonColorDisable);

  const dispatch = useDispatch();

  const pickerRef = useRef();

  //console.log(treino, selectedLanguage);

  function Cancel(){
    navigation.navigate('Home');
    setTreino1(null);
    setRepeat1('');
    setPeso1('');
    setSeries1('');

    setTreino2(null);
    setRepeat2('');
    setPeso2('');
    setSeries2('');

    listDays = [];

    setColorSeg(commun.bottonColorDisable);
    setColorTer(commun.bottonColorDisable);
    setColorQua(commun.bottonColorDisable);
    setColorQui(commun.bottonColorDisable);
    setColorSet(commun.bottonColorDisable);

  }

  async function Salvar(t1, t2){
    if(treino1 != null && listDays.length != 0){
      let name1;
      PathImages.map(i=>i.uri == t1 ? name1 = i.imgName : null);
      
      if(treino2 != null){
        let name2;
        PathImages.map(i=>i.uri == t2 ? name2 = i.imgName : null);

        const data = await getData('db');
        const list = data ? data : [];
        list.push({
          id: Math.random(), 
          treino1: treino1,
          repeat1: repeat1,
          serie1: series1,
          carga1: peso1,
          date: listDays, 

          treino2: name2,
          repeat2: repeat2,
          serie2: series2,
          carga2: peso2,
        });
        //data.map(d=>console.log(d));
        setData('db', list);
        dispatch({type: 'listData', listData: list});
      }
      else{
        const data = await getData('db');
        const list = data ? data : [];
        list.push({
          id: Math.random(), 
          treino1: name1,
          repeat1: repeat1,
          serie1: series1,
          carga1: peso1,
          date: listDays, 
        });
        //data.map(d=>console.log(d));
        dispatch({type: 'listData', listData: list});
        setData('db', list);
      }
      

      setTreino1(null);
      setRepeat1('');
      setPeso1('');
      setSeries1('');
  
      setTreino2(null);
      setRepeat2('');
      setPeso2('');
      setSeries2('');

      listDays = [];

      setColorSeg(commun.bottonColorDisable);
      setColorTer(commun.bottonColorDisable);
      setColorQua(commun.bottonColorDisable);
      setColorQui(commun.bottonColorDisable);
      setColorSet(commun.bottonColorDisable);
    
    }
    else{
      Alert.alert("Ops", "Preencha os campos treino e dia da semana");
    }
  }

  function addDay(day){
    const buscar = listDays.indexOf(day);
    if(buscar == -1){
      listDays.push(day);
      if(day == 'Mon') setColorSeg(commun.bottonColorEnable);
      if(day == 'Tue') setColorTer(commun.bottonColorEnable);
      if(day == 'Wed') setColorQua(commun.bottonColorEnable);
      if(day == 'Thu') setColorQui(commun.bottonColorEnable);
      if(day == 'Fri') setColorSet(commun.bottonColorEnable);
    }
    else{
      listDays.splice(buscar, 1); 
      if(day == 'Mon') setColorSeg(commun.bottonColorDisable);
      if(day == 'Tue') setColorTer(commun.bottonColorDisable);
      if(day == 'Wed') setColorQua(commun.bottonColorDisable);
      if(day == 'Thu') setColorQui(commun.bottonColorDisable);
      if(day == 'Fri') setColorSet(commun.bottonColorDisable);   
    }
    //console.log(listDays);
  }

  return (
    
      <Pressable style={styles.conteiner} onPress={()=>Keyboard.dismiss()}>
        <KeyboardAvoidingView  behavior='height' enabled>
          <View style={styles.conteinerText}>
            <Text style={styles.text}>Treino: </Text>
            <Picker
              
              style={styles.picker}
              ref={pickerRef}
              selectedValue={treino1}
              onValueChange={(itemValue, itemIndex) =>{
                setTreino1(itemValue);
                setSelectImageTreino(false);
                if(itemValue == null){
                  setTreino2(null);
                  setRepeat2('');
                  setPeso2('');
                  setSeries2('');
                }
              }
              
              }>
              <Picker.Item label='...' value={null}/>
              {PathImages.map(p=><Picker.Item key={p.imgName} label={p.imgName}  value={p.uri} />)}
            </Picker>
            {
              treino1 != null ?
              <Picker
                style={styles.picker}
                ref={pickerRef}
                selectedValue={treino2}
                onValueChange={(itemValue, itemIndex) =>{
                  setTreino2(itemValue);
                  if(itemValue == null){
                    setSelectImageTreino(false);
                    setRepeat2('');
                    setPeso2('');
                    setSeries2('');
                  }
                  else{
                    setSelectImageTreino(true);
                  }
                  
                }
                
                }>
                <Picker.Item label='...' value={null}/>
                {PathImages.map(p=><Picker.Item key={p.imgName} label={p.imgName}  value={p.uri} />)}
              </Picker>
              :
              null

            }
          </View>

          <View style={styles.conteinerText}>
            <Text style={styles.text}> Peso   : </Text>
            <TextInput style={styles.textInput} value={peso1} onChangeText={(text)=>setPeso1(text)} keyboardType='numeric'/>
            {
              treino2 ?
              <TextInput style={styles.textInput} value={peso2} onChangeText={(text)=>setPeso2(text)} keyboardType='numeric'/>
              :
              null
            }
            <Text style={styles.text}>Kg</Text>
          </View>

          <View style={styles.conteinerText}>
            <Text style={styles.text}>Séries: </Text>
            <TextInput style={styles.textInput} value={series1} onChangeText={(text)=>setSeries1(text)} keyboardType='numeric'/>
            {
              treino2 ?
                <TextInput style={styles.textInput} value={series2} onChangeText={(text)=>setSeries2(text)} keyboardType='numeric'/>
              :
              null
            }
            <Text style={styles.text}> x</Text>
          </View>

          <View style={styles.conteinerText}>
            <Text style={styles.text}>Repet : </Text>
            
            <TextInput style={styles.textInput} value={repeat1} onChangeText={(text)=>setRepeat1(text)} keyboardType='numeric'/>
            {
              treino2 ?
              <TextInput style={styles.textInput} value={repeat2} onChangeText={(text)=>setRepeat2(text)} keyboardType='numeric'/>
              :
              null
            }
            <Text style={styles.text}> x</Text>
          </View>
          {
            treino1 ?
              <View style={styles.conteinerSelectButtons}>
                <SelectDays day='Seg' val='Mon' fun={addDay} list={listDays} cor={colorSeg}/>
                <SelectDays day='Ter' val='Tue' fun={addDay} list={listDays} cor={colorTer}/>
                <SelectDays day='Qua' val='Wed' fun={addDay} list={listDays} cor={colorQua}/>
                <SelectDays day='Qui' val='Thu' fun={addDay} list={listDays} cor={colorQui}/>
                <SelectDays day='Sex' val='Fri' fun={addDay} list={listDays} cor={colorSet}/>
              </View>
            :
            null
          }
          
            {
              treino1 ? 
                selectImageTreino ?
                  <Pressable style={styles.conteinerImage} onPress={()=>setSelectImageTreino(false)}> 
                    <Image style={styles.image} source={treino2}  /> 
                  </Pressable>
                :
                  <Pressable style={styles.conteinerImage} onPress={()=>setSelectImageTreino(treino2 ? true : false)}>
                    <Image style={styles.image} source={treino1} /> 
                  </Pressable>
                : 
              null
            }
          

          <View style={[styles.conteinerText, {justifyContent: 'space-evenly', alignItems: 'center', marginBottom: 10}]}>
            <TouchableOpacity style={styles.conteinerButton} onPress={()=>Cancel()}>
              <Text style={styles.textButton}>Cancelar</Text>
            </TouchableOpacity>
            {
              treino1 ?
              <TouchableOpacity style={[styles.conteinerButton, {borderColor: '#17e237'}]} onPress={()=>Salvar(treino1, treino2)}>
                <Text style={[styles.textButton, {color: '#17e237'}]} >Salvar</Text>
              </TouchableOpacity>
              :
              null
            }
          </View>
        
        </KeyboardAvoidingView>
      </Pressable>    


  )
}
