/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';
import { save } from '../redux/action';
import { useDispatch } from 'react-redux';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import BudgetEntryList from './BudgetEntryList';




 const BudgetEntry = ({navigation})=>{
    const [name,setName] = useState('');
    const [plannedamount,setPlannedAmount] = useState('');
    const [actualamount,setActualAmount] = useState('');


    function clear(){
        setName('');
        setActualAmount('');
        setPlannedAmount('');
    }
   const dispatch = useDispatch();

    function handleSaveData(){
      console.warn('saved',name,plannedamount,actualamount);
     dispatch(save(name,plannedamount,actualamount));
    }


  return (
        <View>
          <Text style={style.text}>Budget Entry</Text>
          <TextInput style={style.textbox} placeholder="Enter Name" onChangeText={(text)=>setName(text)}  value={name}/>
          <TextInput style={style.textbox} placeholder="Planned Amount"  onChangeText={(text)=>setPlannedAmount(text)} keyboardType="numeric" value={plannedamount}/>
          <TextInput style={style.textbox} placeholder="Actual Amount"   onChangeText={(text)=>setActualAmount(text)} keyboardType="numeric" value={actualamount}/>
          <Text/>
          <Button title="Save" color={'red'} onPress={()=>handleSaveData()} />
          <Text />
          <Button title="clear data" color={'red'} onPress={clear} />
          <Text />
          <Button title="show list" color={'red'} onPress={()=>navigation.navigate('Budget List Screen')} />
          </View>
      );

};
const style = StyleSheet.create({
    text:{
        fontSize:30,
        fontWeight:'bold',
        color:'blue',
        padding:25,
        backgroundColor: 'pink',

    },
    textbox:{
        color:'blue',
        borderColor:'blue',
        padding:10,
        borderWidth:2,
        fontSize:20,
    },
    res:{
        fontSize:15,
        fontWeight:'bold',
        color:'blue',
        },
});
export default BudgetEntry;
