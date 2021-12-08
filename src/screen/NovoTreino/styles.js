import {StyleSheet} from 'react-native';
import commun from '../../communStyle';

export default StyleSheet.create({
  conteiner:{
    flex:1,
    paddingTop: 25,
    justifyContent: 'center',
    backgroundColor: '#fff'
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
    marginVertical: 10, 
    width: '100%'
  },
  conteinerText:{
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems: 'center',
  }, 
  conteinerModal:{
    flex:1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(00, 00, 00, 0.7)',
  },
  conteinerImage:{
    height:'50%',
    width: '100%', 
  },
  image:{
    height:'100%',
    width: '100%', 
    resizeMode: 'stretch'
  },
  textInput:{
    backgroundColor: '#eee',
    borderWidth: 1,
    borderRadius: 10,
    width: '70%',
    height: '100%', 
    borderColor: '#d3d3d3',
    paddingHorizontal: 20,
    marginLeft: 10,
    fontSize: 20, 
    color: '#666'
    
  },
  text:{
    fontSize: 20,
    color: commun.bottonColorDisable
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
  conteinerSeach:{
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonSeach:{
    marginLeft: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#c3c3c3',
    backgroundColor: '#ddd',
    justifyContent: 'center',

  }

})