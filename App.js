import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from './src/screens/SignInScreen';
import { Provider, useSelector } from 'react-redux';
import { store } from './src/store';

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
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
  )
}

function RootNavigaton() {
  const token = useSelector(state => state.AuthReducers.authToken)
  return (
    <NavigationContainer>
      {
        token === null ?
        <SignUpStack /> : <MainStack />
      }
    </NavigationContainer>
  )
}


function App() {
  console.log('loading screen')
  return (
    <Provider store={store}>
      <RootNavigaton />
    </Provider>
  )
}

export default App