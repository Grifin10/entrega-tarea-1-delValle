import { StyleSheet, FlatList, View, TextInput, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import Product from "@/components/Product";
import { getProducts, ProductDTO } from "@/services/api";
import AddProductButton from "@/components/AddProductButton";
import { reload } from "expo-router/build/global-state/routing";

export default function Gallery(){
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState<string>('')
  const [filteredData, setFilteredData] = useState(products)
  const [reloadTrigger, setReloadTrigger] = useState(false)

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
        setFilteredData(data);
      } catch (err: any) {
        console.log(err);
      }
      finally{
        setLoading(false)
      }
    }
    loadProducts();
  }, [reloadTrigger]);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;

  const handleSearch = (text) =>{
    setSearch(text);
    const newData = products.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredData(newData);
  }

  return (
      <View style = {styles.container}>
        <View style = {{flexDirection: "row"}}>
          <View style = {{flex: 1, marginRight: 10}}>
            <TextInput
              style={styles.searchBar}
              placeholder="Search items..."
              value={search}
              onChangeText={handleSearch}
            />
          </View>
          <View style = {{marginTop: 10}}>
            <AddProductButton onProductAdded={(() => setReloadTrigger(prev => !prev))} />
          </View>
        </View>

        <FlatList
          data = {filteredData}
          renderItem = {({item}) => (<Product{...item}/>)}
          keyExtractor = {item => item.id.toString()}
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
    marginBottom: 16,
  },
});
