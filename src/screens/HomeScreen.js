import { FlatList, Text, View } from 'react-native'
import React from 'react'
import SignoutBtn from '../components/SignoutBtn'
import Posts from '../components/Posts'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {

  const array = [1,2,3,4,5,6,7]

  const renderPost = ({ post, index }) => {
    return (
      <Posts />
    )
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <FlatList
        data={array}
        renderItem={renderPost}
        keyExtractor={post => post}
        decelerationRate={'normal'}
      />
      {/* drawer navigation */}
    </SafeAreaView>
  )
}

export default HomeScreen