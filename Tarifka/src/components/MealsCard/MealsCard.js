import React from "react";
import { View, Text, Image, TouchableNativeFeedback } from "react-native";
import styles from './MealsCard.style';

const MealsCard = ({meal, onSelect}) => {
    return (
        <TouchableNativeFeedback onPress={onSelect}>
        <View style={styles.main_container}>
            <View style={styles.container}>
            <Image style={styles.image} source={{ uri: meal.strMealThumb }}/>
            <Text style={styles.text}>{meal.strMeal}</Text>
            </View>
        </View>
        </TouchableNativeFeedback>
    )
};

export default MealsCard;