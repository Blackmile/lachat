import { View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import backgroundImg from '../../assets/backgroundImg.png';
import { signIn, signUp } from '../utils/firebase';

const SignInScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPass, setCheckPass] = useState('')
  const [mode, setMode] = useState('Sign In')
  let displayCheckPass = null;

  const handleMode = () => {
    return (
      setMode(mode === 'Sign In' ? 'Sign Up' : "Sign In")
    )
  }

  if (mode === 'Sign Up') {
    displayCheckPass = (
      <View>
        <TextInput
              placeholder='confirm password'
              value={checkPass}
              onChangeText={setCheckPass}
              secureTextEntry={true} 
              style={styles.textInput}
          />
      </View>
    );   
  }

  async function Submit() {
    if(mode === 'Sign Up'){
      if (password !== checkPass) {
        alert("😢, invalid password")
      }else{
        await signUp(
          email, password
        )
      }
    }else{
      await signIn(
        email, password
      )
    }
  }

  return (
    <ImageBackground style={styles.backgroundImg} source={backgroundImg} blurRadius={3}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>
          {mode === 'Sign In' ? 'Login into your account' : 'Create a new account'}
        </Text>
        <View style={{marginTop: 20}}>
        <TextInput
            placeholder='Enter Email'
            value={email}
            onChangeText={setEmail} 
            style={styles.textInput}
        />
        <TextInput
            placeholder='Enter Password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true} 
            style={styles.textInput}
        />
        {displayCheckPass}
        <View style={{marginTop: 20}}>
          <TouchableOpacity>
            <Button 
              title='Submit' 
              color='black'
              onPress={Submit}
              disabled={!email || !password}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{ marginTop: 15 }}
            onPress={handleMode}
          >
            <Text>
              {mode === "Sign In"
                ? "Don't have an account? Sign Up"
                : "Already have an account? Sign in"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  primary: {
    color: 'black'
  },
  welcomeText: {
    color: '#3C3C3C',
    fontSize: 24,
    marginBottom: 20
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    width: 250,
    fontSize: 20,
    marginBottom: 20,
  },
  backgroundImg: {
    minWidth: '50%',
    flex: 1,
  }
})


export default SignInScreen