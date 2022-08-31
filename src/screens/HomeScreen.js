import { View, Text, Button } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'


const HomeScreen = () => {
  const SignOut = async () => {
      try {
        await signOut(auth)
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <View>
      <Text>HomeScreen</Text>
      <View style={{marginTop: 20}}>
            <TouchableOpacity>
              <Button
                title='Sign out' 
                color='black'
                onPress={SignOut}
              />
            </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen