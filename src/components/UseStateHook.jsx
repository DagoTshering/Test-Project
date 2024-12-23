import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
/*
Variable does not recheck component and rerender the updated value in the UI, However,
UseState is same like variable but it  recheck component and rerender the updated value in the UI.
UseState uses the concept of array destructuring.
Eg:
Structured array
arr = [1,2,3];
item1 = arr[0];
item2 = arr[1];
item3 = arr[2];
Destructured array
const [item1,item2,item3] = arr;
useState() this fuction returns a variable and a function to update the value of the variable.
Variable can be declared outsode the component but usestate should be declared inside the component.
*/

const UseStateHook = () => {
    let name = "Dago Tshering";
    console.log(name);
    const changeNameVariable = () => {
        name = 'Dago Drukpa';
    }
    const changeNameUseState = () => {
      setName('Tashi');
    }
    const [Name,setName] = useState('Dorji')
    console.log(Name);
  return (
    <View>
      <Text>Variable</Text> 
      <Text>{name}</Text>
      <Button title='Change Name' onPress={changeNameVariable}/>
      <Text>UseState</Text> 
      <Text>{Name}</Text>
      <Button title='Change Name' onPress={changeNameUseState}/>
    </View>
  )
}

export default UseStateHook