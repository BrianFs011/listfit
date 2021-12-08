import React,{useState, useEffect} from 'react';
import {Pressable, Text, Image, Modal, View, TouchableOpacity, Vibration } from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default function Conteiner({route, navigation}){
  
  const {treino, series, repeat, carga, image} = route.params;

  const [nameS, setNameS] = useState(treino);
  const [serieS, setSerieS] = useState(series);
  const [repeatS, setRepeatS] = useState(repeat);
  const [pesoS, setPesoS] = useState(carga);
  const [img, setImg] = useState(image ? image : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADDCAMAAACxkIT5AAAASFBMVEVUVFSoqKhOTk5RUVGrq6tzc3OZmZmFhYWwsLBMTEyXl5etra1vb29+fn6Li4uTk5NiYmJnZ2dbW1uhoaGAgIBeXl5ycnJsbGwxLNHVAAAEr0lEQVR4nO2cDZeiIBSG4V4ElQSVJv//P13ATPuY2Wlqzy7u+5wzk0l2uk9cQEOEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAaTO+H/3ZQz8GTfj9TWRK4svLd2Ko0B+rtDhQcwAEcwAEcwAEcwAEcwAEcwMGuHahuiYLMXbly9OXBcLBDBwwHcCDgIJfDARyI/9tBwzPNIweXwj07kK1Z0PeF+lLo9+xAqoWnC/fj4BXgAA7gAA7gAA7gAA7gAA7gAA7gAA7gAA7g4P90kK6a2ZnPL6Dt10EMXgbvuuowDcMwHarO+SDt1yL25CDG77tepMn4K/GZ6DsfPezfgbLBDCn6RwdFE4MJn2nYiQNl/dQ8jP9yIDeTf2xhFw6UcuM3bkZhGt2jlmEPDqwf6fdHZmj09/eAlO/A6v7GwNwSnm9Vug2Pen1roXQHSlZXWRCjF0N1dL7VWrfeHavYUfD1Kyqp9uTAtuPm8zOJg8vDgXPa59GS1GbirSgeW7sfB7Zr1iKi0yfDgDRwOGwtNN1WQskOlFxbgtjmmy/HQVaaTd9B/SYfCnagtNjE5H97YhDHEBtnQq9vVKwD6y8BpR7vO6eTatuL0qWXLNaBdUtTwGS+cXJ4DleZS0I0zpbtQJlFAQ3hmUsKKgxLVVjmLhXrYAmEzLM3/1pzObZwB/PHZvFUJViqwnlQwXtwcNXFPSFBzvmwBwd0+OnFRXVKEnbggF5YB8BWtAcHryhIw2wq38FrCnJNKN0BTa8uiGGn0vvGj9d/a1neo1QHP+oT7yTIsh28ETiAAziAAziAAziAAziAAzjYiwOsIclTePtSoqGwtUSxpiwAAABwQ5p8lx7m31wpTzjj607u/DRv8byT55/b0/a6gx9OYPz34aH1KWrXsWDhggyG+aDbjB5yeNP85EPQSUvZDhSP0ulg8h2za0+clm2n+FZt683tDM9/Hz5YeWRBMXQxqlBNnQw8GGNCMMb1+SWVTeu/uJFM7aaDryvmU51KKDimEGR0cKobPtTHo9O1L01CdFApkR2QDrEm06hcfGhav8xbj6dVnO9gGOqqSasF2TGGm0ryUaGTsTacbHIQs6GZ1nkphRAdNNJQjIbGOp/rkJEpy1u/WQkqZTqTC/OcJdvRlYNOLQ7yzs7+lUh+TnJQ1SmaGNeY90zp8cqB9ZFDE+ZdMQOaKwckj7Q6EGN9KKtdjA4oBRUdVHMIscr3tw6cc8nBvEgYaX/joLKbeiBEXdq5c3SQPrw2NNUf8567enDOhbUeXOdC/DPT6uCjHspzIOI3HB2IOq8UR+6uPZgTPBbkXaOtaMh5E5MgO4i1oLo4aIwqS8HsgAebvlEvx/ht9/XxsQPua5P6BS/jE3tsOJqYsoMoMahzv0BdaamQan6OuI7jAxGU6VzdpuBj0t86iC1+rbtjsLGq87F2nUlTnEmm0dVkcz3wvs0Tkwqjd5z/p7acu1b7ah47d+u3OZjzBvVOazPO0/i8blPu8DFdOaNjdNinoVQlCqsFifNAKD/weiFsO+6/bG7Ll01e/+ebQP/8JwYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwB/gFh35K7dZjp9sAAAAASUVORK5CYII=');

  const initialDate = new Date(0,0,0,0,1,0);

  const [time, setTime] = useState(initialDate);
  const [start, setStart] = useState(false);
  const [cont, setCont] = useState(0);

  useEffect(()=>{
    if(start == true){
     
      if(moment(time).format("mm:ss") == moment(new Date(0,0,0,0,0,0)).format("mm:ss")){
        setStart(false);
        Vibration.vibrate(1000);
        setTime(initialDate);
      }
       
      let id = setInterval(()=>{
        setTime(time - 1000);
      }, 1000);
      return ()=> clearInterval(id);
    }
   
      
  })

  function funEdit(){
    navigation.navigate('Editition',{
      treino, 
      series, 
      repeat, 
      carga, 
      image: img,
      Atualizar: (n,p,s,r,g)=>{
        setNameS(n);
        setPesoS(p);
        setSerieS(s);
        setRepeatS(r);
        setImg(g);
      }
    });
    
  }

  function Start(){
    if(moment(time).format("mm:ss") != moment(new Date(0,0,0,0,1,0)).format("mm:ss")) {
      setTime(initialDate)
    }
    else{
      setCont(cont + 1);
    }
    setStart(!start);
  }

  const stylesClock = [styles.button];
  if(moment(time).format("mm:ss") <= moment(new Date(0,0,0,0,0,30)).format("mm:ss")) stylesClock.push({borderColor: '#fe0'});
  if(moment(time).format("mm:ss") <= moment(new Date(0,0,0,0,0,10)).format("mm:ss")) stylesClock.push({borderColor: '#f00'});

  return(

    <View style={styles.conteiner}>
      
      <View style={styles.conteinerTitle}>
          <Text style={styles.title}>{nameS} <Icon style={styles.iconEdit} name="edit" size={30} onPress={()=>funEdit()}/></Text>
          
      </View>
        
      <View style={styles.conteinerInfo}>  
        {serieS ? <Text style={styles.text} onPress={()=>setCont(cont-1)}>Séries: {serieS} X {cont} </Text> : null}        
        {repeatS ? <Text style={styles.text}>Repetições: {repeatS}</Text> : null}
        {pesoS ? <Text style={styles.text}>Peso: {pesoS}</Text> : null}
        
      </View>

      <View style={styles.conteinerImage} >

        <Image 
          source={{uri:img}}
          style={[styles.imageStyles, {backgroundColor:'#ddd'}]}
          resizeMode='stretch' 
        />

      </View>

    </View>
    
    
  );
}