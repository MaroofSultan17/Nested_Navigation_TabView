import React from "react";
import { Text, View, Button } from "react-native"; // Import from 'react-native' instead of 'react-native-web'

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Home!
      </Text>
    </View>
  );
}
