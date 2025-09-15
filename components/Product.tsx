import { Text, StyleSheet, Image, View, Modal, Pressable } from "react-native";
import React, {useState} from "react";

type CardProps = {
    id: string,
    title: string,
    favourite?: boolean,
    image: any,
    price: string,
    description: string,
    borderColor?: string,
    resizeMode?: any
}

export default function Product(props: CardProps){
    const [visible, setVisible] = useState<boolean>(false)
    const [cardProps, setCardProps] = useState<CardProps>({
        id: props.id,
        title: props.title,
        favourite: false,
        image: props.image,
        price: props.price,
        description: props.description,
        borderColor: "#ffffffff",
        resizeMode: "contain"
    })

    const markAsFavourite = () => {
        if(cardProps.favourite){
            setCardProps(prev => ({...prev, favourite: false, borderColor: "#ffffffff"}))
        }
        else{
            setCardProps(prev => ({...prev, favourite: true, borderColor: "#a00000ff"}))
        }
    }
    
    const resizePhotoToCover = () => {
        setCardProps(prev => ({...prev, resizeMode: "cover"}))
    }

    const resizePhotoToStretch = () => {
        setCardProps(prev => ({...prev, resizeMode: "stretch"}))
    }

    const resizePhotoToContain = () => {
        setCardProps(prev => ({...prev, resizeMode: "contain"}))
    }

    return (<>
            <Modal 
                animationType="slide"
                visible={visible}
                transparent={true}
                onRequestClose={() => {setVisible(false)}}
            >
                <Pressable style = {styles.modalOverlay} onPress={(() => setVisible(false))}>
                    <Pressable style = {[styles.modalContainer, {borderColor: cardProps.borderColor}]} onPress={(e) => e.stopPropagation()}>
                        <Text style={styles.title}>{cardProps.title}</Text>
                        <Text style={styles.text}>{cardProps.description}</Text>
                        <Text style={styles.text}>Price: {cardProps.price}</Text>
                        <Image 
                            source={cardProps.image}
                            style={[styles.modalImage, {resizeMode: cardProps.resizeMode}]}
                        />
                        <View style={{flexDirection:"row"}}>
                            <Pressable style={styles.button} onPress={resizePhotoToCover}><Text style={styles.buttonText}>Cover</Text></Pressable>
                            <Pressable style={styles.button} onPress={resizePhotoToStretch}><Text style={styles.buttonText}>Stretch</Text></Pressable>
                            <Pressable style={styles.button} onPress={resizePhotoToContain}><Text style={styles.buttonText}>Contain</Text></Pressable>
                        </View>
                        
                    </Pressable>
                </Pressable>
            </Modal>

            <Pressable onPress={(() => setVisible(true))} onLongPress={markAsFavourite} style={[styles.item, {borderColor: cardProps.borderColor}]}>
                <View style={[{flexDirection: "column", flex: 1}]}>
                    <Text style={styles.title}>{cardProps.title}</Text>
                    <Text style={styles.text}>{cardProps.price}</Text>
                </View>
                <Image 
                    source={cardProps.image}
                    style={styles.image}
                />
            </Pressable>
        </>
    )
};

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        marginVertical: 8,
        borderRadius: 15,
        backgroundColor: '#ffffffff',
        borderWidth: 3
    },

    title: {
        fontSize: 28,
        color: '#000000ff',
        fontWeight: "bold"
    },

    text: {
        fontSize: 18,
        color: '#000000ff',
        marginVertical: 7
    },

    image: {
        width: 135,
        height: 70,
        marginLeft: 10,
        resizeMode: "contain",
    },

    modalImage: {
        width: 350,
        height: 150,
        marginVertical: 10,
    },

    buttonText: {
        color: '#ffffffff',
        fontSize: 14,
        fontWeight: '500'
    },

    button: {
        backgroundColor: "#ac0000ff",
        padding: 10,
        marginTop: 20,
        marginInline: 10,
        borderRadius: 12
    },

    modalOverlay: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.20)",
    },

    modalContainer: {
        flexDirection: "column",
        padding: 12,
        backgroundColor: "white",
        borderRadius: 18,
        borderWidth: 3,
        alignItems: "center",
        justifyContent: "flex-start",
        alignSelf: "center",
        maxWidth: "90%",   
    },
});

