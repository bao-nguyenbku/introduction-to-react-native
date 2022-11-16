import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Animated } from 'react-native'
import PickedListMonHoc from '../components/pickedListMonHoc';
import Slider from '../components/Slider';
import { getAllCourses } from '../api/courses';
import Loading from '../components/Loading';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [currentCourses, setCurrentCourses] = useState([]);
  useEffect(() => {
    getAllCourses().then(result => setCourses(result));
  }, [])
  const addCourse = (item) => {
    const oldCourses = [...currentCourses].map(i => ({ ...i }));
    if (oldCourses.findIndex(_item => _item.id === item.id) === -1) {
      oldCourses.push(item);
      console.log(oldCourses);
      setCurrentCourses(oldCourses);
    }
  }
  const deleteCourse = (id) => {
    setCurrentCourses(currentCourses.filter(item => item.id !== id));
  }
  return (
    <SafeAreaView style={styles.container}>
      {courses.length > 0 ? (
        <Slider
        courses={courses}
        addCourse={addCourse}
      />
      ) : (<Loading />)}
      {currentCourses.length > 0 && (
        <PickedListMonHoc
          courses={currentCourses}
          deleteCourse={deleteCourse}
        />
      )}
   

    </SafeAreaView>
  );
}

export default Home

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12
  }
})