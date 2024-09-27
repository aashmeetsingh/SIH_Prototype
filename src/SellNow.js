import { StyleSheet, Text, View,ScrollView, TouchableOpacity,Image,Button } from 'react-native';
import React from 'react'

export default function SellNow() {
  return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.SellContainer}>
                    <View>
                        <Text style={styles.SellTitle}>SellNow</Text>
                    </View>
                    <TouchableOpacity style={styles.SellButton}>
                        <Button title="Buyer" onPress={() => navigation.navigate("SellNow")} color="#10B981" />
                    </TouchableOpacity>
                </View>

                <View style={styles.product}>
                    <View>
                        <Text style={styles.productTitle}>Type of Product</Text>
                        <TouchableOpacity style={styles.orderButton}>
                            <Text style={styles.orderButtonText}> type </Text>
                        </TouchableOpacity>
                    </View>
                 </View>
                 <View>
                      <View style={styles.earningsContainer}>
                         <Text style={styles.text}>Earnings</Text>
                </View>
                </View>
                      <View style={styles.trackingContainer}>
                         <Text style={styles.text}>Tracking</Text>
                </View>
                     <View style={styles.historyContainer}>
                         <Text style={styles.text}>History</Text>
                </View>
                 
                <Image
                        source={{ uri: 'https://placehold.co/100x100' }}
                        style={styles.image}
                    />
                <View style={styles.grid}>   
                    {categories.map((category, index) => (
                        <View key={index} style={styles.gridItem}>
                            <Image
                                source={category.image}
                                style={styles.gridImage}/>
                            <Text style={styles.gridText}>{category.title}</Text>
                        </View>
                    ))}
                </View>
           
                </ScrollView>
        </View>        
                                 
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7C7D1',
    },
    SellerContainer: {
        backgroundColor: '#E2FFF6',
        padding: 16,
        margin: 16,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    SellerTitle: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 18,
    },
    
    promoNote: {
        color: '#6B7280',
        fontSize: 12,
    },
    SellerButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    SellerButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    buyerContainer: {
        backgroundColor: '#E2FFF6',
        padding: 16,
        margin: 16,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buyerTitle: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    breakfastSubtitle: {
        color: '#6B7280',
        marginVertical: 4,
    },
    orderButton: {
        backgroundColor: 'black',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginTop: 8,
    },
    orderButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 16,
    },
    gridItem: {
        alignItems: 'center',
        marginBottom: 16,
    },
    gridImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    gridText: {
        fontSize: 12,
        marginTop: 8,
        textAlign: 'center',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#C995A0',
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        marginTop: 4,
    },
});