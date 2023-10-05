import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container]}>
        <Text style={styles.heading}>
          Here are some boxes of different colors
        </Text>
        <ColorBox colorName={'Cyan'} ColorHex={'#2aa198'} />
        <ColorBox colorName={'Blue'} ColorHex={'#268bd2'} />
        <ColorBox colorName={'Magenta'} ColorHex={'#d33682'} />
        <ColorBox colorName={'Orange'} ColorHex={'#cb4b16'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 30,
  },
  safeArea: {
    flex: 1,
  },
});

export default App;
