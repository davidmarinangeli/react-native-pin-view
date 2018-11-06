import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  //passwordInputView
  passwordInputView          : {
    flexDirection: 'row',
    alignSelf    : 'center',
  },
  passwordInputViewItem      : {
    alignItems     : 'center',
    justifyContent : 'center',
    height         : 18,
    margin         : 5,
    width          : 18,
    borderRadius   : 18 / 2,
  },
  passwordInputViewItemActive: {
    alignItems     : 'center',
    justifyContent : 'center',
    height         : 18,
    width          : 18,
    margin         : 5,
    borderRadius   : 18 / 2,
  },
  // KeyboardView
  keyboardView               : {
    alignItems: 'center',
    marginTop : 16
  },
  keyboardViewItem           : {
    alignItems      : 'center',
    justifyContent  : 'center',
    height          : 75,
    width           : 75,
    marginHorizontal: 16,
    marginVertical  : 5,
  },
  keyboardViewItemText       : {
    fontSize  : 22,
    fontWeight: '900',
  },
})