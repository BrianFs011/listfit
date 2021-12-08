import React,{useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import commun from '../../communStyle';
import { getData, setData } from '../../storege';
import moment from 'moment';

import { useDispatch, useSelector } from 'react-redux';

import { useColorScheme } from 'react-native-appearance';

const atualDate = new Date(2021,10,24);

export default function BarList({name, repeat, series, peso, name2, repeat2, series2, peso2, id, nav }){

  const dispatch = useDispatch();
  const scheme = useColorScheme();
  const [Date, setDate] = useState();

  function More(n, r, s, p){
    
    nav.navigate("More", {
      name: n, 
      repeat: r, 
      series: s, 
      peso: p,
      
    });

    //console.log(Date)
  }

  async function Delete(n,i){
    const data = await getData('db');
    const list = data ? data  : [];
    let novaList = [];
    let id;
 
    //console.log(filter);
    Alert.alert("Excluir", "Deseja mesmo excluir o treino ?", 
    [
      {
        text: "Cancelar",
        onPress: ()=>console.log("cancelar"),
      },
      {
        text: "Sim",
        onPress: ()=>{
          list.forEach(d=>
            {
              if(d.id == i){
                //console.log(d.name, d.name2)
                id = d.id;
                if(d.name2 == n){
                  //console.log(d.name2, n,'-------------------- if para name 2');
                  d.name2 = '';
                  d.serie2 = '';
                  d.repeat2 = '';
                  d.peso2 = '';
                }
                else if(d.name == n){
                  //console.log(n, d.name)
                  
                  if(name2){
                    //console.log(d.name, '------------------- if para name se existe name 2');
                    d.name = d.name2;
                    d.serie = d.serie2;
                    d.repeat = d.repeat2;
                    d.peso = d.peso2;

                    d.name2 = '';
                    d.serie2 = '';
                    d.repeat2 = '';
                    d.peso2 = '';
                    
                  }
                  else{
                    //console.log('---- if para quando só tem 1')
                    //d.diaTreino = [];
                    if(list.length != 1){
                      novaList = list.filter(f=> f.id != id );
                    }
                    else{
                      list.pop();
                    }
            
                  }
                 
                  
                  
                }
                //console.log(d);
                //console.log(list.filter(f=> f.id != id ));
              }
            }
          )
          //console.log('db ---->',list);
          //console.log("----", novaList);
          if(novaList.length == 0){
            setData('db', list);
            dispatch({type: 'listData', listData: list});
            //console.log('list');
            
          }
          else{
            setData('db', novaList);
            dispatch({type: 'listData', listData: novaList});
          }
        },
      }
    ]);
  }

  const title = [styles.title];
  const color = [styles.text];
  const conteinerColorTreino = [styles.conteinerColorTreino]; 
  const conteinerColorTreinoUnico = [styles.conteinerColorTreinoUnico]; 
  if(scheme === 'dark'){
    title.push(styles.titleDarkMode);
    color.push(styles.textDarkMode);
    conteinerColorTreino.push(styles.conteinerColorTreinoDarkMode);
    conteinerColorTreinoUnico.push(styles.conteinerColorTreinoUnicoDarkMode);
  }
//Não esta sendo utilizado --------------------------------------------------------------------------------------->
  return (
    <>
      {
        Date ?
          
          name2 ? 
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <TouchableOpacity style={conteinerColorTreino} onPress={()=>More(name, repeat, series, peso)} onLongPress={()=>Delete(name, id)}>
                <Text style={title}>{name}</Text>
                <Text style={color}>Séries: {series}</Text>
                {repeat ? <Text style={color}>Repetições: {repeat}</Text>: null}
                {peso ? <Text style={color}>{<Icon name="dumbbell" size={commun.text}/>} {peso} kg</Text>:null}
          
              </TouchableOpacity>
            
              <TouchableOpacity style={conteinerColorTreino} onPress={()=>More(name2, repeat2, series2, peso2)} onLongPress={()=>Delete(name2, id)}> 
                
                <Text style={title}>{name2}</Text>
                <Text style={color}>Séries: {series2}</Text>   
                {repeat2 ? <Text style={color}>Repetições: {repeat2}</Text>: null}
                {peso ? <Text style={color}>{<Icon name="dumbbell" size={commun.text}/>} {peso2} kg</Text>:null}
              
              </TouchableOpacity>
            </View>
            
          :
            <TouchableOpacity style={conteinerColorTreinoUnico} onPress={()=>More(name, repeat, series, peso)} onLongPress={()=>Delete(name, id)}>
              <View>
                <Text style={title}>{name}</Text>
                {series ? <Text style={color}>Séries: {series}</Text> : null}
                
                {repeat ? <Text style={color}>Repetições: {repeat}</Text>: null}
              </View>
              <View >
                {peso ? <Text style={color,[{fontSize: 25}]}>{<Icon name="dumbbell" size={commun.titles}/>} {peso} kg</Text>:null}
              </View>
            </TouchableOpacity>
          :
            null

      }
    </>
  )
}