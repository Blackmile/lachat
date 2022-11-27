import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'

const SignoutBtn = () => {
    const SignOut = async () => {
        try {
          await signOut(auth)
        } catch (error) {
          console.log(error)
        }
      }
      return (
        <View style={styles.BtnSmall}>
        <TouchableOpacity style={styles.btn} onPress={SignOut}>
          <Text style={{color: 'white'}}>Sign Out</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  BtnSmall: {
    margin: 120,
    padding: 50,
  },
  btn: {
    borderRadius: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 10,
  },
})

export default SignoutBtn