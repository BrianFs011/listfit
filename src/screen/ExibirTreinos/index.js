import React, {useState, useEffect} from 'react';
import { 
         View, 
         Text, 
         Image, 
         TouchableOpacity, 
         Vibration, 
         SafeAreaView,
         Modal,
         Pressable,
       } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import image from '../../../assets';

import styles from './styles'
import { useDispatch, useSelector,  } from 'react-redux';
import { getData } from '../../storege';
import commun from '../../communStyle';

const initialDate = new Date();//2021,10,24
export default function ExibirTreinos({route, navigation}){
  
  const initialTime = new Date(0,0,0,0,1,0);

  const [date, setDate] = useState(moment(initialDate).format('ddd'));
  const [indicator,  setIndicator] = useState(0);
  const [list, setList] = useState([]);

  const [idS,   setIdS   ] = useState();
  const [nameS,   setNameS   ] = useState();
  const [serieS,  setSerieS  ] = useState();
  const [repeatS, setRepeatS ] = useState();
  const [pesoS,   setPesoS   ] = useState();
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [verification, setVerification] = useState(false);
  
  useEffect (async ()=>{
    const nlist = [];
    const value = await getData('db');
    value.map(m=>{
      const indexDate = m.date.indexOf(date);
      if(indexDate != -1) nlist.push(m) 
    });
    
    if(nlist.length != 0){

      setList(nlist);
      
      setIdS(nlist[indicator].id);
      setNameS(nlist[indicator].treino1);
      setSerieS(nlist[indicator].serie1);
      setRepeatS(nlist[indicator].repeat1);
      setPesoS(nlist[indicator].carga1);
      setImage1(nlist[indicator].image1);
      setImage2(nlist[indicator].image2);
    }

  },[indicator])

  const [time, setTime] = useState(initialTime);
  const [start, setStart] = useState(false);
  const [cont, setCont] = useState(0);

  function atualizar (){
    if(indicator < list.length - 1 ){
      if(cont == serieS ){

        setCont(0);
        
        setIndicator(indicator+1);
        setNameS(list[indicator+1].treino1);
        setSerieS(list[indicator+1].serie1);
        setRepeatS(list[indicator+1].repeat1);
        setPesoS(list[indicator+1].carga1);
        setIdS(list[indicator+1].id);
        setImage1(list[indicator+1].image1);
        setImage2(list[indicator+1].image2);
      }

    }
    else{
      if(cont == serieS ){
        navigation.goBack();
      }
    }
  }

  function mudarTreino(){
    setVerification(!verification);
    if(verification){
      setNameS(list[indicator].treino1);  
      setSerieS(list[indicator].serie1) ;
      setRepeatS(list[indicator].repeat1);
      setPesoS(list[indicator].carga1);  
      setIdS(list[indicator].id);
      setImage1(list[indicator].image1);
    }
    else{
      setNameS(list[indicator].treino2);  
      setSerieS(list[indicator].serie2) ;
      setRepeatS(list[indicator].repeat2);
      setPesoS(list[indicator].carga2);  
      setIdS(list[indicator].id);
      setImage2(list[indicator].image2);

    }
  }

  function FallBack(){
    if(indicator > 0) - setIndicator(indicator - 1);
    setVerification(false);
    setTime(initialTime);
    setStart(false);
    setCont(0);
  }
  
  function Next(){
    setVerification(false);
    if(indicator < list.length - 1) setIndicator(indicator + 1);
    setTime(initialTime);
    setStart(false);
    setCont(0);
  }

  useEffect(()=>{
    if(start == true){
     
      if(moment(time).format("mm:ss") == moment(new Date(0,0,0,0,0,0)).format("mm:ss")){
        setStart(false);
        //Vibration.vibrate(1000);
        setTime(initialTime);
        
        atualizar();
        
      }
       
      let id = setInterval(()=>{
        setTime(time - 1000);
      }, 1000);
      return ()=> clearInterval(id);
    }
   
      
  })

  function Start(){
    if(moment(time).format("mm:ss") != moment(time).format("mm:ss")) {
      setTime(initialTime)
    }
    else{
      if(cont < serieS){
        setCont(cont + 1);
      }
    }
    setStart(!start);
  }

  const stylesClock = [styles.button,{marginBottom: 200}];
  if(moment(time).format("mm:ss") <= moment(new Date(0,0,0,0,0,30)).format("mm:ss")) stylesClock.push({borderColor: '#fe0'});
  if(moment(time).format("mm:ss") <= moment(new Date(0,0,0,0,0,10)).format("mm:ss")) stylesClock.push({borderColor: '#f00'});

  return (
    <SafeAreaView style={styles.conteiner}>
      {
        list.length != 0 ?
          <>
            <View style={styles.conteinerTitle}>
              <Text style={styles.title}>{nameS}</Text>
            </View>
            <View style={styles.conteinerInfo}>
              {serieS ? <Text style={styles.text} onPress={()=>cont > 0 ? setCont(cont-1) : null}>Séries: {serieS} X {cont} </Text> : null}        
              {repeatS ? <Text style={styles.text}>Repetições: {repeatS}</Text> : null}
              {pesoS ? <Text style={styles.text}>Peso: {pesoS}</Text> : null}
            </View>
            { 
              verification ? 
                image2 ?
                  <View style={styles.conteinerImage}>
                    <Image 
                    source={{uri:image2}}
                    style={styles.imageStyles}
                    resizeMode='stretch'/>
                  </View>
                :
                  <View style={styles.conteinerImage}>
                    <Icon 
                      style={styles.imageButton} 
                      size={100} 
                      name='image' />
                  </View>
              :
                image1 ?
                  <View style={styles.conteinerImage}>
                    <Image 
                    source={{uri:image1}}
                    style={styles.imageStyles}
                    resizeMode='stretch'/>
                  </View>
                :
                <View style={styles.conteinerImage}>
                  <Icon 
                    style={styles.imageButton} 
                    size={100} 
                    name='image' />
                </View>
                
            }
            {
              list[indicator].treino2 ?
                verification == false?
                  <View style={[styles.conteinerSecondTreino, indicator == 0 || indicator == list.length - 1 ? {alignItems: 'center'} : {alignItems: 'flex-start'}]}>
                    <TouchableOpacity 
                      style={[styles.buttonSecondTreino, indicator == 0 || indicator == list.length - 1 ? {} : {marginLeft: '62%'} ]} 
                      onPress={()=>mudarTreino()}>
                      <Icon name='chevron-right' color={commun.secondColor} />
                      <Icon name='chevron-right' color={commun.secondColor} style={{marginLeft: -8}} />
                      <Icon name='chevron-right' color={commun.secondColor} style={{marginLeft: -8}} />
                    </TouchableOpacity>
                  </View>
                :
                  <View style={[styles.conteinerSecondTreino, indicator == 0 || indicator == list.length -1 ? {alignItems: 'center'} : {alignItems: 'flex-start'}]}>
                    <TouchableOpacity 
                      style={[styles.buttonSecondTreino, indicator == 0 || indicator == list.length -1 ? {} : {marginLeft: '22%'}]} 
                      onPress={()=>mudarTreino()}>
                      <Icon name='chevron-left' color={commun.secondColor} style={{marginRight: -8}} />
                      <Icon name='chevron-left' color={commun.secondColor} style={{marginRight: -8}} />
                      <Icon name='chevron-left' color={commun.secondColor} />
                    </TouchableOpacity>
                  </View>
              : <></>
            }
            { indicator > 0 && indicator < list.length - 1?
                <View style={styles.conteinerButtons}>
                  <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>FallBack()}>
                    <Icon name='chevron-left' size={30} />
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.button, {marginBottom: 20}]} onPress={()=>Start()}>
                    <Text 
                      style={styles.title}>
                      {moment(time).format("mm:ss")}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.button} 
                    onPress={()=>Next(idS)}>
                    <Icon name='chevron-right' size={30} />
                  </TouchableOpacity>
                </View>
              :
                indicator == list.length - 1 ?
                  <View style={styles.conteinerButtons}>
                    <TouchableOpacity 
                      style={styles.button}
                      onPress={()=>FallBack()}>
                        <Icon name='chevron-left' size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>Start()}>
                      <Text 
                        style={styles.title}>
                        {moment(time).format("mm:ss")}
                      </Text>
                    </TouchableOpacity>
                  </View>
                :
                  <View style={styles.conteinerButtons}>
                    <TouchableOpacity style={styles.button} onPress={()=>Start()}>
                      <Text 
                        style={styles.title}>
                        {moment(time).format("mm:ss")}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={styles.button} 
                      onPress={()=>Next(idS)}>
                      <Icon name='chevron-right' size={30} />
                    </TouchableOpacity>
                  </View>
            }
          </>
        :
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Nenhum treino encontrado para hoje</Text>
        </View>
      }
    </SafeAreaView>
  )
}