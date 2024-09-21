import { View, Text,  StyleSheet } from 'react-native';
import React from 'react'

export default function Categories() {
  return (
    <View>
      <Text style={styles.container}>Categories</Text>
      <View>
        <View style={styles.Boxcontainer}>
          <Text style={[styles.card, styles.wheat]}>Wheat</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  fontSize: 20,
  fontWeight: 'bold',
  color: 'black',
  paddingHorizontal:8,
  },
  Boxcontainer: {
    paddingTop:5,
    paddingHorizontal:15,
  },
  card: {
    height: 100,
    width: 100,
    borderRadius:5,
    paddingTop:2,
    paddingHorizontal:10,
  },
  wheat: {
    paddingHorizontal:15,
    paddingTop:10,
    backgroundColor: 'lightblue',
  },
});