import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function SellNow({ navigation }) {
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

                <View style={style.productContainer}>
                    <View>
                        <Text style={styles.productTitle}>Type of Product</Text>
                        <TouchableOpacity style={styles.orderButton}>
                            <Text style={styles.orderButtonText}> type </Text>
                        </TouchableOpacity>
                    </View>
                 </View>
                 <View>
                      <View style={styles.priceContainer}>
                         <Text style={styles.text}>Price</Text>
                </View>
                </View>
                      <View style={styles.QuantityContainer}>
                         <Text style={styles.text}>Quantity</Text>
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
    );
}
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backkground: '#000000',
    },
    SellContainer: {
        backgroundColor: '#E2FFF6',
        padding: 16,
        margin: 16,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    SellTitle: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 18,
    },
    SellButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },  
    productContainer: {
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
    priceContainer: {
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
    QuantityContainer: {
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
      },grid: {
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
})  

                                 