import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  conteiner:{
    flex:1,
    backgroundColor: '#fff',
    position: 'absolute',
    height: '100%',
    width: '100%',
    
  },
  picker:{
    backgroundColor: '#fff',
    width: '40%',
    marginHorizontal: 2,
    transform: [{scaleX: 1.0}, {scaleY:1.0}]
  },
  conteinerSelectButtons:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10
  },
  conteinerText:{
    marginHorizontal: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center'
  }, 
  conteinerImage:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
 
  },
  textInput:{
    backgroundColor: '#eee',
    borderWidth: 1,
    borderRadius: 10,
    width: '38%',
    height: '100%', 
    borderColor: '#d3d3d3',
    paddingHorizontal: 20,
    marginHorizontal: 2,
    fontSize: 20, 
    color: '#666'
    
  },
  text:{
    fontSize: 20,
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
  }
 
})