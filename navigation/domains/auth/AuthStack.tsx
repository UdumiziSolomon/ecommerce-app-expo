import React,  { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList, AuthStackScreensEnum as nameEnum } from '../../types/AuthStackParams';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
    return(
        <Stack.Navigator>
            {/* <Stack.Screen name={nameEnum.Home} component={} /> */}
        </Stack.Navigator>
    )
}

export default AuthStack ;