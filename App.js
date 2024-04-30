import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import LoginNavigation from './App/Navigations/LoginNavigation'

import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),

  });
  return (
    <ClerkProvider publishableKey='pk_test_ZGVsaWNhdGUtaGVycmluZy0wLmNsZXJrLmFjY291bnRzLmRldiQ'>
    
    <View style={styles.container}>
    
      <NavigationContainer>
        <LoginNavigation/>
      </NavigationContainer>

      <StatusBar style="auto" />
      
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
