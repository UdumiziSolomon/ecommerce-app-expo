import { View, Text, Dimensions } from 'react-native';
import React, { FC, useState, useContext } from 'react';
import Colors from '../../../constants/Colors';
import { ScaledSheet, } from 'react-native-size-matters';
import MiCon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GlobalContext } from '../../../context/store/Provider';
  
const Color = Colors.light ;
const { width, height } = Dimensions.get('window');

const CartUpdate = () => {
  const { cartState, cartDispatch } = useContext(GlobalContext);

  const {cartItems} = cartState ;

  return (
    
      <View style={styles.abs}>
          <MiCon name="basket-outline" style={styles.absIcon} />
          <View style={styles.abAbs}>
              <Text style={styles.absText}>{cartItems.length}</Text>
          </View>
      </View>
  )
}

export default CartUpdate

const styles = ScaledSheet.create({
    abs: {
        position: 'relative',
        flexDirection: 'row',
        paddingVertical: '4@vs',
        paddingHorizontal: '10@vs'
      },
      absIcon: {
        fontSize: '20@vs',
        color: Color.text
      } ,
      abAbs: {
        backgroundColor: Color.matchUp,
        borderRadius: '30@vs',
        width: '15@vs',
        height: '15@vs',
        justifyContent: 'center',
        position: 'absolute',
        right: 0
      },
      absText: {
        color: Color.background,
        fontSize: '10@vs',
        fontFamily: 'Gotham',
        textAlign: 'center'
      } 
})