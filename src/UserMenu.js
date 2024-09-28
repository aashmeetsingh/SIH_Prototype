import { View, Text } from 'react-native'
import React from 'react'

export default function UserMenu() {
    return (
        <View style={styles.container}>
          <View style={styles.card}>
            {/* Title Section */}
            <View style={styles.textCenter}>
              <Text style={styles.title}>User Menu</Text>
            </View>
    
            {/* User Details Section */}
            <View style={styles.textCenter}>
              <Text style={styles.subtitle}>User Details</Text>
            </View>
    
            {/* User Image */}
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: 'https://placehold.co/100x100' }}
                style={styles.image}
              />
            </View>
    
            {/* First Name Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={styles.input}
                placeholder="FIRST NAME"
              />
            </View>
    
            {/* Mobile No. Input */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Mobile No.</Text>
              <TextInput
                style={styles.input}
                placeholder="MOBILE NO."
              />
            </View>
    
            {/* Aadhaar Card Section */}
            <View style={styles.aadhaarCard}>
              <Text style={styles.aadhaarText}>Aadhaar Card</Text>
              <TouchableOpacity>
                <Icon name="camera" size={24} color="#000" />
              </TouchableOpacity>
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
        width: 320, // Equivalent to w-80
        padding: 16, // Equivalent to p-4
        borderRadius: 12, // Equivalent to rounded-lg
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
      },
      textCenter: {
        alignItems: 'center',
        marginBottom: 16, // Equivalent to mb-4
      },
      title: {
        fontSize: 18, // Equivalent to text-lg
        fontWeight: 'bold', // font-bold
      },
      subtitle: {
        fontSize: 20, // Equivalent to text-xl
        fontWeight: '600', // font-semibold
      },
      imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16, // Equivalent to mb-4
      },
      image: {
        width: 100,
        height: 100,
        borderRadius: 50, // Equivalent to rounded-full
      },
      inputContainer: {
        marginBottom: 16, // Equivalent to mb-4
      },
      label: {
        fontSize: 14, // Equivalent to text-sm
        fontWeight: 'bold', // font-bold
        color: '#4B5563', // Equivalent to text-gray-700
        marginBottom: 8, // Equivalent to mb-2
      },
      input: {
        borderWidth: 1,
        borderColor: '#D1D5DB', // Equivalent to shadow appearance-none border
        borderRadius: 8, // Equivalent to rounded
        paddingVertical: 8, // Equivalent to py-2
        paddingHorizontal: 12, // Equivalent to px-3
        color: '#374151', // Equivalent to text-gray-700
      },
      aadhaarCard: {
        backgroundColor: '#FEE2E2', // bg-red-100
        padding: 16, // p-4
        borderRadius: 8, // rounded-lg
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      aadhaarText: {
        fontSize: 18, // text-lg
        fontWeight: '600', // font-semibold
      },
    });