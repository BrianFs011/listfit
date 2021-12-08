import React,{useState} from 'react';
import { 
          SafeAreaView,
          View, 
          Text, 
          TextInput, 
          Image, 
          Pressable, 
          Keyboard, 
          KeyboardAvoidingView, 
          TouchableOpacity 
        } from 'react-native';

import { getData, setData } from '../../storege';
import PathImages from '../../../assets/index';
import {SelectDaysEditition} from '../../components/selectDays';

import styles from './styles'
import { useDispatch } from 'react-redux';
import * as DocumentPicker from 'expo-document-picker';

let listDays = [];
export default function Editition({route, navigation}) {

  const {treino, series, repeat, carga, image, Atualizar} = route.params;

  const [treinoS,   setTreinoS  ] = useState(treino);
  const [seriesS, setSeriesS] = useState(series);
  const [repeatS, setRepeatS] = useState(repeat);
  const [cargaS,   setCargaS  ] = useState(carga);
  const [imageS,   setImageS  ] = useState(image ? image : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADDCAMAAACxkIT5AAAASFBMVEVUVFSoqKhOTk5RUVGrq6tzc3OZmZmFhYWwsLBMTEyXl5etra1vb29+fn6Li4uTk5NiYmJnZ2dbW1uhoaGAgIBeXl5ycnJsbGwxLNHVAAAEr0lEQVR4nO2cDZeiIBSG4V4ElQSVJv//P13ATPuY2Wlqzy7u+5wzk0l2uk9cQEOEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAaTO+H/3ZQz8GTfj9TWRK4svLd2Ko0B+rtDhQcwAEcwAEcwAEcwAEcwAEcwMGuHahuiYLMXbly9OXBcLBDBwwHcCDgIJfDARyI/9tBwzPNIweXwj07kK1Z0PeF+lLo9+xAqoWnC/fj4BXgAA7gAA7gAA7gAA7gAA7gAA7gAA7gAA7g4P90kK6a2ZnPL6Dt10EMXgbvuuowDcMwHarO+SDt1yL25CDG77tepMn4K/GZ6DsfPezfgbLBDCn6RwdFE4MJn2nYiQNl/dQ8jP9yIDeTf2xhFw6UcuM3bkZhGt2jlmEPDqwf6fdHZmj09/eAlO/A6v7GwNwSnm9Vug2Pen1roXQHSlZXWRCjF0N1dL7VWrfeHavYUfD1Kyqp9uTAtuPm8zOJg8vDgXPa59GS1GbirSgeW7sfB7Zr1iKi0yfDgDRwOGwtNN1WQskOlFxbgtjmmy/HQVaaTd9B/SYfCnagtNjE5H97YhDHEBtnQq9vVKwD6y8BpR7vO6eTatuL0qWXLNaBdUtTwGS+cXJ4DleZS0I0zpbtQJlFAQ3hmUsKKgxLVVjmLhXrYAmEzLM3/1pzObZwB/PHZvFUJViqwnlQwXtwcNXFPSFBzvmwBwd0+OnFRXVKEnbggF5YB8BWtAcHryhIw2wq38FrCnJNKN0BTa8uiGGn0vvGj9d/a1neo1QHP+oT7yTIsh28ETiAAziAAziAAziAAziAAzjYiwOsIclTePtSoqGwtUSxpiwAAABwQ5p8lx7m31wpTzjj607u/DRv8byT55/b0/a6gx9OYPz34aH1KWrXsWDhggyG+aDbjB5yeNP85EPQSUvZDhSP0ulg8h2za0+clm2n+FZt683tDM9/Hz5YeWRBMXQxqlBNnQw8GGNCMMb1+SWVTeu/uJFM7aaDryvmU51KKDimEGR0cKobPtTHo9O1L01CdFApkR2QDrEm06hcfGhav8xbj6dVnO9gGOqqSasF2TGGm0ryUaGTsTacbHIQs6GZ1nkphRAdNNJQjIbGOp/rkJEpy1u/WQkqZTqTC/OcJdvRlYNOLQ7yzs7+lUh+TnJQ1SmaGNeY90zp8cqB9ZFDE+ZdMQOaKwckj7Q6EGN9KKtdjA4oBRUdVHMIscr3tw6cc8nBvEgYaX/joLKbeiBEXdq5c3SQPrw2NNUf8567enDOhbUeXOdC/DPT6uCjHspzIOI3HB2IOq8UR+6uPZgTPBbkXaOtaMh5E5MgO4i1oLo4aIwqS8HsgAebvlEvx/ht9/XxsQPua5P6BS/jE3tsOJqYsoMoMahzv0BdaamQan6OuI7jAxGU6VzdpuBj0t86iC1+rbtjsLGq87F2nUlTnEmm0dVkcz3wvs0Tkwqjd5z/p7acu1b7ah47d+u3OZjzBvVOazPO0/i8blPu8DFdOaNjdNinoVQlCqsFifNAKD/weiFsO+6/bG7Ll01e/+ebQP/8JwYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwB/gFh35K7dZjp9sAAAAASUVORK5CYII=');

  const dispatch = useDispatch();

  async function Salvar(t1){
    let name1;
    PathImages.map(i=>i.uri == t1 ? name1 = i.imgName : null);
    const value = await getData('db');
    value.forEach(v=>
      {
        if(v.treino1 == treinoS){
          v.treino1 = treinoS;
          v.carga1 = cargaS;
          v.serie1 = seriesS;
          v.repeat1 = repeatS;
          v.diaTreino = listDays.length != 0 ? listDays : v.diaTreino; 
          v.image1 = imageS;
          Atualizar(treinoS, cargaS, seriesS, repeatS, imageS)

        }
        else if(v.treino2 == treinoS){
          v.treino2 = treinoS;
          v.carga2 = cargaS;
          v.serie2 = seriesS;
          v.repeat2 = repeatS;
          v.image2 = imageS;
          v.diaTreino = listDays.length != 0 ? listDays : v.diaTreino;
          Atualizar(treinoS, cargaS, seriesS, repeatS, imageS) 
        }
        
      });
      
      setData('db', value);
      dispatch({type: 'listData', listData: value});
      Cancel();
  }

  function Cancel(){ 
    setTreinoS('');
    setSeriesS('');
    setRepeatS('');
    setCargaS('');
    setImageS('');  
    navigation.goBack();
    listDays = [];
  }

  function addDay(day){
    const buscar = listDays.indexOf(day);
    if(buscar == -1){
      listDays.push(day);
    }
    else{
      listDays.splice(buscar, 1); 
    }
  }

  //mudar imagem
  async function onImage(){
    Keyboard.dismiss();
    let result = await DocumentPicker.getDocumentAsync({ type:["image/*"] });
    //console.log(result);
    if(result.type != 'cancel'){
      setImageS(result.uri);
    }
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <Pressable  style={styles.conteiner} onPress={()=>Keyboard.dismiss()} >
        <View style={styles.conteinerText}>
          <Text style={styles.text}>Treino:</Text>
          <TextInput 
            style={styles.textInput} 
            value={treinoS} 
            onChangeText={(text)=>setTreinoS(text)} 
            selection={{start:0}}/>
        </View>

        <View style={styles.conteinerText}>
          <Text style={styles.text}>Carga:</Text>
          <TextInput style={styles.textInput} value={cargaS} onChangeText={(text)=>setCargaS(text)} keyboardType='numeric'/>
          <Text style={styles.unidade}>Kg</Text>
        </View>

        <View style={styles.conteinerText}>
          <Text style={styles.text}>Séries:</Text>
          <TextInput style={styles.textInput} value={seriesS} onChangeText={(text)=>setSeriesS(text)} keyboardType='numeric'/>
          <Text style={styles.unidade}>x</Text>
        </View>

        <View style={styles.conteinerText}>
          <Text style={styles.text}>Repet :</Text>
          <TextInput style={styles.textInput} value={repeatS} onChangeText={(text)=>setRepeatS(text)} keyboardType='numeric'/>
          <Text style={styles.unidade}>x</Text>
        </View>
              
        <View style={styles.conteinerSelectButtons}>
          <SelectDaysEditition day='Seg' val='Mon' fun={addDay} />
          <SelectDaysEditition day='Ter' val='Tue' fun={addDay} />
          <SelectDaysEditition day='Qua' val='Wed' fun={addDay} />
          <SelectDaysEditition day='Qui' val='Thu' fun={addDay} />
          <SelectDaysEditition day='Sex' val='Fri' fun={addDay} />
        </View>

        <Pressable style={styles.conteinerImage} onPress={()=>onImage()}>
    
          <Image style={styles.image} source={{uri:imageS}}/>
          
        </Pressable>

        <View style={[styles.conteinerText, {justifyContent: 'space-evenly', alignItems: 'center', marginBottom: 10}]}>
            
          <TouchableOpacity style={styles.conteinerButton} onPress={()=>Cancel()}>
            <Text style={styles.textButton}>Cancelar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.conteinerButton, {borderColor: '#17e237'}]} onPress={()=>Salvar(treinoS)}>
            <Text style={[styles.textButton, {color: '#17e237'}]} >Salvar</Text>
          </TouchableOpacity>
       
        </View>

      </Pressable>
    </SafeAreaView>
  )
}