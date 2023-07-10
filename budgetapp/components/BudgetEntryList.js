/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';

const BudgetEntryList = ()=>{
  const expenseData = useSelector((state)=>state.reducer);
  console.warn(expenseData);
return (
    <ScrollView style={style.scrollView}>
    <Text style={style.text}>Budget Entry Listing</Text>
    {expenseData.map((item, i) => (
        <View key={i}>
          <Text style={style.text2}>Number:{i + 1}</Text>
          <Text style={style.text2}>Name of Expense:{item.name} </Text>
        <Text style={style.text2}>Planned Expense :{item.plannedamount} </Text>
        <Text style={style.text2}>Actual Expense :{item.actualamount} </Text></View>
      ))}
    </ScrollView>
);
};
const style = StyleSheet.create({
  text:{
    fontSize:20,
    fontWeight:'bold',
    color:'blue',
    padding:25,
    },
    text2:{
      fontSize:18,
      fontWeight:'bold',
      color:'blue',
      padding:20,
      },
      scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
      },
  });

export default BudgetEntryList;
