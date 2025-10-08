import React, { useState } from "react";
import {
View,
Text,
Modal,
TextInput,
StyleSheet,
Pressable,
} from "react-native";
import { createProduct } from "@/services/api";
import FontAwsome from '@expo/vector-icons/FontAwesome';

export default function AddProductButton({ onProductAdded }: { onProductAdded: () => void }) {
const [modalVisible, setModalVisible] = useState(false);
const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [description, setDescription] = useState("");
const [image, setImage] = useState("");
const [favourite, setFavourite] = useState(false);

const handleSubmit = async () => {
    try {
        const newProduct = await createProduct({
            name,
            price: parseFloat(price),
            description,
            image,
            favourite,
        });
        setModalVisible(false);
        onProductAdded();

        setName("");
        setPrice("");
        setDescription("");
        setImage("");
        setFavourite(false);
    } 
    catch (error: any) {
        console.log(error)
    }
};

return (
    <View>
    <Pressable onPress={() => setModalVisible(true)}>
        <FontAwsome name="plus" size={25}/>
    </Pressable>

    <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Nuevo Producto</Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Precio"
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Descripción"
                value={description}
                onChangeText={setDescription}
            />
            <TextInput
                style={styles.input}
                placeholder="URL de la imagen"
                value={image}
                onChangeText={setImage}
            />

            <View style={styles.buttonsContainer}>
                <Pressable style={styles.button} onPress={() => setModalVisible(false)}><Text style={styles.buttonText}>Cancelar</Text></Pressable>
                <Pressable style={styles.button} onPress={handleSubmit}><Text style={styles.buttonText}>Aceptar</Text></Pressable>
            </View>
        </View>
    </Modal>
    </View>
);
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    buttonText: {
        color: '#ffffffff',
        fontSize: 20,
        fontWeight: '700'
    },

    button: {
        backgroundColor: "#ac0000ff",
        padding: 10,
        marginTop: 20,
        marginInline: 10,
        borderRadius: 12
    },
});