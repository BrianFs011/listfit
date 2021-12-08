import {StyleSheet} from 'react-native'
import commun from '../../communStyle'

export default StyleSheet.create({
  conteiner:{
    flex: 1,
    backgroundColor: '#fff'
  },
  title:{
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  conteinerButton:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff'
    
  },
  button:{
    height: 300,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 1000,
    borderColor: '#17e237'
  },

  text:{
    fontSize: 60,
    color: commun.firstColor,
  }
})