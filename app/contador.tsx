import { Text, View, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

export default function Index() {
const [counter, setCounter] = useState({value: 0});

const aumentar = (prev) => {
    setCounter({value: prev.value + 1});
};

const reducir = (prev) => {
    setCounter({value: prev.value - 1});
};

return (
    <View style={styles.screenFlex}>

    <View style={styles.buttonFlex}>
    <Pressable onPress={() => reducir(counter)}>
        <View><Text style={styles.button}>Reducir contador</Text> </View>
    </Pressable>

    <Pressable onPress={() => aumentar(counter)}>
        <View><Text style={styles.button}>Aumentar contador</Text> </View>
    </Pressable>
    </View>

    <Text style={[{fontSize:18}]}>Valor actual: {counter.value}</Text>

    </View>
);
}

const styles = StyleSheet.create({
    screenFlex: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", 
    },

    buttonFlex: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center", 
    },

    button: {
        color: "#000000ff",
        backgroundColor: "#ff0000ff",
        fontSize: 18,
        fontFamily: "SF Pro Text",
        padding: 10,
        marginTop: 20,
        marginBottom: 14,
        marginHorizontal: 10,
        borderRadius: 26
    },
});
