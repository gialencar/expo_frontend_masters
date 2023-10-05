import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };

  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  return (
    <View style={[styles.colorBox, boxColor]}>
      <Text style={[styles.text, textColor]}>{`${colorName}: ${hexCode}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  colorBox: {
    paddingVertical: 10,
    marginBottom: 10,
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ColorBox;
