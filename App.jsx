import { View, Text, Button, FlatList } from 'react-native' // we want to import multiple components from a module, we have to use {} bracket
import React from 'react'
import FlatListScreen from './src/components/FlatListScreen'
// import InputText from './src/components/InputText'
// import Styling from './src/components/Styling'
// import First from './src/components/First'
// import JSX from './src/components/JSX'
// import Onpress from './src/components/Onpress'
// import Props from './src/components/Props'
// import UseStateHook from './src/components/UseStateHook'

const App = () => {
  return (
    <View>
      {/* <JSX/>
      <First/>
      <Text style={{fontSize: 30}}>This is my first React App</Text>
      <Button title='Press Me'/> */}
      {/* <Onpress/> */}
      {/* <UseStateHook/> */}
      {/* <Props/> */}
      
      {/* <InputText/> */}
      {/* <Styling/> */}
      <FlatListScreen/>

    </View>
  )
}

export default App