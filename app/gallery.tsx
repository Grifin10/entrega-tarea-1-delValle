import {StyleSheet, FlatList, View } from "react-native";

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