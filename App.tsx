import React from 'react';
import { StyleSheet } from "react-native";
import { extendTheme, NativeBaseProvider, StatusBar, useColorModeValue } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './src/screens/LandingPage';
import Results from './src/screens/Results';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  const Stack = createNativeStackNavigator();
  const customTheme = extendTheme({
    config: {
      initialColorMode: 'dark'
    }
  });

  const config = {
    dependencies: {
      'linear-gradient': LinearGradient
    }
  }

  return (
    <NavigationContainer>
      <NativeBaseProvider config={config} theme={customTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={LandingPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Results"
            component={Results}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <StatusBar
          backgroundColor={"gray"}
          barStyle={"light-content"}
          hidden
        />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "black",
    opacity: 0.5,
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
    // ...StyleSheet.absoluteFillObject,
    width: "100%",
  },
});
