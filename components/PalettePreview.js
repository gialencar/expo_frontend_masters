import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function PalettePreview({ handlePress, colorPalette }) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{colorPalette.paletteName}</Text>

      <FlatList
        style={styles.previewContainer}
        data={colorPalette.colors.slice(0, 5)}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View
            style={[styles.colorPreviewBox, { backgroundColor: item.hexCode }]}
          />
        )}
      />
    </TouchableOpacity>
  );
}

styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  colorPreviewBox: {
    height: 40,
    width: 40,
    marginRight: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  previewContainer: {
    marginBottom: 24,
    flexDirection: 'row',
  },
});

export default PalettePreview;
