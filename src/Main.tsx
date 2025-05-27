import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './presentation/screens/home/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabNavigator} from './presentation/navigators/BottomTabNavigator';

const Stack = createNativeStackNavigator();
export const Main = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />{' '}
    </NavigationContainer>
  );
};
