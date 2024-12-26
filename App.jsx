import { View, Text, Button, FlatList,} from 'react-native' // we want to import multiple components from a module, we have to use {} bracket
import React from 'react'
// import LoginForm from './src/components/LoginForm'
// import ContactListScreen from './src/srceens/contact/ContactListScreen'
// import ClassComponent from './src/components/ClassComponent'
// import UseEffectMount from './src/components/UseEffectMountingPhase'
// import UseEffectUpdatingPhase from './src/components/UseEffectUpdatingPhase'
// import UseEffectUnmountingPhase from './src/components/UseEffectUnmountingPhase'
import StyleWithButton from './src/components/StyleWithButton'
// import FlatListScreen from './src/components/FlatListScreen'
// import SectionListScreen from './src/components/SectionListScreen'
// import Grid from './src/components/Grid'
// import InputText from './src/components/InputText'
// import Styling from './src/components/Styling'
// import First from './src/components/First'
// import JSX from './src/components/JSX'
// import Onpress from './src/components/Onpress'
// import Props from './src/components/Props'
// import UseStateHook from './src/components/UseStateHook'

const App = () => {
  return (
    <View /*style={{flex: 1}}*/>
      {/* <JSX/>
      <First/>
      <Text style={{fontSize: 30}}>This is my first React App</Text>
      <Button title='Press Me'/> */}
      {/* <Onpress/> */}
      {/* <UseStateHook/> */}
      {/* <Props/> */}
      
      {/* <InputText/> */}
      {/* <Styling/> */}
      {/* <FlatListScreen/> */}
      {/* <SectionListScreen/> */}
      {/* <Grid/> */}
      {/* <LoginForm/> */}
      {/* <ContactListScreen/> */}
      {/* <ClassComponent/> */}
      {/* <UseEffectMount/> */}
      {/* <UseEffectUpdatingPhase/> */}
      {/* <UseEffectUnmountingPhase/> */}
      <StyleWithButton/>
    </View>
  )
}

export default App