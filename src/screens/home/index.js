import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import styles from './styles'

const image = { uri: "https://reactjs.org/logo-og.png" };

const HomeScreen = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
      source = {require('../../../assets/images/background.jpeg')}
      style={styles.image}>
        {/* Title */}
        <Text style={styles.title}>Little Free Libraries</Text>
        <Text style={styles.subtitle}>Bingo Card Generator</Text>
        {/* Button */}
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Bingo')}>
          <Text style={styles.buttonText}>Generate a Card</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
