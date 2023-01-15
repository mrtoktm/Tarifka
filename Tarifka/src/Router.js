import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from './pages/Categories';
import Detail from './pages/Detail';
import Meals from './pages/Meals';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} options={{
          headerTintColor: 'orange',
          headerTitle: 'Categories',
          headerTitleAlign: 'center',
        }}/>
        <Stack.Screen name='Meals' component={Meals} options={{
          headerTintColor: 'orange',
          headerTitle: 'Meals',
          headerTitleAlign: 'center'
        }} />
        <Stack.Screen name='Detail' component={Detail} options={{
          headerTintColor: 'orange',
          headerTitle: 'Detail',
          headerTitleAlign: 'center'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;