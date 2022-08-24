import { View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import backgroundImg from '../../assets/backgroundImg.png';

const SignInScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <ImageBackground style={styles.backgroundImg} source={backgroundImg}>
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
              textContentType='emailAddress'
          />
          <TextInput
              placeholder='password'
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true} 
              style={styles.textInput}
          />
          <View style={{marginTop: 20}}>
            <TouchableOpacity>
              <Button
                title='Sign Up' 
                color='black'
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
    width: 300
  },
  backgroundImg: {
    minWidth: '50%',
    flex: 1,
  }
})

export default SignInScreen