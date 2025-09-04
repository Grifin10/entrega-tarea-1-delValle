import { Text, View, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

export default function Index() {
const [counter, setCounter] = useState({value: 0});

const increment = (prev) => {
    setCounter({value: prev.value + 1});
};

const decrease = (prev) => {
    setCounter({value: prev.value - 1});
};

return (
    <View style={styles.screenFlex}>

    <View style={styles.buttonFlex}>
    <Pressable onPress={() => increment(counter)}>
        <View><Text style={styles.button}>Increment counter</Text> </View>
    </Pressable>

    <Pressable onPress={() => decrease(counter)}>
        <View><Text style={styles.button}>Decrease counter</Text> </View>
    </Pressable>
    </View>

    <Text>Counter value: {counter.value}</Text>

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
    color: "#2478ffff",
    fontSize: 18,
    fontFamily: "SF Pro Text",
    padding: 10,
},
});
