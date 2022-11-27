import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from './src/screens/SignInScreen';
import { Provider } from 'react-redux';
import { auth } from './src/utils/firebase';
import { store } from './src/store';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

function SignUpStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name='LogIn' component={SignInScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

function RootNavigaton() {
  const [currUser, setCurrUser] = useState(null);

  const userHandler = user => user ? setCurrUser(user) : setCurrUser(null)

  useEffect(() => auth.onAuthStateChanged(user => userHandler(user)), []);

  return (
    <NavigationContainer>
      <>{currUser ? <MainStack /> : <SignUpStack /> }</>
    </NavigationContainer>
  )
}


function App() {
  return (
    <Provider store={store}>
      <RootNavigaton />
    </Provider>
  )
}

export default App