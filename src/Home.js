import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Categories from './FlatCards';



const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Categories></Categories>
    </View>
  );
};



export default HomeScreen;