import * as React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

function Index(props) {
    const { courses, addCourse } = props;
    const width = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={false}
                data={courses}
                scrollAnimationDuration={1000}
                mode='parallax'
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50
                }}
                // onSnapToItem={(index) => console.log('current index:', index)}
                panGestureHandlerProps={{
                  activeOffsetX: [-10, 10],
                }}
                renderItem={({ index, item }) => (
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            backgroundColor: '#0284C7',
                            borderRadius: 12,
                            justifyContent: 'center',
                        }}
                        onPress={() => addCourse(item)}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 30, color: '#fff' }}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default Index;
