
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import React from 'react'

export default function BuyNow() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Vegetables</Text>
        </View>
        <ScrollView contentContainerStyle={styles.body}>
          {/* Product 1 */}
          <View style={styles.product}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-IsP1jis0bLu5EkyjbR6cmBLf.png?st=2024-09-28T03%3A54%3A49Z&se=2024-09-28T05%3A54%3A49Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-28T00%3A40%3A54Z&ske=2024-09-29T00%3A40%3A54Z&sks=b&skv=2024-08-04&sig=bcKz063lVlHnH622oXdQGcRgu3QXZNuPjNv/LdbErYc%3D',
              }}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>Product Name</Text>
              <Text>Price</Text>
            </View>
            <View style={styles.productDetails}>
              <Text>Location</Text>
              <Text>Quantity</Text>
            </View>
          </View>

          {/* Product 2 */}
          <View style={styles.product}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-IsP1jis0bLu5EkyjbR6cmBLf.png?st=2024-09-28T03%3A54%3A49Z&se=2024-09-28T05%3A54%3A49Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-28T00%3A40%3A54Z&ske=2024-09-29T00%3A40%3A54Z&sks=b&skv=2024-08-04&sig=bcKz063lVlHnH622oXdQGcRgu3QXZNuPjNv/LdbErYc%3D',
              }}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>Product Name</Text>
              <Text>Price</Text>
            </View>
            <View style={styles.productDetails}>
              <Text>Location</Text>
              <Text>Quantity</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the view takes the full screen
    backgroundColor: '#E5E7EB', // Equivalent to bg-gray-200
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF', // Equivalent to bg-white
    width: Dimensions.get('window').width * 0.9, // 90% of the screen width
    height: Dimensions.get('window').height * 0.9, // 90% of the screen height
    borderRadius: 12, // Equivalent to rounded-lg
    shadowColor: '#000', // Equivalent to shadow-lg
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    padding: 16, // Equivalent to p-4
  },
  headerText: {
    fontSize: 18, // Equivalent to text-lg
    fontWeight: '600', // Equivalent to font-semibold
  },
  body: {
    padding: 16, // Equivalent to p-4
  },
  product: {
    backgroundColor: '#9CA3AF', // Equivalent to bg-gray-400
    padding: 16, // Equivalent to p-4
    borderRadius: 12, // Equivalent to rounded-lg
    flexDirection: 'row', // Equivalent to flex
    alignItems: 'center',
    marginBottom: 16, // Equivalent to space-y-4
  },
  image: {
    width: 50, // Equivalent to w-12
    height: 50, // Equivalent to h-12
    marginRight: 16, // Equivalent to mr-4
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontWeight: '600', // Equivalent to font-semibold
  },
  productDetails: {
    marginLeft: 'auto',
    textAlign: 'right',
  },
});