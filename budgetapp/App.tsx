/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import BudgetEntry from './components/BudgetEntry';
import BudgetEntryList from './components/BudgetEntryList';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <View>
      <Text style= {style.text}>Shreya Home Budget App</Text>
    </View>
      <Stack.Navigator initialRouteName="Budget Entry Screen">
        <Stack.Screen name="Budget List Screen"  component={BudgetEntryList}/>
        <Stack.Screen name="Budget Entry Screen"  component={BudgetEntry}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
const style = StyleSheet.create({
  text:{
    fontSize:32,
      fontWeight:'bold',
      color:'green',
      padding:10,

    },
  });

export default App;
