import React,  { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {Home} from '../../../screens';
import MainTab from './MainTab';
import { OnboardScreen as Onboard } from '../../../components'; 

const EntryStack = createStackNavigator();

const AlphaStack = () => {
    const token = 'null' ;

    return (
        <EntryStack.Navigator
        screenOptions={{
            headerShown: false
          }} 
        >
        { token === null ? (
           <EntryStack.Screen name="HomeStack" component={HomeStack} />
           
         ): (
           <EntryStack.Screen name="MainTab" component={MainTab} />
         )}
        </EntryStack.Navigator>
    )
}

enum HomeEnums {
    MainTab = "MainTab",
    Onboard = 'Onboard'
}

export type HomeParamList = {
    MainTab: undefined,
    Onboard: undefined
}

const Stack = createStackNavigator<HomeParamList>();

const HomeStack: FC = () => {
    return(
        <Stack.Navigator 
            initialRouteName={HomeEnums.Onboard}
            screenOptions={{
                headerShown: false
            }} 
        >
            <Stack.Screen name={HomeEnums.MainTab} component={MainTab} />
            <Stack.Screen name={HomeEnums.Onboard} component={Onboard} />
        </Stack.Navigator>
    )
}

export default AlphaStack ;