import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from './src/screens/SignInScreen';

const Stack = createNativeStackNavigator();


function App() {
  console.log('loading screen')
  const isSignedIn = false
  return isSignedIn ? (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='LogIn' component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App