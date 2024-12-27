import { View, Text,StatusBar, StyleSheet } from 'react-native'
import React from 'react'

const StatusBarExample = () => {
  return (
    <View style={styles.container}> 
      <StatusBar 
      barStyle={'default'} 
      backgroundColor={'rgba(0,0,0,0.2)'}
      //backgroundColor={'lightgreen'}
      hidden={false}
      translucent={true}
      />
      <Text style={styles.text}>StatusBar</Text>
    </View>
  )
}
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'lightgreen',
  justifyContent: 'center',
  alignItems: 'center',
},
text: {
  fontSize: 16,
  fontWeight: '700',
  padding: 10,
  color: '#fff',
  backgroundColor: 'red',
  borderRadius: 12,
}
});

export default StatusBarExample