import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native"; // Import from 'react-native' instead of 'react-native-web'

export default function ScreenTest({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={()=>navigation.navigate('Tab')} style = {{backgroundColor: 'black', width: '30%', alignContent: 'center', alignItems:'center'}}>
        <Text style = {{color: 'white', fontSize: 20, textAlign: 'center'}}>
            press
        </Text>
      </TouchableOpacity>
    </View>
  );
}
