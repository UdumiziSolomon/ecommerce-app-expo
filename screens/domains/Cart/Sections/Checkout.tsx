import { View, Text, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../../constants/Colors';
import { ScaledSheet, verticalScale as VS } from 'react-native-size-matters';
import MiCon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnCon from 'react-native-vector-icons/AntDesign';
import InCon from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack/';


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Color = Colors.light;
const { width, height } = Dimensions.get('window');

const Checkout: FC = () => {
  return (
    <View style={styles.bottomView}>
        <View style={styles.topL}>

            <View style={styles.leftIt}>
                <MiCon name="basket-outline" style={styles.botItco} />
                <Text style={styles.botItems}> 3 items </Text>
            </View>

            <View style={styles.botFirst}>
                <Text style={styles.botTot}> Sub Total </Text>
                <Text style={styles.botPrice}> $3,455 </Text>
            </View>

        </View>

        <View style={styles.btnLay}>
            <TouchableOpacity style={styles.botCheck}>
                <Text style={styles.botTopText}> CHECKOUT ALL  </Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.btText}> Coupon available in next step</Text>

    </View> 
  )
}

export default Checkout;

const styles = ScaledSheet.create({
    bottomView: {
        width: width,
        height: 'auto',
        backgroundColor: Color.text,
        borderTopLeftRadius: '30@vs',
        borderTopRightRadius: '30@vs',
        justifyContent: 'center',
        paddingVertical: '10@vs',
        paddingHorizontal: '5@vs'
    },
    botTopText: {
        fontFamily: 'Gotham',
        fontSize: '12.5@vs',
        textAlign: 'center',
        color: Color.background
    },
    topL: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '10@vs',
        marginBottom: '5@vs'
    },
    leftIt: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '10@vs',
        marginTop: '3@vs'
    },
    botFirst: {
        marginHorizontal: '10@vs',
        flexDirection: 'column',
        alignItems: 'center'
    },
    botTot: {
        marginLeft: '30@vs',
        fontFamily: 'Gotham',
        fontSize: '14@vs',
        color: Color.background,
    },
    botItems: {
        fontFamily: 'Gotham',
        fontSize: '13@vs',
        color: '#98afcf',
    },
    botPrice: {
        fontFamily: 'Gotham',
        fontSize: '13@vs',
        color: '#98afcf',
        alignSelf: 'flex-end'
    },
    btnLay: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '2@vs'
    },
    btnText: {
        color: Color.background,
        fontSize: '23@vs'
    },
    botItco: {
        color: '#98afcf',
        fontSize: '25@vs'
    },
    botCheck: {
        width: width / 1.2,
        backgroundColor: Color.matchUp,
        paddingVertical: '13@vs',
        borderRadius: '50@vs',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btText: {
       color: '#98afcf',
       fontFamily: 'Circular',
       textAlign: 'center',
       fontSize: '12@vs',
       marginTop:'5@vs' 
    }
})

