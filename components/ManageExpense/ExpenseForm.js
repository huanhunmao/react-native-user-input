import React,{ useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Input from './Input';

function ExpenseForm({ ifIsEditing, cancelHandler }){
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

  function submitHandler(){
    
  }

  return (
    <View style={styles.form} onSubmit={submitHandler}>
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

    <View style={styles.buttons}>
        <Button title='Cancel' style={styles.button} mode="flat" onPress={cancelHandler}/>
        <Button title={ifIsEditing} style={styles.button} onPress={submitHandler}/>
      </View>
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
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        minWidth: 120,
        marginHorizontal: 8,
      },
})