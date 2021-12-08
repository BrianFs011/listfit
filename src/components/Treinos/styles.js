import {StyleSheet} from 'react-native'

import commun from '../../communStyle'

export default StyleSheet.create({
  conteinerColorTreinoUnico:{
    padding: 10,
    width: '100%',
    borderColor: "#222",
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',  
    paddingVertical: 10,
    backgroundColor: '#fff'

  },
  conteinerColorTreinoUnicoDarkMode:{
    padding: 10,
    marginBottom:8,
    width: '100%',
    paddingHorizontal: 10,
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',  
    paddingVertical: 10,
  },
  conteinerColorTreino:{
    padding: 10,
    marginBottom:8,
    width: '49.5%',
    borderColor: commun.firstColor,
    borderBottomWidth: 1,
    borderRadius: 10, 
    paddingVertical: 10,
    justifyContent: 'center'
  },
  conteinerColorTreinoDarkMode:{
    padding: 10,
    marginBottom:8,
    width: '49.5%',
    borderColor: commun.firstColor,
    borderWidth: 1,
    borderRadius: 10, 
    paddingVertical: 10,
    justifyContent: 'center'
  },
  title:{
    fontSize: commun.titleSize,
    marginBottom: 10,
    color: commun.firstColor,
  },
  titleDarkMode:{
    fontSize: commun.titleSize,
    color: commun.firstColor,
  },
  text:{
    fontSize: commun.textSize,
    color: commun.firstColor,
  },
  textDarkMode:{
    fontSize: commun.textSize,
    color: commun.firstColor
  },
})