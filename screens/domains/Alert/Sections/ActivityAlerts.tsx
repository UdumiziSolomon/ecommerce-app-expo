import { View, Text, TouchableOpacity, Dimensions, Image, Pressable, StatusBar, ScrollView } from 'react-native';
import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../../constants/Colors';
import { ScaledSheet, verticalScale as VS } from 'react-native-size-matters';
import MiCon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnCon from 'react-native-vector-icons/AntDesign';
import InCon from 'react-native-vector-icons/Ionicons';
import { activityData } from './data';


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Color = Colors.light;
const { width, height } = Dimensions.get('window');

const ActivityAlerts: FC = () => {
  return (
    <View style={styles.container}>
    <KeyboardAwareScrollView  contentContainerStyle={{ flexGrow: 1 }}>
        { activityData.map(item => (

            <TouchableOpacity key={item.id} style={styles.ordLayer}>
                <View style={styles.topOrd}>
                <MiCon name="bell-outline" style={styles.barIcon} />
                    <View>
                        <Text style={styles.ordTitle}>{item.title}</Text>
                        <Text style={styles.ordDesc} ellipsizeMode="tail" numberOfLines={2} >{item.desc}</Text>
                    </View>
                </View>
                    <View style={styles.timeLay}>
                        <Text style={styles.ordTime}> 3mins ago </Text>
                        <MiCon name="clock-outline" style={styles.barIconn} />
                    </View>
            </TouchableOpacity>
        ))}
    </KeyboardAwareScrollView>
    </View>
  )
}

export default ActivityAlerts

const styles = ScaledSheet.create({
    container: {
        backgroundColor: Color.background,
        alignItems: 'center',
        flex: 1
    },
    barIcon: {
        marginHorizontal: '10@vs',
        fontSize: '20@vs',
        color: Color.background,
        backgroundColor: Color.text,
        paddingHorizontal: '10@vs',
        borderRadius: '50@vs',
        paddingVertical: '8@vs'
    },
    barIconn: {
        marginHorizontal: '2@vs',
        fontSize: '15@vs',
        color: '#98afcf'
    },
    ordLayer: {
        // flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#977676", 
        shadowOffset: { width: 0, height: 1 }, 
        shadowOpacity: 0.8, 
        shadowRadius: 1, 
        elevation: 2,
        backgroundColor: Color.background,
        marginVertical: '1@vs',
        width: width - 20,
        paddingVertical: '13@vs' 
    },
    ordTitle: {
        fontFamily: 'Gotham',
        fontSize: '12.5@vs',
        marginVertical: '3@vs',
        color: Color.text
    },
    ordDesc: {
        fontFamily: 'Circular',
        fontSize: '11.5@vs',
        width: '240@vs',
        color: Color.text
    },
    ordTime: {
        fontFamily: 'Circular',
        fontSize: '11@vs',
        color: '#98afcf'
    },
    timeLay: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: width - 20,
        marginTop: '5@vs',
        marginRight: '20@vs'
    },
    topOrd: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})