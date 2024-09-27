import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RegisterScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [Email, setEmail] = useState('');
    const [Mobile_No, setMoblie] = useState('');

    const handleUsernameChange = (text) => {
        setUsername(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handleMoblieChange = (text) => {
        setMoblie(text);
    };

    const handleRegister = () => {
        console.log('Register button pressed');
        navigation.navigate("Home");
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#AFE8BE' }}>
            <View style={styles.container}>
                <Text style={styles.title}>Register</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={handleUsernameChange}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={handlePasswordChange}
                    secureTextEntry={true}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={Email}
                    onChangeText={handleEmailChange}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mobile no."
                    value={Mobile_No}
                    onChangeText={handleMoblieChange}
                    secureTextEntry={true}
                />
                <Button title="Register" onPress={handleRegister} />
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.link}>Already have an account? Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 16,
    },
    link: {
        marginTop: 40,
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'underline',
      },
});