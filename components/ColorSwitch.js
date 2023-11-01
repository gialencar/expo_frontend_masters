import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';

function ColorSwitch({ colorName }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View>
      <Text>{colorName}</Text>
      <Switch value={isEnabled} onValueChange={toggleSwitch} />
    </View>
  );
}

export default ColorSwitch;
