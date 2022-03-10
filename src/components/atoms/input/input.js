import React from "react";
import { View, Text, TextInput } from 'react-native';
import { styles } from '.styles';

const Input = ({ value, placeholder,handleOnChangeText}) => {
    return (
        <View style={styles.container}>
            <TextInput
          placeholder={placeholder}
          autoCorrect={false}
          autoFocus={true}
          placeholderTextColor="#d6d6ff"
          style={styles.TextInput}
          value={value}
          onChangeText={handleOnChangeText}
          />
        </View>
    )
}

export default Input;