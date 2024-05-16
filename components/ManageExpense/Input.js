import { View, Text, TextInput,StyleSheet } from 'react-native'
import {GlobalStyles} from '../../constants/styles'

function Input({ label, keyboardType,maxLength,onChangeText,placeholder,multiline, style }){
    const inputStyles = [styles.input]

    if(multiline){
        inputStyles.push(styles.inputMultiline)
    }

    return <View style={[styles.inputContainer, style]}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={inputStyles}
        keyboardType={keyboardType}
        maxLength={maxLength}
        onChangeText={onChangeText}
        placeholder={placeholder}
         />
    </View>
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 16,
        // flex:1
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
})