import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function SellNow({ navigation }) {
    return (
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.header}>Add your Items to start Selling</Text>
    
            {/* Product Name */}
            <View style={styles.productInfo}>
              <Image
                source={{ uri: 'https://placehold.co/50x50' }}
                style={styles.image}
              />
              <Text style={styles.text}>Product Name</Text>
            </View>
    
            {/* Product Description */}
            <View style={styles.description}>
              <Text style={styles.text}>Product Description</Text>
            </View>
    
            {/* Price */}
            <View style={styles.price}>
              <Text style={styles.priceText}>Price</Text>
            </View>
    
            {/* Quantity */}
            <View style={styles.quantity}>
              <Text style={styles.text}>Quantity</Text>
            </View>
    
            {/* Location */}
            <View style={styles.location}>
              <Text style={styles.text}>Location</Text>
            </View>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#E5E7EB', // bg-gray-200
        justifyContent: 'center',
        alignItems: 'center',
      },
      card: {
        backgroundColor: '#FFFFFF', // bg-white
        width: Dimensions.get('window').width * 0.9, // 90% of the screen width
        height: Dimensions.get('window').height * 0.9, // 90% of the screen height
        padding: 16, // Equivalent to p-4
        borderRadius: 12, // Equivalent to rounded-lg
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
      },
      header: {
        fontSize: 18, // text-lg
        fontWeight: 'bold', // font-bold
        marginBottom: 16, // mb-4
      },
      productInfo: {
        flexDirection: 'row', // Equivalent to flex
        alignItems: 'center', // items-center
        backgroundColor: '#E5E7EB', // bg-gray-200
        padding: 8, // p-2
        marginBottom: 16, // mb-4
        borderRadius: 8, // rounded
      },
      image: {
        width: 48, // Equivalent to w-12
        height: 48, // Equivalent to h-12
        marginRight: 8, // mr-2
      },
      text: {
        color: '#4B5563', // Equivalent to text-gray-700
      },
      description: {
        backgroundColor: '#F3F4F6', // bg-gray-100
        padding: 8, // p-2
        marginBottom: 16, // mb-4
        borderRadius: 8, // rounded
      },
      price: {
        backgroundColor: '#9CA3AF', // bg-gray-400
        padding: 8, // p-2
        marginBottom: 16, // mb-4
        borderRadius: 8, // rounded
      },
      priceText: {
        color: '#FFFFFF', // text-white
      },
      quantity: {
        backgroundColor: '#FCA5A5', // bg-red-200
        padding: 8, // p-2
        marginBottom: 16, // mb-4
        borderRadius: 8, // rounded
      },
      location: {
        backgroundColor: '#E5E7EB', // bg-gray-200
        padding: 8, // p-2
        marginBottom: 16, // mb-4
        borderRadius: 8, // rounded
      },
    });