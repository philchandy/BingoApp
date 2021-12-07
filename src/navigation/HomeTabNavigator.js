import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/home';
import Post from '../components/Card';
import saveScreen from '../screens/saves';
import Maps from '../screens/GoogleMaps';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
  return (
    <Tab.Navigator screenOptions = {{
      activeTintColor: '#f15454'
    }}>
      <Tab.Screen
        name = {'Home'}
        component={HomeScreen}
        options ={{
          tabBarIcon: ({color : string}) => (
            <Feather name="home" size={25} color={'#f15454'} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name = {'Bingo'}
        component={Post}
        options ={{
          tabBarIcon: ({color : string}) => (
            <Feather name="edit-2" size={25} color={'#f15454'}/>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name = {'Saves'}
        component={saveScreen}
        options ={{
          tabBarIcon: ({color : string}) => (
            <FontAwesome name="heart-o" size={25} color={'#f15454'} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name = {'Explore'}
        component={Maps}
        options ={{
          tabBarIcon: ({color : string}) => (
            <Feather name="map" size={25} color={'#f15454'} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
