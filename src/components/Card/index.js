import React, {useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView
} from 'react-native';
import styles from './styles.js';

const SavedGame = (props) => {

  const saves = props.saves;

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source = {require('../../../assets/images/cardBlur.jpg')}
        style={styles.image}
      />
      {/* Image Caption */}
      <Text style= {styles.imageCaption}> {saves.gameSave} </Text>
    </View>

  );
};

export default SavedGame;
