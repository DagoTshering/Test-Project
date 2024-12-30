import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const data = [
    {id: 1, name: 'Dago' , email: 'dago111@gmail.com'},
    {id: 2, name: 'Sonam' , email: 'sonam222@gmail.com'},
    {id: 3, name: 'Yangki' , email: 'yangki333@gmail.com'},
    {id: 4, name: 'Penjor' , email: 'penjor444@gmail.com'},
    {id: 5, name: 'Tshering' , email: 'tshering555@gmail.com'},
    {id: 6, name: 'Dema' , email: 'dema666@gmail.com'},
    {id: 7, name: 'Dorji' , email: 'dorji777@gmail.com'},
    {id: 8, name: 'Pema' , email: 'pema888@gmail.com'},
    {id: 9, name: 'Gyem' , email: 'gyem999@gmail.com'},
    {id: 10, name: 'Zam' , email: 'zam10@gmail.com'},
]

const SearchBar = () => {
    const [searchQuery,setSearchQuery] = useState('');
    const filteredData = data.filter(contact => contact.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const renderItem = ({item}) => (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>{item.name}</Text>
        </View>
    );
  return (
    <View style={styles.container}>
      <TextInput 
      placeholder='Search' 
      value={searchQuery}
      onChangeText={setSearchQuery}
      style={styles.searchInput}
      placeholderTextColor={'#888'}
      />
      <FlatList
      data={filteredData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
      />
    </View>
  )
}

const styles =StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        flex: 1,
        padding: 20,
    },
    searchInput: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#ccc',
        marginVertical: 15,
    },
    list: {
        paddingVertical: 15,
    },
    listItem: {
        backgroundColor: 'green',
        padding: 20,
        marginBottom: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        flexDirection: 'row',

    },
    itemText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
    },
});

export default SearchBar