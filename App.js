import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './component/TabNavigator';
import ScreenTest from './screecs/ScreenTest';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ScreenTest} />
        <Stack.Screen name='Tab' component={TabNavigator} options={{headerShown: true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
