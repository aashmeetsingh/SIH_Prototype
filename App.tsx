import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './src/login';
import HomeScreen from './src/Home';
import SellerHome from './src/SellerHome';
import SellNow from './src/SellNow';
import BuyNow from './src/BuyNow';
import Register from './src/Register';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={AuthScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Seller" component={SellerHome} />
        <Stack.Screen name="SellNow" component={SellNow} />
        <Stack.Screen name="BuyNow" component={BuyNow} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;