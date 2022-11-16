import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../store/reducer/blog';
import { getAllCourses } from '../api/blogs';
const Home = () => {
  const { count } = useSelector(state => state.blog);
  const dispatch = useDispatch();
  getAllCourses().then(result => console.log(result));
  return (
    <Text>Hello world</Text>
  )
}

export default Home

const styles = StyleSheet.create({
  
})