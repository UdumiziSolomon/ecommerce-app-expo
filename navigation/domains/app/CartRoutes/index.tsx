import React,  { FC, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, useRoute, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Colors from '../../../../constants/Colors';
import { Dimensions } from 'react-native';
import { verticalScale as VS } from 'react-native-size-matters';
import {CartedDisplay, CartedProducts} from '../../../../screens/domains/Cart';
import {Cart} from '../../../../screens';


const Stack = createStackNavigator();
const Color = Colors.light ;
const { width, height } = Dimensions.get('window');


enum CartRoutesEnum {
    Cart = 'Cart',
    CartedDisplay = 'CartedDisplay',
    CartedProducts = 'CartedProducts'
}

const CartRoute: FC = () => {

    const route = useRoute();
    const navigation = useNavigation();
    const routeName = getFocusedRouteNameFromRoute(route);

    useEffect(() => {
        if(routeName === CartRoutesEnum.Cart){
            navigation.setOptions({ tabBarStyle: { display: 'none'}});
        }
        else if(routeName === CartRoutesEnum.CartedDisplay){
            navigation.setOptions({ tabBarStyle: { display: 'none'}});
        }
        else if(routeName === CartRoutesEnum.CartedProducts){
            navigation.setOptions({ tabBarStyle: { display: 'none'}});
        }
        else{
            navigation.setOptions({
                tabBarStyle: {
                    // backgroundColor: Color.background,
                    // height: VS(55),
                    // borderTopColor: Color.background,
                    // paddingTop: VS(10),
                    display: 'none'
                }
            })
        }
    }, [navigation,route])

  return (
    <Stack.Navigator
    initialRouteName={CartRoutesEnum.Cart}
    screenOptions={{
        headerShown: false
    }} 
    >
        <Stack.Screen name={CartRoutesEnum.Cart} component={Cart} />
        <Stack.Screen name={CartRoutesEnum.CartedDisplay} component={CartedDisplay} />
        <Stack.Screen name={CartRoutesEnum.CartedProducts} component={CartedProducts} />

    </Stack.Navigator>
  )
}

export default CartRoute;