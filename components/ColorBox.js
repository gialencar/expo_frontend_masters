import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, ColorHex }) => {
  const boxColor = {
    backgroundColor: ColorHex,
  };

  return (
    <View style={[styles.colorBox, boxColor]}>
      <Text style={styles.text}>{`${colorName}: ${ColorHex}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  colorBox: {
    paddingVertical: 10,
    width: '100%',
    textAlign: 'center',
    color: 'white',
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
