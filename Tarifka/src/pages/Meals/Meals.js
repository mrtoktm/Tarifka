import axios from "axios";
import React, { useEffect, useState } from "react";
import { SafeAreaView,FlatList } from "react-native";
import MealsCard from "../../components/MealsCard/MealsCard";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import useFetch from "../../hooks/useFetch/useFetch";

const Meals = ({route, navigation}) => {
    const {strCategory} = route.params;
    const {data, loading, error} = useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + strCategory);
    console.log(route);
    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Error />;
    }
    const handleMealSelect = idMeal => {
        navigation.navigate ("Detail", {idMeal});
    };

    const renderMeals = ({item}) => <MealsCard meal={item} 
        onSelect={() => handleMealSelect(item.idMeal)}/>
    return (
        <SafeAreaView>
            <FlatList
            data={data.meals}
            renderItem={renderMeals}/>
        </SafeAreaView>
    )
}

export default Meals;