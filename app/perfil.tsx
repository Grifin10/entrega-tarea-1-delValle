import { Text, View, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import DialogInput from "react-native-dialog-input";;

export default function Index() {
    const [nombre, setNombre] = useState({nombre: "Facundo del Valle"});
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <View style={styles.screenFlex}>
            <Text style={[{fontSize: 22}]}>{nombre.nombre}</Text>
            <View style={styles.buttonFlex}>
                <Pressable onPress={(() => setVisible(true))}>
                    <View><Text style={styles.button}>Cambiar nombre</Text> </View>
                </Pressable>
                <DialogInput 
                    isDialogVisible={visible}
                    title={"Ingrese su nombre"}
                    message={"Por favor ingrese su nombre"}
                    hintInput ={"Escriba aqui..."}
                    submitInput={ (inputText) => {
                        setNombre({nombre: inputText});
                        setVisible(false);
                    }}
                    closeDialog={ () => {setVisible(false)}}
                    submitText={"Aceptar"}
                    cancelText={"Cancelar"}
                />
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
