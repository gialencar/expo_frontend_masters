import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PalettePreview from '../components/PalettePreview';
import { useEffect } from 'react/cjs/react.development';

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = useState();

  const fetchColors = useCallback(() => {
    fetch('https://color-palette-api.kadikraman.now.sh/palettes')
      .then((res) => res.json())
      .then((data) => setColorPalettes(data));
  }, []);

  useEffect(() => {
    if (!colorPalettes) {
      fetchColors();
      console.log('fetch');
    }
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={colorPalettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => navigation.navigate('ColorPalette', item)}
          colorPalette={item}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
});

export default Home;
