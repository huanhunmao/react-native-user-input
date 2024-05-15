import { View, Text, TextInput } from 'react-native'

function Input({ label, keyboardType,maxLength,onChangeText,placeholder }){
    return <View>
        <Text>{label}</Text>
        <TextInput 
        keyboardType={keyboardType}
        maxLength={maxLength}
        onChangeText={onChangeText}
        placeholder={placeholder}
         />
    </View>
}

export default Input