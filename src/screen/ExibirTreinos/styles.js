import {StyleSheet} from 'react-native'
import commun from '../../communStyle'

export default StyleSheet.create({
  conteiner:{
    flex: 1,  
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    paddingTop: 20 
  },
  conteinerTitle:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },

  conteinerInfo:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    //backgroundColor: '#ddd'
  },
  conteinerButtonImage:{
    padding: 20,
    //backgroundColor: '#2dd'
  },
  conteinerSecondTreino:{
    height: '8%',
    width: '100%',
    justifyContent: 'center',   
    //marginVertical: 30
  },
  buttonSecondTreino:{
    flexDirection: 'row',
    height: '100%',
    width: '15%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: commun.secondColor,
    borderRadius: 100,
    //backgroundColor: 'rgba(23,226,55, 0.1)',
    paddingHorizontal: 10
  },
  textButtonSecondTreino:{
    color: commun.primaryColor,
    fontSize: 20
  },
  imageStyles:{
    width: '100%',
    height: '100%',
  },
  conteinerButtons:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    paddingBottom: 20,
    //backgroundColor: '#777'
  },
  button:{
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#17e237'
  },

  conteinerImage:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#c3c3c3'
  },
  

  text:{
    fontSize: 20,
    marginBottom: 20,
  }
})