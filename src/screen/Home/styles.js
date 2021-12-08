import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  conteiner:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center', 
    paddingTop: 30,
    backgroundColor: '#fff'
  },
  conteinerSelectButtons:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  imageStyles:{
    marginTop: 60,
    width: '80%',
    height: '40%'
  },
  title:{
    fontSize: 40,
    marginBottom: 40,
    alignItems: 'center',
   
  },
  text:{
    fontSize: 20,
    marginBottom: 40,

  },
  picker:{
    backgroundColor: '#ddd',
    height: 20,
    width: 100,
    transform: [{scaleX: 1.0}, {scaleY:1.0}]
  },
})