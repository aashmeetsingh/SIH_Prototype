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