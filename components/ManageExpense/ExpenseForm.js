import React from 'react';
import { View } from 'react-native';
import Input from './Input';

function ExpenseForm() {
  function amountChangeHandler() {
  }

  return (
    <View>
      <Input label="Amount" keyboardType="decimal-pad" onChangeText={amountChangeHandler} />
      <Input
        label="Date"
        placeholder="YYYY-MM-DD"
        maxLength={10}
        onChangeText={amountChangeHandler}
      />
      <Input label="Description" onChangeText={amountChangeHandler} />
    </View>
  );
}

export default ExpenseForm;