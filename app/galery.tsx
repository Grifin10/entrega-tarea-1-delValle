import {StyleSheet, FlatList, View, TextInput } from "react-native";
import React, { useState } from "react";
import Product from "@/components/Product";
import { products } from "../components/products";

export default function Gallery(){
  const [search, setSearch] = useState<string>('')
  const [filteredData, setFilteredData] = useState(products)

  const handleSearch = (text) =>{
    setSearch(text);
    const newData = products.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
    setFilteredData(newData);
  }

  return (
      <View style = {styles.container}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search items..."
          value={search}
          onChangeText={handleSearch}
        />
        <FlatList
          data = {filteredData}
          renderItem = {({item}) => (<Product{...item}/>)}
          keyExtractor = {item => item.id}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },

  searchBar: {
    height: 40,
    borderColor: '#e3e3e3ff',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
});
