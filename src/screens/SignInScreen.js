import { View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import backgroundImg from '../../assets/backgroundImg.png';
import { signUp } from '../utils/firebase';

const SignInScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPass, setCheckPass] = useState('')

  async function Submit() {
    if (password !== checkPass) {
      alert("invalid password")
    }else{
      await signUp(
        email, password
      )
    }
  }

  return (
    <ImageBackground style={styles.backgroundImg} source={backgroundImg} blurRadius={3}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>
          Sign In
        </Text>
        <View style={{marginTop: 20}}>
        <TextInput
            placeholder='email'
            value={email}
            onChangeText={setEmail} 
            style={styles.textInput}
        />
        <TextInput
            placeholder='password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true} 
            style={styles.textInput}
        />
        <TextInput
            placeholder='password'
            value={checkPass}
            onChangeText={setCheckPass}
            secureTextEntry={true} 
            style={styles.textInput}
        />
        <View style={{marginTop: 20}}>
          <TouchableOpacity>
            <Button 
              title='Sign Up' 
              color='black'
              onPress={Submit}
              disabled={!email || !password}
              />
            </TouchableOpacity>
          </View>
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
    fontSize: 22,
  },
  backgroundImg: {
    minWidth: '50%',
    flex: 1,
  }
})


export default SignInScreen