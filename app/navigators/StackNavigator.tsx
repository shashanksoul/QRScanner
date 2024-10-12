import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScanResultScreen from '../screens/ScanResultScreen';
import {Code} from 'react-native-vision-camera';
import {ScannerScreen} from '../screens';

export type StackParamList = {
  Scan: undefined;
  Result: {code: Code; image: string};
};

const Stack = createStackNavigator<StackParamList>();

const ScanStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Scan" component={ScannerScreen} />
      <Stack.Screen name="Result" component={ScanResultScreen} />
    </Stack.Navigator>
  );
};

export {ScanStackNavigator};
