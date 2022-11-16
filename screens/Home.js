import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/reducer/blog';
const Home = () => {
  const { count } = useSelector(state => state.blog);
  const dispatch = useDispatch();
  return (
    <View>Hello World</View>
  )
}

export default Home

const styles = StyleSheet.create({
  
})