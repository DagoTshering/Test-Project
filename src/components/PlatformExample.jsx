import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native'
import React from 'react'
/**
 * The Platform component allow developers to write code for platform specific.
 * We can different style and text for different platforms.
 * If you are writing different code for multiple platforms, best practice is to use Platform.select() method.
 * We use Platform.OS for quick checking of devices.
 */

const PlatformExample = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'default'} translucent={true} backgroundColor={'rgba(0,0,0,0.2)'} hidden={false}/>
      <Text style={styles.text}>
        {
            Platform.OS === 'ios' ? 'Welcome ios user!' : 'Welcome android user!'
        }
      </Text>
      <Text style={styles.text}>
        {
            Platform.select({
                android: 'You are using android device!',
                ios: 'You are using ios device!',
                macos: 'You are using macos device!',
                windows: 'You are using windows device!',
            })
        }
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Platform.select({
            ios: 'lightgreen',
            android: 'green',
            macos: 'red',
            windows: 'blue',
        }),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: '700',
        color: Platform.OS === 'ios' ? '#000' : '#fff',
        marginBottom: 15,
    },
});

export default PlatformExample