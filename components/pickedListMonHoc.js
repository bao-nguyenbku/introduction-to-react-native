import { useState } from "react";
import { ScrollView } from "react-native";

const pickedListMonHoc = (props) => {
    const [pickedList, setPickedList] = useState([]);

    return (<ScrollView>

        {pickedList.map((item, index) => {
            return (<View key={index}>
                <Text>{item.id}</Text>
            </View>)
        })
        
    </ScrollView>)
    
}