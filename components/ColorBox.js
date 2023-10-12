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
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ColorBox;
