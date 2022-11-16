import React, { useState, useRef } from 'react';
import { ScrollView, TouchableOpacity, View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

// TODO: add course to list from parent component.
const PickedListMonHoc = (props) => {
    const { courses, deleteCourse } = props;
    const [pickedList, setPickedList] = useState([...courses]);
    const animationRef = useRef([]);

    const onDeletePickedItem = (componentRef, id) => {
        componentRef.bounceOutRight().then(({ finished }) => {
            if (finished) {
                deleteCourse(id);
            }
        });
    };

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {courses.map((item, index) => {
                    return (
                        <Animatable.View animation='bounceIn' ref={(e) => (animationRef.current[index] = e)} key={item.id} style={styles.courseContainer}>
                            <Text style={styles.title}>{item.name}</Text>
                            <View style={styles.courseContainerAlignRight}>
                                <TouchableOpacity onPress={() => onDeletePickedItem(animationRef.current[index], item.id)} style={styles.trashIcon}>
                                    <Feather name='trash-2' size={24} color='#E11d48' />
                                </TouchableOpacity>
                            </View>
                        </Animatable.View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 12
    },
    courseContainer: {
        marginBottom: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        borderRadius: 12,
        width: '100%',
        padding: 20,
        flexDirection: 'row'
    },
    title: {
        fontSize: 20
    },
    trashIcon: {
        backgroundColor: '#FECDD3',
        padding: 8,
        borderRadius: 9999
    },
    courseContainerAlignRight: {
        alignContent: 'flex-end'
    }
});

export default PickedListMonHoc;
