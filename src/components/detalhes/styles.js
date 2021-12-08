import {StyleSheet} from 'react-native'
import commun from '../../communStyle'

export default StyleSheet.create({
  conteiner:{
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff'
  },
  conteinerTitle:{
    flex:0.6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  conteinerInfo:{
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    //backgroundColor: '#dd3'
  },
  conteinerImage:{
    flex: 2,
    alignItems: 'center'
  },

  imageStyles:{
    height: '100%',
    width: '100%',
    
  },
  conteinerButton:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: commun.bottonColorDisable,
  },
  button:{
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#17e237'
    //backgroundColor: '#d2e',
  },

  text:{
    fontSize: 20,
    marginBottom: 20,
  }
})