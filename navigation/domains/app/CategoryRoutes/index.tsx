import React,  { FC, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, useRoute, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Colors from '../../../../constants/Colors';
import { Dimensions } from 'react-native';
import { verticalScale as VS } from 'react-native-size-matters';

import {Tech, Clothes, Gadgets, Offices, Electronics, Shoes, Home, Food, Comms, Men, Women, Children } from '../../../../screens/domains/Category';
import {Category} from '../../../../screens';

const Stack = createStackNavigator();
const Color = Colors.light ;
const { width, height } = Dimensions.get('window');


enum CategoryEnumProps {
    Category = 'Category',
    Tech = 'Tech',
    Clothes = 'Clothes',
    Gadgets = 'Gadgets',
    Offices = 'Offices',
    Electronics = 'Electronics',
    Shoes = 'Shoes',
    Home = 'Home',
    Food = 'Food',
    Comms = 'Comms',
    Men = 'Men',
    Women = 'Women',
    Children = 'Children'
}

type CategoryStackParamList = {
    Category: undefined;
    Tech: undefined;
    Clothes: undefined;
    Gadgets: undefined;
    Offices: undefined;
    Electronics: undefined;
    Shores: undefined;
    Home: undefined;
    Food: undefined;
    Comms: undefined;
    Men: undefined;
    Women: undefined;
    Children: undefined;
}

const CategoryRoute = () => {

    const route = useRoute();
    const navigation = useNavigation<CategoryStackParamList | any>();
    const routeName = getFocusedRouteNameFromRoute(route);

    useEffect(() => {
        if(routeName === CategoryEnumProps.Tech){
            navigation.setOptions({ tabBarStyle: { display: 'none'}});
        }      
        else{
            navigation.setOptions({
                tabBarStyle: {
                    backgroundColor: Color.background,
                    height: VS(55),
                    borderTopColor: Color.background,
                    paddingTop: VS(10)
                }
            })
        }
    }, [navigation,route])

  return (
    <Stack.Navigator
    initialRouteName={CategoryEnumProps.Category}
    screenOptions={{
        headerShown: false
    }} 
    >
        <Stack.Screen name={CategoryEnumProps.Category} component={Category} />
        <Stack.Screen name={CategoryEnumProps.Tech} component={Tech} />
        <Stack.Screen name={CategoryEnumProps.Clothes} component={Clothes} />
        <Stack.Screen name={CategoryEnumProps.Gadgets} component={Gadgets} />
        <Stack.Screen name={CategoryEnumProps.Offices} component={Offices} />
        <Stack.Screen name={CategoryEnumProps.Electronics} component={Electronics} />
        <Stack.Screen name={CategoryEnumProps.Shoes} component={Shoes} />
        <Stack.Screen name={CategoryEnumProps.Home} component={Home} />
        <Stack.Screen name={CategoryEnumProps.Food} component={Food} />
        <Stack.Screen name={CategoryEnumProps.Comms} component={Comms} />
        <Stack.Screen name={CategoryEnumProps.Men} component={Men} />
        <Stack.Screen name={CategoryEnumProps.Women} component={Women} />
        <Stack.Screen name={CategoryEnumProps.Children} component={Children} />
    </Stack.Navigator>
  )
}

export default CategoryRoute;