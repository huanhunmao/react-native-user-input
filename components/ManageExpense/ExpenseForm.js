import React,{ useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import Input from './Input';

function ExpenseForm({ ifIsEditing, cancelHandler, onSubmit, defaultValues }){
    const [inputs, setInputs] = useState({
        amount: 
        {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true
        },
        date:{
            value: defaultValues ? defaultValues.date.toISOString().slice(0,10) : '',
            isValid:true
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid:true
        }
    })

  function inputChangeHandler(inputIdentifier, enterValue) {
    setInputs(curInputValue => {
        return {
            ...curInputValue,
            [inputIdentifier]:{
                value:enterValue,
                isValid: true
            },
        }
    })

  }

  function submitHandler(){
    const amountValue = parseFloat(inputs.amount.value);
    const expenseData = {
        amount: amountValue,
        date: new Date(inputs.date.value),
        description: inputs.description.value,
    }

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date'
    const descriptionIsValid = expenseData.description.trim().length > 0 

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
        // 处理无效的金额输入
        // Alert.alert('Invalid input', 'Please check your input values')
        setInputs(curInputs => {
            return {
                amount: {
                    value: curInputs.amount.value,
                    isValid: amountIsValid
                },
                 date: {
                    value: curInputs.date.value,
                    isValid: dateIsValid
                },
                description: {
                    value: curInputs.description.value,
                    isValid: descriptionIsValid
                },
            }
        })
        return;
    }

    onSubmit(expenseData);
}

const ifFormInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid 

  return (
    <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputsRow}>
      <Input 
      label="Amount" 
      keyboardType="decimal-pad" 
      style={styles.rowInput} 
      value={inputs.amount.value}
      onChangeText={inputChangeHandler.bind(this, 'amount')} 
      />
      <Input
        style={styles.rowInput}
        label="Date"
        placeholder="YYYY-MM-DD"
        maxLength={10}
        value={inputs.date.value}
        onChangeText={inputChangeHandler.bind(this, 'date')}
      />
        </View>
      <Input 
      label="Description" 
      multiline={true}
      value={inputs.description.value}
      onChangeText={inputChangeHandler.bind(this,'description')} 
      />

    {ifFormInvalid && <Text style={styles.invalidText}>Please your inputs</Text>}
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
      invalidText: {
        color: 'red',
        textAlign: 'center',
        margin: 8,
      },
})