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

                <View style={style.product}>
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
                                 