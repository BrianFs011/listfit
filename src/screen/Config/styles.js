import {StyleSheet} from 'react-native';
import commun from '../../communStyle';

export default StyleSheet.create({
  conteiner:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  conteinerConfig:{
    flexDirection: 'row',
  },
  conteinerButton:{
    backgroundColor: commun.bottonColorEnable,
    marginTop: 40,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton:{
    fontSize: 20,
    color: '#fff'
  },
  text:{
    width:'40%',
  },
  textInput:{
    width: '20%',
    backgroundColor: '#c3c3c3',
    paddingHorizontal: 20,
    marginLeft: 10
  }
})