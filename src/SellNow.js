import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function SellNow({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.SellerContainer}>
                    <View>
                        <Text style={styles.SellerTitle}>e</Text>
                    </View>
                    <TouchableOpacity style={styles.SellerButton}>
                        <Button title="Buyer" onPress={() => navigation.navigate("Home")} color="#10B981" />
                    </TouchableOpacity>
                </View>
