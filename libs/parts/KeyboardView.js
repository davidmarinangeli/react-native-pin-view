import React from 'react';
import { Animated, FlatList, TouchableOpacity } from 'react-native';
import { SubHead } from '../../../../src/components/ficTypographies/SubHead';
import { Colors } from '../../../../src/styles/colors';

const KeyboardView = ({
  keyboardOnPress,
  pinLength,
  onComplete,
  bgColor,
  returnType,
  animatedDeleteButton,
  deleteText,
  animatedDeleteButtonOnPress,
  styles
}) => {
  const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', deleteText, '0'];
  const renderItem = ({ item, index }) => {
    let style;
    let onPressActive;
    if (item === deleteText) {
      onPressActive = animatedDeleteButtonOnPress;
      style = [
        styles[0],
        {
          opacity: animatedDeleteButton
        }
      ];
    } else {
      onPressActive = false;
      style = [styles[0]];
    }
    return (
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => keyboardOnPress(item, returnType, pinLength, onComplete)}
        disabled={onPressActive}
      >
        <Animated.View
          style={[
            style,
            {
              backgroundColor: bgColor
            }
          ]}
        >
          <SubHead
            style={{
              color: Colors.WHITE,
              fontSize: 22,
              opacity: 1
            }}
            text={item}
          />
        </Animated.View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      scrollEnabled={false}
      horizontal={false}
      vertical={true}
      numColumns={3}
      renderItem={renderItem}
      data={data}
      keyExtractor={(val, index) => 'pinViewItem-' + index}
    />
  );
};
export default KeyboardView;
