import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function SellNow({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.SellerContainer}>
                    <View>
                        <Text style={styles.SellerTitle}>SellNow</Text>
                    </View>
                    <TouchableOpacity style={styles.SellerButton}>
                        <Button title="Sell " onPress={() => navigation.navigate("SellNow")} color="#10B981" />
                    </TouchableOpacity>
                </View>

                <View style={styles.productContainer}>
                    <View>
                        <TouchableOpacity style={styles.orderButton}>
                            <Text style={styles.orderButtonText}> Type of product </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.pricetContainer}>
                <View>
                    <View style={styles.priceContainer}>
                        <TouchableOpacity styles={styles.orderButton}>
                        <Text style={styles.text}>Price</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
                <View style={styles.QuantityContainer}>
                <TouchableOpacity styles={styles.orderButton}>
                    <Text style={styles.text}>Quantity</Text>
                    </TouchableOpacity>
                </View>
                <Image
                    source={{ uri: 'https://placehold.co/100x100' }}
                    style={styles.image}
                />
                </ScrollView>
                </View>
            
    );
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
    productContainer: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'left',
        width: '100%',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
    priceContainer:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'left',
        width: '100%',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
    QuantityContainer:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'left',
        width: '100%',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
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