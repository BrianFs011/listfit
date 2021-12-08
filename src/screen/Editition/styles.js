import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  conteiner:{
    flex:1,
    paddingTop: 25,
    backgroundColor: '#fff'
  },
  conteinerText:{
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }, 
  textInput:{
    backgroundColor: '#eee',
    borderWidth: 1,
    borderRadius: 10,
    width: '65%', 
    height: 35,
    borderColor: '#d3d3d3',
    paddingHorizontal: 20,
    fontSize: 20
  },
  text:{
    width:'23%' , 
    fontSize: 25,
  },
  unidade:{
    marginLeft: 10,
    fontSize: 25,
  },
  picker:{
    backgroundColor: '#fff',
    width: '50%',
    marginHorizontal: 2,
    transform: [{scaleX: 1.0}, {scaleY:1.0}]
  },
  conteinerSelectButtons:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10
  },
  conteinerButton:{
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#f00',
  },
  textButton:{
    color: '#f00',
    fontSize: 20
  }, 
  conteinerImage:{
    alignItems: 'center',
    height: '49%',
  },
  image:{
    height: '100%',
    width: '100%'
  }
})