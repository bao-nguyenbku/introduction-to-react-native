import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Animated } from 'react-native'
import React, { useEffect } from 'react'
import { getAllCourses } from '../api/blogs';
import PickedListMonHoc from '../components/pickedListMonHoc';

const Home = () => {

  useEffect(() =>{
    getAllCourses().then(result => console.log(result));
  }, []);

  return (
    <SafeAreaView style={styles.container}> 
      <PickedListMonHoc />
    </SafeAreaView>
  );
}

export default Home

const styles = StyleSheet.create({
    container: {
      paddingTop: 12,
    }
})