import React,{useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import commun from '../../communStyle';
import { getData, setData } from '../../storege';

import { useDispatch, useSelector } from 'react-redux';

import { useColorScheme } from 'react-native-appearance';

export default function Treinos(
  {
    treino1, 
    treino2, 
    repeat1, 
    repeat2, 
    serie1, 
    image1, 
    serie2, 
    carga1, 
    carga2, 
    image2, 
    id,
    nav 
  }){

  const dispatch = useDispatch();
  const scheme = useColorScheme();
  function More(treino, repeat, series, carga, image){
    nav.navigate("More", {
      treino: treino, 
      repeat: repeat, 
      series: series, 
      carga: carga,
      image: image,
    });

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
              console.log(d.id, i)
              if(d.id == i){
                //console.log(d.name, d.name2)
                id = d.id;
                if(d.treino2 == n){
                  //console.log(d.name2, n,'-------------------- if para name 2');
                  d.treino2 = '';
                  d.serie2 = '';
                  d.repeat2 = '';
                  d.carga2 = '';
                }
                else if(d.treino1 == n){
                  //console.log(n, d.name)
                  
                  if(treino2){
                    //console.log(d.name, '------------------- if para name se existe name 2');
                    d.treino1 = d.treino2;
                    d.serie1 = d.serie2;
                    d.repeat1 = d.repeat2;
                    d.carga1 = d.carga2;

                    d.treino2 = '';
                    d.serie2 = '';
                    d.repeat2 = '';
                    d.carga2 = '';
                    
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

  return (
    <>
      {
        treino2 ? 
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <TouchableOpacity style={conteinerColorTreino} onPress={()=>More(treino1, repeat1, serie1, carga1, image1)} onLongPress={()=>Delete(treino1, id)}>
              <Text style={title}>{treino1}</Text>
              <Text style={color}>Séries: {serie1}</Text>
              {repeat1 ? <Text style={color}>Repetições: {repeat1}</Text>: null}
              {carga1 ? <Text style={color}>{<Icon name="dumbbell" size={commun.text} color={commun.bottonColorDisable} />} {carga1} kg</Text>:null}
        
            </TouchableOpacity>
          
            <TouchableOpacity style={conteinerColorTreino} onPress={()=>More(treino2, repeat2, serie2, carga2, image2)} onLongPress={()=>Delete(treino2, id)}> 
              
              <Text style={title}>{treino2}</Text>
              <Text style={color}>Séries: {serie2}</Text>   
              {repeat2 ? <Text style={color}>Repetições: {repeat2}</Text>: null}
              {carga2 ? <Text style={color}>{<Icon name="dumbbell" size={commun.text} color={commun.bottonColorDisable} />} {carga2} kg</Text>:null}
            
            </TouchableOpacity>
          </View>
          
        :
          <TouchableOpacity style={conteinerColorTreinoUnico} onPress={()=>More(treino1, repeat1, serie1, carga1, image1)} onLongPress={()=>Delete(treino1, id)}>
            <View>
              <Text style={title}>{treino1}</Text>
              {serie1 ? <Text style={color}>Séries: {serie1}</Text> : null}
              
              {repeat1 ? <Text style={color}>Repetições: {repeat1}</Text>: null}
            </View>
            <View >
              {carga1 ? <Text style={[styles.text, {fontSize: 25}]}>{<Icon name="dumbbell" size={25} color={commun.firstColor} />} {carga1} kg</Text>:null}
            </View>
          </TouchableOpacity>

      }
    </>
  )
}