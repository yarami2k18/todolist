myApp
import react from "react";
import {Text, View} from 'react-native';

const HelloWorldApp = () => {
    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text>Hello, World!</Text>
        </View>
    )
}
export default HelloWorldApp