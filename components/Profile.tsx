import { Text, View, Pressable, StyleSheet, Modal, TextInput } from "react-native";
import { useState } from "react";

export default function Index() {
    const [name, setName] = useState<string>("Facundo del Valle");
    const [tempName, setTempName] = useState<string>(name);
    const [visible, setVisible] = useState<boolean>(false);
    
    const changeName = () => {
        setName(tempName)
        setVisible(false)
    }

    return (<>
        <Modal 
            animationType="slide"
            visible={visible}
            transparent={true}
            onRequestClose={() => {setVisible(false)}}>
            <View style = {styles.modalOverlay}>
                <View style = {styles.modalContainer}>  
                    <TextInput 
                        style = {styles.input}
                        onChangeText={setTempName} 
                        value={tempName}                     
                    />
                    <Pressable style = {styles.button} onPress={changeName}>
                        <Text>
                            Accept
                        </Text>
                    </Pressable>
                </View>
            </View>
        </Modal>

        <View style={styles.screenFlex}>
            <Text style={[{fontSize: 22}]}>{name}</Text>
            <View style={styles.buttonFlex}>
                <Pressable onPress={(() => setVisible(true))}>
                    <View><Text style={styles.button}>Change name</Text> </View>
                </Pressable>
            </View>
        </View>
    </>
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

    modalOverlay: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.20)",
    },

    modalContainer: {
        width: "80%",
        padding: 20,
        backgroundColor: "white",
        borderRadius: 16,
        alignItems: "center",
    },

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        width: "100%",
        padding: 10,
    },
});
