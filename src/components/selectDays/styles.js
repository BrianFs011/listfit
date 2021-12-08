import {StyleSheet} from 'react-native'

import commun from '../../communStyle'

export default StyleSheet.create({
  conteiner:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  conteinerButton:{
    borderBottomWidth: 0,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
    borderColor: commun.bottonColorDisable,
  },
  buttonText:{
    fontWeight: '100',
    fontSize: commun.titleSize,
    color: commun.bottonColorDisable,
  }
})