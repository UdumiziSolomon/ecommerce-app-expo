import React, { FC } from 'react';
import { OnboardScreen } from '../../../components';
import MainTab from '../app/MainTab';
import HomeStack from '../app/HomeStack';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();

const Root:FC = () => {
    const token = null ;
    return (
        <RootStack.Navigator
        screenOptions={{
            headerShown: false
          }} 
        >
        { token === null ? (
           <RootStack.Screen name="HomeStack" component={HomeStack} />
           
         ): (
           <RootStack.Screen name="MainTab" component={MainTab} />
         )}
        </RootStack.Navigator>
    )
}


export default Root ;