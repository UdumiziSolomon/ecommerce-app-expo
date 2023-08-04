import React,  { FC, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Profile } from '../../../../screens';
import { useNavigation, useRoute, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Colors from '../../../../constants/Colors';
import { Dimensions } from 'react-native';
import { verticalScale as VS } from 'react-native-size-matters';

import { Register, Login, ProfileBio, HelpCenter, PrivacyPolicy, AboutUs, Referrals, Processing, Shipped, Reviewed  } from '../../../../screens/domains/Profile';

const Stack = createStackNavigator();
const Color = Colors.light ;
const { width, height } = Dimensions.get('window');


enum ProfileRoutesEnum {
    Profile = 'Profile',
    Register = 'Register',
    Login = 'Login',
    ProfileBio = 'ProfileBio',
    HelpCenter = 'HelpCenter',
    PrivacyPolicy = 'PrivacyPolicy',
    AboutUs = 'AboutUs',
    Referrals = 'Referrals',
    Processing = 'Processing',
    Shipped = 'Shipped',
    Reviewed = 'Reviewed',
}

type ProfileRouteParamList = {
    Profile: undefined;
    Register: undefined;
    Login: undefined;
    ProfileBio: undefined;
    HelpCenter: undefined;
    PrivacyPolicy: undefined;
    AboutUs: undefined;
    Referrals: undefined;
    Processing: undefined;
    Shipped: undefined;
    Reviewed: undefined;
}

const ProfileRoute = () => {

    const route = useRoute();
    const navigation = useNavigation<ProfileRouteParamList | any>();
    const routeName = getFocusedRouteNameFromRoute(route);

    useEffect(() => {
        if(routeName === ProfileRoutesEnum.Register){
            navigation.setOptions({ tabBarStyle: { display: 'none'}});
        }
        else if(routeName === ProfileRoutesEnum.Login){
            navigation.setOptions({ tabBarStyle: { display: 'none'}});
        }
        else if(routeName === ProfileRoutesEnum.ProfileBio){
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
    initialRouteName={ProfileRoutesEnum.Profile}
    screenOptions={{
        headerShown: false
    }} 
    >
        <Stack.Screen name={ProfileRoutesEnum.Profile} component={Profile} />
        <Stack.Screen name={ProfileRoutesEnum.Register} component={Register} />
        <Stack.Screen name={ProfileRoutesEnum.Login} component={Login} />
        <Stack.Screen name={ProfileRoutesEnum.ProfileBio} component={ProfileBio} />
        <Stack.Screen name={ProfileRoutesEnum.HelpCenter} component={HelpCenter} />
        <Stack.Screen name={ProfileRoutesEnum.PrivacyPolicy} component={PrivacyPolicy} />
        <Stack.Screen name={ProfileRoutesEnum.AboutUs} component={AboutUs} />
        <Stack.Screen name={ProfileRoutesEnum.Referrals} component={Referrals} />
        <Stack.Screen name={ProfileRoutesEnum.Processing} component={Processing} />
        <Stack.Screen name={ProfileRoutesEnum.Shipped} component={Shipped} />
        <Stack.Screen name={ProfileRoutesEnum.Reviewed} component={Reviewed} />

    </Stack.Navigator>
  )
}

export default ProfileRoute