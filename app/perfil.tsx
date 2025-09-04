import { Text, View, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

export default function Index() {
    const [nombre, setNombre] = useState({nombre: "Facundo del Valle"});

    const cambiarNombre = () => {
        setNombre({nombre: "pepe"})
    }

    return (
        <View style={styles.screenFlex}>
            <Text style={[{fontSize: 22}]}>{nombre.nombre}</Text>
            <View style={styles.buttonFlex}>
                <Pressable onPress={cambiarNombre}>
                    <View><Text style={styles.button}>Cambiar nombre</Text> </View>
                </Pressable>
            </View>
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
    borderRadius: 26
},
});
