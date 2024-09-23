import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
const App = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.SellerContainer}>
                    <View>
                        <Text style={styles.SellerTitle}>Switch To Seller Mode</Text>
                    </View>
                    <TouchableOpacity style={styles.SellerButton}>
                        <Text style={styles.SellerButtonText}>Seller</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buyerContainer}>
                    <View>
                        <Text style={styles.buyerTitle}>Get Fresh Goods Directly From Famers</Text>
                        <TouchableOpacity style={styles.orderButton}>
                            <Text style={styles.orderButtonText}>Order Now</Text>
                        </TouchableOpacity>
                    </View>
                    <Image
                        source={{ uri: 'https://placehold.co/100x100' }}
                        style={styles.image}
                    />
                </View>

                <View style={styles.grid}>
                    {categories.map((category, index) => (
                        <View key={index} style={styles.gridItem}>
                            <Image
                                source={{ uri: category.image }}
                                style={styles.gridImage}
                            />
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
};

const categories = [
    { title: 'Vegetables', image: 'https://placehold.co/100x100' },
    { title: 'Dairy', image: 'https://placehold.co/100x100' },
    { title: 'Fruits', image: 'https://placehold.co/100x100' },
    { title: 'Cotton, Jute', image: 'https://placehold.co/100x100' },
    { title: 'Atta, Rice ', image: 'https://placehold.co/100x100' },
    { title: 'Masala, Oil', image: 'https://placehold.co/100x100' },
    { title: 'Grains', image: 'https://placehold.co/100x100' },
    { title: 'Chicken', image: 'https://placehold.co/100x100' },
];

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
        backgroundColor: '#10B981',
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
        borderColor: '#E5E7EB',
        backgroundColor: 'white',
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        marginTop: 4,
    },
});

export default App;