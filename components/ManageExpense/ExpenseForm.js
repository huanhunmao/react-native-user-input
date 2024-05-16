import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from './Input';

function ExpenseForm() {
  function amountChangeHandler() {
  }

  return (
    <View style={styles.form}>
    <Text style={styles.title}>Your Expense</Text>
    <View style={styles.inputsRow}>
      <Input 
      label="Amount" 
      keyboardType="decimal-pad" 
      onChangeText={amountChangeHandler} 
      style={styles.rowInput} 
      />
      <Input
        style={styles.rowInput}
        label="Date"
        placeholder="YYYY-MM-DD"
        maxLength={10}
        onChangeText={amountChangeHandler}
      />
        </View>
      <Input 
      label="Description" 
      onChangeText={amountChangeHandler} 
      multiline={true}
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