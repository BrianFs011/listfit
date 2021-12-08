import React, {useState, useRef} from 'react';
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
         ScrollView,
         Modal

       } from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useDispatch } from 'react-redux';

import PathImages from '../../../assets/index';
import { getData, setData } from '../../storege';

import SelectDays from '../../components/selectDays/index';

import styles from './styles';

import commun from '../../communStyle';

let listDays = [];
export default function CriarTreino({navigation}){

  const [treino1, setTreino1] = useState('');
  const [treino2, setTreino2] = useState('');

  const [series1, setSeries1] = useState('');
  const [series2, setSeries2] = useState('');
  
  const [repeat1, setRepeat1] = useState('');
  const [repeat2, setRepeat2] = useState('');
  
  const [carga1, setCarga1] = useState('');
  const [carga2, setCarga2] = useState('');

  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const [colorSeg, setColorSeg] = useState(commun.bottonColorDisable);
  const [colorTer, setColorTer] = useState(commun.bottonColorDisable);
  const [colorQua, setColorQua] = useState(commun.bottonColorDisable);
  const [colorQui, setColorQui] = useState(commun.bottonColorDisable);
  const [colorSet, setColorSet] = useState(commun.bottonColorDisable);

  const dispatch = useDispatch();

  //controla a cor dos dias da semana
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
  }

  //Buscar imagem
  async function pickDocument(img1, img2){
    let result = await DocumentPicker.getDocumentAsync({});
    if(img1 == true){
      setImage1(result.uri);
      //console.log(result.uri, 1);
    }
    else if(img2 == true){
      setImage2(result.uri);
      //console.log(result.uri, 2);
    }
  }

  //Botão cancelar
  function Cancel(){
    navigation.navigate('Home');
    setTreino1('');
    setRepeat1('');
    setCarga1('');
    setSeries1('');
    setImage1('');

    setTreino2('');
    setRepeat2('');
    setCarga2('');
    setSeries2('');
    setImage2('');

    listDays = [];

    setColorSeg(commun.bottonColorDisable);
    setColorTer(commun.bottonColorDisable);
    setColorQua(commun.bottonColorDisable);
    setColorQui(commun.bottonColorDisable);
    setColorSet(commun.bottonColorDisable);

    setImage1("");
    setImage2("");

  }

  //Botão Salvar
  async function Salvar(t1, t2){
    if(treino1 != null && listDays.length != 0){
     
      if(treino2 != null){

        const data = await getData('db');
        const list = data ? data : [];
        list.push({
          id: Math.random(), 
          treino1: treino1,
          repeat1: repeat1,
          serie1: series1,
          carga1: carga1,
          image1: image1,
          date: listDays, 

          treino2: treino2,
          repeat2: repeat2,
          serie2: series2,
          carga2: carga2,
          image2: image2,
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
          treino1: treino1,
          repeat1: repeat1,
          serie1: series1,
          carga1: carga1,
          image1: image1,
          date: listDays, 
        });
        //data.map(d=>console.log(d));
        dispatch({type: 'listData', listData: list});
        setData('db', list);
      }
      

      setTreino1('');
      setRepeat1('');
      setCarga1('');
      setSeries1('');
      setImage1('');
  
      setTreino2('');
      setRepeat2('');
      setCarga2('');
      setSeries2('');
      setImage2('');

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

  const imgGif1 = [styles.textInput, {width: '65%'}];
  if(image1 != '') imgGif1.push({width: '40%'});
  
  const imgGif2 = [styles.textInput, {width: '65%'}];
  if(image2 != '') imgGif2.push({width: '40%'});

  return (
    <Pressable style={styles.conteiner} onPress={()=>Keyboard.dismiss()}>
      <KeyboardAvoidingView contentContainerStyle={styles.box} behavior="padding" enabled>
        {/*Dias da semana*/}
        <View style={styles.conteinerSelectButtons}>
          <SelectDays day='Seg' val='Mon' fun={addDay} list={listDays} cor={colorSeg}/>
          <SelectDays day='Ter' val='Tue' fun={addDay} list={listDays} cor={colorTer}/>
          <SelectDays day='Qua' val='Wed' fun={addDay} list={listDays} cor={colorQua}/>
          <SelectDays day='Qui' val='Thu' fun={addDay} list={listDays} cor={colorQui}/>
          <SelectDays day='Sex' val='Fri' fun={addDay} list={listDays} cor={colorSet}/>
        </View>
          {/*Treino1 -------------------------*/
              <>
              
              <View style={styles.conteinerText}>
                <Text style={styles.text} onPress={()=>{}}>Treino 1:</Text>
                <TextInput 
                  style={styles.textInput}
                  value={treino1}
                  onChangeText={(text)=>setTreino1(text)}
                  placeholder='Ex. Supino reto'
                  />
              </View>

              <>
              
              {/*carga1 ------------------------*/}
              <View style={styles.conteinerText}>
                  <Text style={styles.text}>Carga 1:</Text>
                  <TextInput 
                    style={styles.textInput} 
                    value={carga1} 
                    onChangeText={(text)=>setCarga1(text)} 
                    keyboardType='numeric'
                    placeholder='...'
                  />
                  <Text style={styles.text}> Kg </Text>
                </View> 
                {/*Serie1 -----------------------*/}
                <View style={styles.conteinerText}>
                  <Text style={styles.text}>Séries 1:</Text>
                  <TextInput 
                    style={styles.textInput} 
                    value={series1} 
                    onChangeText={(text)=>setSeries1(text)} 
                    keyboardType='numeric'
                    placeholder='...'
                  />
                    
                  <Text style={styles.text}> x</Text>
                </View>
                {/*Repetição1 ------------------*/}
                <View style={styles.conteinerText}>
                  <Text style={styles.text}>Repet  1:</Text>
                  <TextInput 
                    style={styles.textInput} 
                    value={repeat1} 
                    onChangeText={(text)=>setRepeat1(text)} 
                    keyboardType='numeric'
                    placeholder='...'
                  />
                  <Text style={styles.text}> x</Text>
                </View>
                {/*Imagem */}
                <View style={styles.conteinerText}>
                  <Text style={styles.text}>Img/Gif:</Text>
                  <TextInput  
                    style={imgGif1}
                    value={image1}
                    onChangeText={(text)=>setImage1(text)}
                    placeholder='http://image.com'
                  />
                  {
                    image1 ?
                      <>
                        <TouchableOpacity style={styles.buttonSeach} onPress={()=>setImage1('')}>
                          <Icon  name='trash'/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonSeach} onPress={()=>setIsVisible1(!isVisible1)}>
                          <Icon  name='image'/>
                        </TouchableOpacity>
                      </>
                    :
                    null 
                  }
                  
                  <TouchableOpacity style={styles.buttonSeach} onPress={()=>pickDocument(true, false)}>
                    <Icon  name='search'/>
                  </TouchableOpacity> 

                </View>

                <Modal visible={isVisible1} animationType='fade' transparent={true}>
                  <Pressable style={styles.conteinerModal} onPress={()=>setIsVisible1(!isVisible1)}>
                    <View style={styles.conteinerImage}>
                      <Image style={styles.image} source={{uri:image1}}/>
                    </View>
                  </Pressable>
                </Modal>
                
                <View style={{borderWidth: 1, borderStyle: 'dashed', borderRadius: 1}}>

                  <View style={styles.conteinerText}>
                    <Text style={styles.text} onPress={()=>{}}>Treino 2:</Text>
                  
                    <TextInput 
                      style={styles.textInput}
                      value={treino2}
                      onChangeText={(text)=>setTreino2(text)}
                      placeholder='Opcional'
                    />
                
                  </View>
                  {
                    treino2 ?
                      <>
                        {/*carga2 */}                
                        <View style={styles.conteinerText}>
                          <Text style={styles.text}>Carga 2:</Text>
                          <TextInput 
                            style={styles.textInput} 
                            value={carga2} 
                            onChangeText={(text)=>setCarga2(text)} 
                            keyboardType='numeric'
                            placeholder='...'
                          />
                          <Text style={styles.text}> Kg </Text>
                        </View> 
                        {/*Serie2 -----------------------*/}
                        <View style={styles.conteinerText}>
                          <Text style={styles.text}>Séries 2:</Text>
                          <TextInput 
                            style={styles.textInput} 
                            value={series2} 
                            onChangeText={(text)=>setSeries2(text)} 
                            keyboardType='numeric'
                            placeholder='...'
                          />
                          <Text style={styles.text}> x</Text>
                        </View>
                        {/*Repetição2 ------------------*/}
                        <View style={styles.conteinerText}>
                          <Text style={styles.text}>Repet 2:</Text>
                          <TextInput 
                            style={styles.textInput} 
                            value={repeat2} 
                            onChangeText={(text)=>setRepeat2(text)} 
                            keyboardType='numeric'
                            placeholder='...'
                          />
                          <Text style={styles.text}> x</Text>
                        </View>
                        {/*Imagem2 --------------------- */}
                        <View style={styles.conteinerText}>
                          <Text style={styles.text}>Img/Gif:</Text>
                          <TextInput  
                            style={imgGif2}
                            value={image2}
                            onChangeText={(text)=>setImage2(text)}
                            placeholder='http://image.com'
                          />
                          {
                            image2 ?
                              <>
                                <TouchableOpacity style={styles.buttonSeach} onPress={()=>setImage2('')}>
                                  <Icon  name='trash'/>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.buttonSeach} onPress={()=>setIsVisible2(!isVisible2)}>
                                  <Icon  name='image'/>
                                </TouchableOpacity>
                              </>
                            :
                            null 
                          }  
                                
                          <TouchableOpacity style={styles.buttonSeach} onPress={()=>pickDocument(false, true)}>
                            <Icon  name='search'/>
                          </TouchableOpacity> 
                          
                        </View>
                        
                        <Modal visible={isVisible2} animationType='fade' transparent={true}>
                          <Pressable style={styles.conteinerModal} onPress={()=>setIsVisible2(!isVisible2)}>
                            <View style={styles.conteinerImage}>
                              <Image 
                                style={styles.image} 
                                source={{uri: image2}}
                              />
                            </View>
                          </Pressable>
                        </Modal>
                          
                        
                      </>
                    :
                      null
                  }
                  
                </View>

              
                {/*Botões ----------------------------------------------------*/}
                <View style={[styles.conteinerText, {justifyContent: 'space-evenly', alignItems: 'center', top: '10%'}]}>
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
              </>
                
              
              
              </>
            
          }
      </KeyboardAvoidingView>
    </Pressable>
  )
}