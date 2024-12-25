import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
/**
 * We can creat Grid component without using any list component
 * We can creat beautiful grid using map() fuction and ScrollView component.
 * map () is used for array iterations
 * map () takes a callback function
 * the callback function takes parameter i.e item and index(if there is no unique key)
 * Without padding the flexDirection: 'row' does not dsplay item properly
 */
const data = [
    {id: 1, title: 'item 1'},
    {id: 2, title: 'item 2'},
    {id: 3, title: 'item 3'},
    {id: 4, title: 'item 4'},
    {id: 5, title: 'item 5'},
    {id: 6, title: 'item 6'},
    {id: 7, title: 'item 7'},
    {id: 8, title: 'item 8'},
    {id: 9, title: 'item 9'},
    {id: 10, title: 'item 10'},
    {id: 11, title: 'item 11'},
    {id: 12, title: 'item 12'},
    {id: 13, title: 'item 13'},
    {id: 14, title: 'item 14'},
    {id: 15, title: 'item 15'},
    {id: 16, title: 'item 16'},
    {id: 17, title: 'item 17'},
    {id: 18, title: 'item 18'},
    {id: 19, title: 'item 19'},
    {id: 20, title: 'item 20'},
]
const Grid = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Grid</Text>
      <ScrollView contentContainerStyle= {styles.container}>
        {
          data.map((item) => (
              <View key={item.id} style={styles.gridItem}>
                  <Text style= {styles.itemTitle}>{item.title}</Text>
              </View>
          ))
        }
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  heading:{
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    marginVertical: 15,
    color:'#000'
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#f0fef3',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    flexWrap: 'wrap'
  },
  gridItem: {
    backgroundColor: '#ff6f61',
    padding: 20,
    marginBottom: 10,
    width: '48%',
    height: 100,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    textTransform: 'uppercase',
  },

})


export default Grid