import React, { useEffect, useState } from "react";
import { Text, FlatList, SafeAreaView} from "react-native";
import Config from "react-native-config";
import axios from "axios";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import useFetch from "../../hooks/useFetch/useFetch";


const Categories = ({ navigation }) => {
    const { data, error, loading } = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');


    const handleSelect = strCategory => {
        navigation.navigate("Meals", { strCategory });
    };

    const renderProduct = ({ item }) => <CategoryCard categories={item}
        onSelect={() => handleSelect(item.strCategory)} />;

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Error />;
    }

    return (
        <SafeAreaView>
            <FlatList
                data={data.categories}
                renderItem={renderProduct} />
        </SafeAreaView>
    )
}

export default Categories;