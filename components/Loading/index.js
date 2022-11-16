import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import LoadingAnimate from './98432-loading.json';

const Loading = () => {
  return (
    <Lottie source={LoadingAnimate} autoPlay loop />
  )
}

export default Loading

const styles = StyleSheet.create({})