import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PalettePreview from '../components/PalettePreview';
import { useEffect } from 'react/cjs/react.development';

const Home = ({ navigation, route }) => {
  const [colorPalettes, setColorPalettes] = useState();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const newColorPalette = route?.params?.newColorPalette;

  const fetchColorPalettes = useCallback(() => {
    fetch('https://color-palette-api.kadikraman.now.sh/palettes')
      .then((res) => res.json())
      .then((data) => setColorPalettes(data));
  }, []);

  useEffect(() => {
    if (!colorPalettes) {
      fetchColorPalettes();
      console.log('fetch');
    }
  }, []);

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    fetchColorPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 250);
  }, []);

  useEffect(() => {
    if (newColorPalette) {
      setColorPalettes((prev) => [newColorPalette, ...prev]);
    }
  }, [newColorPalette]);

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
      // refreshControl={<RefreshControl refreshing={true} onRefresh={() => {}} />}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddNewPalette');
          }}
        >
          <Text style={styles.modal}>Add a color scheme</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  modal: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'teal',
  },
});

export default Home;
