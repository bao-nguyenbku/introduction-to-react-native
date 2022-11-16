import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { getAllCourses } from '../api/blogs';
import PickedListMonHoc from '../components/pickedListMonHoc';

const Home = () => {

  useEffect(() =>{
    getAllCourses().then(result => console.log(result));
  }, []);

  return (
    <View style={styles.container}> 
      <PickedListMonHoc />
    </View>
  );
}

export default Home

const styles = StyleSheet.create({
  
})