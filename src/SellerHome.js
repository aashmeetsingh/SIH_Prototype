import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function SellerHome({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.SellerContainer}>
                    <View>
                        <Text style={styles.SellerTitle}>Switch To Buyer Mode</Text>
                    </View>
                    <TouchableOpacity style={styles.SellerButton}>
                        <Button title="Buyer" onPress={() => navigation.navigate("Home")} color="#10B981" />
                    </TouchableOpacity>
                </View>

                <View style={styles.buyerContainer}>
                    <View>
                        <Text style={styles.buyerTitle}>Sell Your Fresh Goods Directly to Buyers</Text>
                        <TouchableOpacity style={styles.orderButton}>
                            <Button title="Sell Now" onPress={() => navigation.navigate("SellNow")} color="#000000" /> 
                        </TouchableOpacity>
                    </View>
                </View>
            
                <View>
                <TouchableOpacity>
                    <View style={styles.earningsContainer}>
                        <Text style={styles.text}>Earnings</Text>
                    </View>
                    </TouchableOpacity>
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
                                style={styles.gridImage} />
                            <Text style={styles.gridText}>{category.title}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <View style={styles.bottomNav}>
                {navItems.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.navItem}>
                        <Icon name={item.icon} size={24} />
                        <Text style={styles.navText}>{item.label}</Text>
                    </TouchableOpacity>
                ))}

            </View>
        </View>
    );
}

const categories = []


const navItems = [
    { label: 'Home', icon: 'home' },
    { label: 'Categories', icon: 'th-large' },
    { label: 'Search', icon: 'search' },
    { label: 'Account', icon: 'user' },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFE498',
    },
    SellerContainer: {
        backgroundColor: '#E2FFF6',
        padding: 16,
        height: '15%',
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
    earningsContainer: {
        width: '92%',
        length: '50%',
        backgroundColor: '#E2FFF6',
        padding: 16,
        margin: 16,
        borderRadius: 8,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
    historyContainer: {
        width: '92%',
        length: '50%',
        height: '20%',
        backgroundColor: '#E2FFF6',
        padding: 16,
        margin: 16,
        borderRadius: 8,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
    trackingContainer: {
        width: '92%',
        length: '50%',
        height: '20%',
        backgroundColor: '#E2FFF6',
        padding: 16,
        margin: 16,
        borderRadius: 8,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
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
        backgroundColor: '#C7C161',
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        marginTop: 4,
    },
});
