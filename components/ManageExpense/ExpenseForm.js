import React,{ useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from './Input';

function ExpenseForm() {
    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        description: ''
    })

  function inputChangeHandler(inputIdentifier, enterValue) {
    setInputValues(curInputValue => {
        return {
            ...curInputValue,
            [inputIdentifier]:enterValue,
        }
    })

    console.log('inputValues',inputValues)
    // {amount: '123', date: '666', description: '7777'}
  }

  return (
    <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputsRow}>
      <Input 
      label="Amount" 
      keyboardType="decimal-pad" 
      style={styles.rowInput} 
      value={inputValues.amount}
      onChangeText={inputChangeHandler.bind(this, 'amount')} 
      />
      <Input
        style={styles.rowInput}
        label="Date"
        placeholder="YYYY-MM-DD"
        maxLength={10}
        value={inputValues.amount}
        onChangeText={inputChangeHandler.bind(this, 'date')}
      />
        </View>
      <Input 
      label="Description" 
      multiline={true}
      value={inputValues.amount}
      onChangeText={inputChangeHandler.bind(this,'description')} 
      />
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
    form: {
        marginTop:40
    },
    title:{
        fontSize: 18,
        fontWeight:'bold',
        color:'white',
        marginVertical:24,
        textAlign: 'center'
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowInput: {
        flex:1
    }
})