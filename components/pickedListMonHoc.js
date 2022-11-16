import { useState } from "react";
import { ScrollView, TouchableOpacity, View, StyleSheet, Text } from "react-native";

const course = [
    {
      id: '238sdhfksdfs',
      name: "App Mobile Dev"
    },
    {
      id: 'dsjgdufger454',
      name: "DSA"
    },
    {
      id: '49584dfgkdfhg0803242',
      name: "PPL"
    },
    {
      id: 'fdjgd456402482sd',
      name: "System Architecture"
    },
    {
      id: '58dfjd42204282aada',
      name: "Software Engineering"
    },
    {
      id: '456840djgd08-23234256',
      name: "Nhập môn Lập trình"
    },
  ]
  

const PickedListMonHoc = (props) => {
    const [pickedList, setPickedList] = useState([...course]);

    return (<ScrollView>

        {pickedList.map((item, index) => {
            return (<View key={index}>
                <Text>{item.id}</Text>
            </View>)
        })}

        <TouchableOpacity onPress={() => {}}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        
    </ScrollView>)
    
}

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