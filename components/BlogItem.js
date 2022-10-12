import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
const BlogItem = (props) => {
  const { blog } = props;
  const { title, image, author, estimatedTime } = blog;
  return (
    <View style={styles.container}>
      <Image source={{
        uri: image
      }}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>

      <View style={styles.infoContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={{
            uri: author.avatar
          }}
            style={styles.authorAvatar}
          />
          <Text style={styles.authorName}>{`${author.name} - ${estimatedTime}`}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name="heart-outline" size={20} style={styles.icons}/>
          <Ionicons name="share-outline" size={20} style={styles.icons}/>
          <Ionicons name="ellipsis-vertical-outline" size={20}style={styles.icons} />
        </View>
      </View>
    </View>
  )
}

export default BlogItem

const styles = StyleSheet.create({
  container: {
    padding: 12
  },
  image: {
    width: '100%',
    height: 230,
    borderRadius: 16
  },
  icons: {
    color: '#7F8587',
    marginLeft: 12
  },
  title: {
    fontSize: 22,
    color: '#021058',
    marginTop: 12,
    marginBottom: 12
  },
  authorName: {
    color: '#7F8587',
    marginLeft: 10
  },  
  authorAvatar: {
    width: 28,
    height: 28,
    borderRadius: 8
  }, 
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})