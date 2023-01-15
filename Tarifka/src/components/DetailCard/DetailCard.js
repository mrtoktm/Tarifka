import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from './DetailCard.style';

const DetailCard = ({detail, onSelect}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: detail.strMealThumb}}/>
            <Text style={styles.text}>{detail.strMeal}</Text>
            <Text style={styles.area}>{detail.strArea}</Text>
            <Text style={styles.desc}>{detail.strInstructions}</Text>
            <TouchableOpacity style={styles.button} onPress={onSelect}>
                <Text style={styles.button_text}>Watch on Youtube</Text>
            </TouchableOpacity>
        </View>
    )
};

export default DetailCard;