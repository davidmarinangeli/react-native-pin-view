import { Dimensions, StyleSheet } from 'react-native';
import { isTablet } from '../../../../src/utils/deviceChecker';

export default StyleSheet.create({
  //passwordInputView
  passwordInputView: {
    flexDirection: 'row'
  },
  passwordInputViewItem: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 18,
    margin: 5,
    width: 18,
    borderRadius: 18 / 2
  },
  passwordInputViewItemActive: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 18,
    width: 18,
    margin: 5,
    borderRadius: 18 / 2
  },
  // KeyboardView
  keyboardView: {
    marginTop: 0
  },
  keyboardViewItem: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,
    width: isTablet() ? Dimensions.get('window').width / 6 - 16 : Dimensions.get('window').width / 3 - 16,
    marginHorizontal: 8,
    marginVertical: 5
  },
  keyboardViewItemText: {
    fontSize: 22,
    fontWeight: '900'
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    height: 124,
    backgroundColor: 'transparent'
  },
  rootStyle: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
