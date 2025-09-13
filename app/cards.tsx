import {StyleSheet, FlatList, View } from "react-native";
import Tarjeta from "@/components/Tarjeta";

// Conjunto de tarjetas a representar
const cards = [
  {id: "1", title: "FORZA"},
  {id: "2", title: "FERRARI"},
  {id: "3", title: "LEC16"},
  {id: "4", title: "HAM44" },
];

export default function Index(){
  // Se retorna una FlatList que para cada tarjeta en cards llama a renderItem y ahi se crea un Item con los parametros correspondientes
  return (
      <View style = {styles.container}>
        <FlatList
          data = {cards}
          renderItem = {({item}) => (<Tarjeta{...item}/>)}
          keyExtractor = {item => item.id}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center", 
          }}
        />
      </View>
  )
}

// Estilos para los diferentes elementos
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
