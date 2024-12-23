import { View, Text, Button } from 'react-native'
import React from 'react'
/*
We cannot call the function using parenthesis in Onpress, if you donnot any parameter to pass
If you call the function usinng parenthesis without any parameters, the button will be automatically press and you donnot have to press on the button
Now if you want to pass a parameter, you can use the arrow function
*/
const Onpress = () => {
  const name = () => {
    console.log("Name: Dago tshering");
  }
  const age = (x) => {
    console.log('Age: ',x);
  }
  return (
    <View>
        <Button title='Press' onPress={name}/>
        <Button title='Press' onPress={() => age('21')}/>
    </View>
  )
}

export default Onpress