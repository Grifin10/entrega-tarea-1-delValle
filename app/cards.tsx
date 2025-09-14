import {StyleSheet, FlatList, View } from "react-native";
import Card from "@/components/Card";

const cards = [
  {id: "1", title: "FORZA"},
  {id: "2", title: "FERRARI"},
  {id: "3", title: "LEC16"},
  {id: "4", title: "HAM44" },
];

export default function Index(){
  return (
      <View style = {styles.container}>
        <FlatList
          data = {cards}
          renderItem = {({item}) => (<Card{...item}/>)}
          keyExtractor = {item => item.id}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center", 
          }}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
