import React from "react";
import { SafeAreaView, FlatList, Linking } from "react-native";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import DetailCard from "../../components/DetailCard/DetailCard";


const Detail = ({route}) =>{
    const {idMeal} = route.params;
    const {data, loading, error} = useFetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idMeal);
    
    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Error />;
    }

    const renderDetail = ({item}) => <DetailCard detail={item} 
    onSelect = {() => {Linking.openURL(item.strYoutube)}}/>;
    
    return (
        <SafeAreaView>
            <FlatList 
            data={data.meals}
            renderItem={renderDetail} />
        </SafeAreaView>
    )
}

export default Detail;