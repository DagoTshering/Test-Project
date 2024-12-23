import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
/**
 * The FlatList display data in scrollable list.
 * The data should be in the form of array or array of objects and array should have a unique item, otherwise it cannot display it.
 * The FlatList component take four Props i.e data, renderItem, keyExtractor and contentContainerStyle.
 * FlatList iterates through the data array.
 * For each element in the array, it passes an object to renderItem.
    This object contains:
    item: The current data item.
    index: The index of the current data item.
    separators: Metadata for styling separators between list items.
 * You only need to define the renderItem function.
 * FlatList handles the function call and passes the arguments (like item and index) for each element in the data array.
 * The argument is passed internally by FlatList when it calls your renderItem function.

 */
const data = [
    {id: 1, title:'Item 1'},
    {id: 2, title:'Item 2'},
    {id: 3, title:'Item 3'},
    {id: 4, title:'Item 4'},
    {id: 5, title:'Item 5'},
    {id: 6, title:'Item 6'},
    {id: 7, title:'Item 7'},
    {id: 8, title:'Item 8'},
    {id: 9, title:'Item 9'},
    {id: 10, title:'Item 10'},
];

const FlatListScreen = () => {
    // The renderItem telling FlatList how to render each item in list
    const renderItem = ({item}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    )
  return (
    <View style={styles.container}>
        <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle = {styles.list}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        paddingTop: 15,
    },
    list: {
        paddingHorizontal: 20,
       
    },
    item: {
        backgroundColor: 'crimson',
        borderWidth: 5,
        borderColor: 'yellow',
        marginVertical: 8,
        padding: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        color: '#fff'
    }
    
});
export default FlatListScreen