import { Text, StyleSheet, Pressable } from "react-native";
import React, {useState} from "react";

type CardProps = {
    id: string,
    title: string,
    pressed?: boolean,
    backgroundColor?: string,
    textColor?: string
}

export default function Card(props: CardProps){
    const [cardProps, setCardProps] = useState<CardProps>({
        id: props.id,
        title: props.title,
        pressed: false,
        backgroundColor: '#ff0000ff',
        textColor: '#000000ff'
    })

    const changeColors = () => {
        if(cardProps.pressed){
            setCardProps(prev => ({...prev, pressed: false, backgroundColor: '#ff0000ff', textColor: '#000000ff'}))
        }
        else{
            setCardProps(prev => ({...prev, pressed: true, backgroundColor: '#9b0303ff', textColor: '#ffffffff'}))
        }
    }

    return (
        <Pressable onPress={changeColors} style={[styles.item, {backgroundColor: cardProps.backgroundColor}]}>
            <Text style={[styles.title, {color: cardProps.textColor}]}>{cardProps.title}</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15
    },

    title: {
        fontSize: 32,
        textAlign: 'center'
    },
});

