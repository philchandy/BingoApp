import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable
} from 'react-native';

import styles from './styles'

const saveScreen = (props) => {
  return (
    <View>
      <Text style={styles.title}>Saved game states</Text>
      <Text style={styles.subtitle}>Implement backend to save old games to a database</Text>
    </View>
  );
};

export default saveScreen;
