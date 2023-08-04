import React,  { FC, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../../../screens';
import { ProductDisplay } from '../../../../screens/domains/Home';
import { useNavigation, useRoute, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Colors from '../../../../constants/Colors';
import { Dimensions } from 'react-native';
import { verticalScale as VS } from 'react-native-size-matters';


const Stack = createStackNavigator();
const Color = Colors.light ;
const { width, height } = Dimensions.get('window');


enum HomeRoutesEnum {
    Home = 'AppHome',
    ProductDisplay = 'ProductDisplay'
}

const HomeRoute: FC = () => {

    const route = useRoute();
    const navigation = useNavigation();
    const routeName = getFocusedRouteNameFromRoute(route);

    useEffect(() => {
        if(routeName === HomeRoutesEnum.ProductDisplay){
            navigation.setOptions({ tabBarStyle: { display: 'none'}});
        }else{
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
    initialRouteName={HomeRoutesEnum.Home}
    screenOptions={{
        headerShown: false
    }} 
    >
        <Stack.Screen name={HomeRoutesEnum.Home} component={Home} />
        <Stack.Screen name={HomeRoutesEnum.ProductDisplay} component={ProductDisplay} />

    </Stack.Navigator>
  )
}

export default HomeRoute;