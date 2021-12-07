/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Router from './src/navigation/router';

import HomeScreen from './src/screens/home';


const App: () => React$Node = () => {
  return (
    <>
      <Router />
    </>
  );
};

export default App;
