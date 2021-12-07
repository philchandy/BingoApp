import React, {useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView
} from 'react-native';
import styles from './styles.js';

const Post = (props) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source = {require('../../../assets/images/card.jpeg')}
        style={styles.image}
      />

      {/* Image Caption */}
      <Text style= {styles.imageCaption}> Card Generation date? </Text>
      {/* Caption */}
      <Text style= {styles.caption}>Example Text/Description.</Text>

    </View>

  );
};

export default Post;
