import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import blogs from '../api/blogs';
import BlogItem from '../components/BlogItem';
const Blogs = () => {
  return (
    <ScrollView>
      {blogs && blogs.map(blog => {
        return (
          <BlogItem 
            key={blog.id}
            blog={blog}
          />
        )
      })}
    </ScrollView>
  )
}

export default Blogs

const styles = StyleSheet.create({})