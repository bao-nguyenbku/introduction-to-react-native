import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View, StyleSheet, Text, SafeAreaView, Button, FlatList } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

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

const PickedListMonHoc = (props) => {
    const [pickedList, setPickedList] = useState([...course]);
    let row = [];
    let prevOpenedRow;

    const deleteItem = ({ item, index }) => {
        console.log(item, index);
        let a = listData;
        a.splice(index, 1);
        console.log(a);
        setPickedList([...a]);
    };

    const renderItem = ({ item, index }, onClick) => {
        //
        const closeRow = (index) => {
            console.log('closerow');
            if (prevOpenedRow && prevOpenedRow !== row[index]) {
                prevOpenedRow.close();
            }
            prevOpenedRow = row[index];
        };

        const renderRightActions = (progress, dragX, onClick) => {
            return (
                <View
                    style={{
                        margin: 0,
                        alignContent: 'center',
                        justifyContent: 'center',
                        width: 70
                    }}
                >
                    <Button color='red' onPress={onClick} title='DELETE'></Button>
                </View>
            );
        };

        return (
            <Swipeable renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, onClick)} onSwipeableOpen={() => closeRow(index)} ref={(ref) => (row[index] = ref)} rightOpenValue={-100}>
                <View
                    style={{
                        margin: 4,
                        borderColor: 'grey',
                        borderWidth: 1,
                        padding: 9,
                        backgroundColor: 'white'
                    }}
                >
                    <Text>{item.name}</Text>
                </View>
            </Swipeable>
        );
    };

    return (
        <SafeAreaView>
            <FlatList
                data={pickedList}
                renderItem={(v) =>
                    renderItem(v, () => {
                        console.log('Pressed', v);
                        deleteItem(v);
                    })
                }
                keyExtractor={(item) => item.id}
            ></FlatList>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white'
    }
});

export default PickedListMonHoc;
