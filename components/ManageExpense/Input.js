import { Input, Text, TextInput } from 'react-native'

function Input({ label, textInputConfig }){
    <View>
        <Text>{label}</Text>
        <TextInput>{...textInputConfig}</TextInput>
    </View>
}

export default Input