import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AuthScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = () => {
    navigation.navigate("Home");
    console.log('Login button pressed');
  };

  const handleRegister = () => {

    console.log('Register button pressed');
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = () => {
    if (isLogin) {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#AFE8BE' }}>
      <View style={styles.container}>
        <Text style={styles.title}>{isLogin ? 'Login' : 'Register'}</Text>
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
        <Button title={isLogin ? 'Login' : 'Register'} onPress={handleSubmit} />
        <TouchableOpacity onPress={toggleAuthMode}>
          <Text style={styles.link}>
            {isLogin ? 'Don\'t have an account? Register' : 'Already have an account? Login'}
          </Text>
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
    marginTop:40,
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});