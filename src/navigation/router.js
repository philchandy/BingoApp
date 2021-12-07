import React from 'react';

import {
  NavigationContainer
} from '@react-navigation/native';

import {
  createStackNavigator
} from '@react-navigation/stack';

import HomeTabNavigator from './HomeTabNavigator';
import Post from '../components/Card';

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Greater Victoria Placemaking Network"}
          component={HomeTabNavigator}
          options = {{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name={"Bingo"}
          component={Post}
          options = {{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
