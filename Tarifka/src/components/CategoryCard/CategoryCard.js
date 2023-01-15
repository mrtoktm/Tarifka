import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from './CategoryCard.style';


const CategoryCard = ({categories, onSelect}) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.main_container}>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: categories.strCategoryThumb}}/>
            <Text style={styles.text}>{categories.strCategory}</Text>
        </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoryCard;