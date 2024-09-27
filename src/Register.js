import { View, Text, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'

export default function Register() {
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

            </View>
        </SafeAreaView>

    )
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