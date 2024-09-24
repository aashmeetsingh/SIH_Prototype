import { StyleSheet, Text, View,ScrollView, TouchableOpacity,Image,Button } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.SellerContainer}>
                    <View>
                        <Text style={styles.SellerTitle}>Switch To Seller Mode</Text>
                    </View>
                    <TouchableOpacity style={styles.SellerButton}>
                        <Button title="Seller" onPress={() =>  navigation.navigate("Seller")} color="#10B981" />
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

const SwitchtoSeller = () => {

   
  };

const categories = [
    { title: 'Vegetables', image: 'https://static.vecteezy.com/system/resources/previews/022/984/730/non_2x/vegetable-transparent-free-png.png' },
    { title: 'Fruits', image: 'https://png.pngtree.com/png-clipart/20230310/ourmid/pngtree-fresh-fruit-png-image_6642661.png' },
    { title: 'Dairy', image: 'https://static.vecteezy.com/system/resources/thumbnails/024/549/128/small_2x/a-bottle-of-milk-and-glass-of-milk-on-a-basket-table-with-transparent-background-nutritious-and-healthy-dairy-products-png.png' }, 
    { title: 'Fabrics', image: 'https://e7.pngegg.com/pngimages/924/663/png-clipart-plastic-raw-material-swarf-rice-straw-material-helix.png' },
    { title: 'Atta, Rice', image: 'https://placehold.co/100x100' },
    { title: 'Grains', image: 'https://placehold.co/100x100'},
    { title: 'Masala', image: 'https://placehold.co/100x100' },
    {title: 'Oils and Ghee', image: 'https://placehold.co/100x100'},
    { title: 'Meat and Eggs', image: 'https://placehold.co/100x100' },
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
        backgroundColor: '#c7c161',
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        marginTop: 4,
    },
});