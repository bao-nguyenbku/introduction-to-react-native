import React, { useState, useRef } from 'react';
import { ScrollView, TouchableOpacity, View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
const course = [
    {
        id: '238sdhfksdfs',
        name: 'App Mobile Dev'
    },
    {
        id: 'dsjgdufger454',
        name: 'DSA'
    },
    {
        id: '49584dfgkdfhg0803242',
        name: 'PPL'
    },
    {
        id: 'fdjgd456402482sd',
        name: 'System Architecture'
    },
    {
        id: '58dfjd42204282aada',
        name: 'Software Engineering'
    },
    {
        id: '456840djgd08-23234256',
        name: 'Nhập môn Lập trình'
    }
];

// TODO: add course to list from parent component.
const PickedListMonHoc = (props) => {
    const [pickedList, setPickedList] = useState([...course]);
    const animationRef = useRef([]);

    const onDeletePickedItem = (componentRef, id) => {
        componentRef.bounceOutRight().then(({ finished }) => {
            if (finished) {
                setPickedList(pickedList.filter((item) => item.id !== id));
            }
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {pickedList.map((item, index) => {
                    return (
                        <Animatable.View animation='bounceIn' ref={(e) => (animationRef.current[index] = e)} key={item.id} style={[styles.courseContainer]}>
                            <Text>{item.name}</Text>
                            <View style={styles.courseContainerAlignRight}>
                                <TouchableOpacity onPress={() => onDeletePickedItem(animationRef.current[index], item.id)}>
                                    <Feather name='trash-2' size={24} color='black' />
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
        padding: 12,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        flexDirection: 'row'
    },
    courseContainerAlignRight: {
        alignContent: 'flex-end'
    }
});

export default PickedListMonHoc;
