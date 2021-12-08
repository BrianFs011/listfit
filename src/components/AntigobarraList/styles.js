import {StyleSheet} from 'react-native'

import commun from '../../communStyle'

export default StyleSheet.create({
  conteinerColorTreinoUnico:{
    padding: 10,
    marginBottom:8,
    width: '100%',
    borderColor: "#222",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',  
    paddingVertical: 10,
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
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 10, 
    paddingVertical: 10,
    justifyContent: 'center'
  },
  conteinerColorTreinoDarkMode:{
    padding: 10,
    marginBottom:8,
    width: '49.5%',
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 10, 
    paddingVertical: 10,
    justifyContent: 'center'
  },
  title:{
    fontSize: commun.titles,
    marginBottom: 10,
  },
  titleDarkMode:{
    fontSize: commun.titles,
    color: "#999"
  },
  text:{
    fontSize: commun.text,
  },
  textDarkMode:{
    fontSize: commun.text,
    color: "#999"
  },
})