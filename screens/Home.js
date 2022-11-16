import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Animated } from 'react-native'
import PickedListMonHoc from '../components/pickedListMonHoc';
import Slider from '../components/Slider';
import { getAllCourses } from '../api/courses';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [currentCourses, setCurrentCourses] = useState([]);
  useEffect(() => {
    getAllCourses().then(result => setCourses(result));
  }, [])
  const addCourse = (item) => {
    const oldCourses = [...currentCourses].map(i => ({ ...i }));
    oldCourses.push(item);
    console.log(oldCourses);
    setCurrentCourses(oldCourses);
  }
  return (
    <SafeAreaView style={styles.container}>
      {courses.length > 0 ? (
        <Slider
        courses={courses}
        addCourse={addCourse}
      />
      ) : (<Text>Loading...</Text>)}
      {currentCourses.length > 0 && (
        <PickedListMonHoc
          courses={currentCourses}
        />
      )}
   

    </SafeAreaView>
  );
}

export default Home

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    flex: 1
  }
})