import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  FlatList,
} from 'react-native';

import scrollableList from '../../../assets/data/scrollableList'
import SavedGame from '../../components/Card'

import styles from './styles'



const saveScreen = (props) => {
  return (
    <View>
      <FlatList
        data={scrollableList}
        renderItem={({item}) => <SavedGame saves ={item} />}
      />
    </View>
  );
};

export default saveScreen;
