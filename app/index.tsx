import { Text, StyleSheet, FlatList, Pressable, View } from "react-native";
import React, {useState} from "react";

// Define la estructura del objeto tarjeta
type ItemData = {
  id: string;
  title: string;
};

// Define lo que una tarjeta espera recibir como props. Esto asegura que sea reutilizable y robusto
type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

// Representacion visual de la tarjeta en si
// Recibe el item para saber que tarjeta representar, la funcion para cambiar de colores y los colores en si
const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <Pressable onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </Pressable>
)

// Conjunto de tarjetas a representar
const cards = [
  {id: "1", title: "Tarjeta Uno"},
  {id: "2", title: "Tarjeta Dos"},
  {id: "3", title: "Tarjeta Tres"},
  {id: "4", title: "Tarjeta Cuatro" },
];

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}: {item: ItemData}) => {
    // Si el id de la tarjeta coincide con selectedId ==> color bordo y texto blanco, sino color rojo y texto negro
    const backgroundColor = item.id === selectedId ? '#620000ff' : '#f66060ff';
    const textColor = item.id === selectedId ? 'white' : 'black';

    // Retorna una tarjeta con los colores correspondientes
    return (
      <Item
        item = {item}
        onPress = {() => setSelectedId(item.id)}
        backgroundColor = {backgroundColor}
        textColor = {textColor}
      />
    )
  }

  // Se retorna una FlatList que para cada tarjeta en cards llama a renderItem y ahi se crea un Item con los parametros correspondientes
  return (
      <View style = {styles.container}>
        <FlatList
          data = {cards}
          renderItem = {renderItem}
          keyExtractor = {item => item.id}
          extraData = {selectedId}
        />
      </View>
  )
}

// Estilos para los diferentes elementos
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  title: {
    fontSize: 32,
    textAlign: 'center'
  },
});

export default App;