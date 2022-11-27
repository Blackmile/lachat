import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome, Entypo,Ionicons } from '@expo/vector-icons';
import styles from './Styles'

const Posts = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="user-circle" size={24} color="gray" />
      <View style={styles.posts}>
        <Text>this is a post</Text>
        <Entypo name="heart-outlined" size={24} color="black" />
        <FontAwesome name="comment-o" size={24} color="black" />
        <Ionicons name="share-social-outline" size={24} color="black" />
      </View>
    </View>
  )
}

export default Posts