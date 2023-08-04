import React,  { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList, RootTabScreensEnum as nameEnum } from '../../types/RootStack';
import { verticalScale as VS } from 'react-native-size-matters';
import MiCon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnCon from 'react-native-vector-icons/AntDesign';
import InCon from 'react-native-vector-icons/Ionicons';
import { useRoute, useNavigation, getFocusedRouteNameFromRoute } from '@react-navigation/native'


import { Text } from 'react-native';
import Colors from '../../../constants/Colors';

const Color = Colors.light ;

const Tab = createBottomTabNavigator<RootTabParamList>();

// screens
import { Alert } from '../../../screens';
import { HomeRoute, ProfileRoute, CategoryRoute, CartRoute } from './';

const MainTab: FC = () => {

  const route = useRoute();
  const navigation = useNavigation();
  const routeName = getFocusedRouteNameFromRoute(route); 

    return(
        <Tab.Navigator
            initialRouteName={nameEnum.Home}
            screenOptions={{
                tabBarShowLabel: true,
                headerShown: false,
                tabBarStyle: {
                  backgroundColor: Color.background,
                  height: VS(55),
                  borderTopColor: Color.background,
                  paddingTop: VS(10)
                }
            }}
        >

            <Tab.Screen 
                name={nameEnum.Home} 
                component={HomeRoute}
                options={ ({ route }) => ({
                    tabBarIcon: ({ focused }) => (
                      <AnCon 
                        name="home" 
                        color={ focused ? Color.tabIconActive : Color.tabIconInActive } 
                        size={ focused ? VS(19) : VS(17)}  
                      />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text 
                        style={[{color: focused ?  Color.tabTextActive : Color.tabTextInActive, paddingBottom: VS(9), fontFamily: 'SFNS', fontSize: VS(8) }]}> Home </Text>
                    )
                  })} 
            />

            <Tab.Screen 
                name={nameEnum.CategoryRoute} 
                component={CategoryRoute}
                options={ ({ route }) => ({
                    tabBarIcon: ({ focused }) => (
                      <InCon 
                        name="ios-grid-outline" 
                        color={ focused ? Color.tabIconActive : Color.tabIconInActive } 
                        size={ focused ? VS(18) : VS(16)}  
                      />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={[{color: focused ?  Color.tabTextActive : Color.tabTextInActive, paddingBottom: VS(9), fontFamily: 'SFNS', fontSize: VS(8) }]}> Categories </Text>
                    )
                })}  
            />

            <Tab.Screen 
                name={nameEnum.CartRoute} 
                component={CartRoute}
                options={ ({ route }) => ({
                    tabBarIcon: ({ focused }) => (
                      <MiCon 
                        name="basket-outline" 
                        color={ focused ? Color.tabIconActive : Color.tabIconInActive } 
                        size={ focused ? VS(22) : VS(19)}  
                      />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={[{color: focused ?  Color.tabTextActive : Color.tabTextInActive, paddingBottom: VS(9), fontFamily: 'SFNS', fontSize: VS(8) }]}> Cart </Text>
                    ),
                    tabBarStyle: ({
                      display: 'none'
                    })
                })}  
            />

            <Tab.Screen 
                name={nameEnum.Alert} 
                component={Alert}
                options={ ({ route }) => ({
                    tabBarIcon: ({ focused }) => (
                       <MiCon 
                        name="bell-outline" 
                        color={ focused ? Color.tabIconActive : Color.tabIconInActive } 
                        size={ focused ? VS(22) : VS(19)}   
                      />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={[{color: focused ?  Color.tabTextActive : Color.tabTextInActive, paddingBottom: VS(9), fontFamily: 'SFNS', fontSize: VS(8) }]}> Alerts </Text>
                    )
                })}  
            />

            <Tab.Screen 
                name={nameEnum.Profile} 
                component={ProfileRoute}
                options={ ({ route }) => ({
                    tabBarIcon: ({ focused }) => (
                      <MiCon 
                        name="account-outline" 
                        color={ focused ? Color.tabIconActive : Color.tabIconInActive } 
                        size={ focused ? VS(22) : VS(19)}  
                      />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={[{color: focused ?  Color.tabTextActive : Color.tabTextInActive, paddingBottom: VS(9), fontFamily: 'SFNS', fontSize: VS(8) }]}> Profile </Text>
                    )
                })}  
            />


        </Tab.Navigator>
    )
}

export default MainTab;