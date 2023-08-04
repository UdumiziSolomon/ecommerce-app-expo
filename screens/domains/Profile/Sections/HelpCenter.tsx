import { View, Text, TouchableOpacity, Dimensions, Image, StatusBar } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../../constants/Colors';
import { ScaledSheet } from 'react-native-size-matters';
import MiCon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaCon from 'react-native-vector-icons/MaterialIcons';

import {StackNavigationProp} from '@react-navigation/stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Color = Colors.light ;
const { width, height } = Dimensions.get('window');

const imag = require('../../../../assets/images/touch.gif');

const HelpCenter: FC = () => {

  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>

      <View style={styles.topLayer}>
      <TouchableOpacity onPress={ () => navigation.goBack()}>
          <MiCon style={styles.topLayerIcon} name="chevron-left" />
        </TouchableOpacity>
      </View>

      <View style={styles.onboardImageLay}>
        <Image source={imag} style={styles.onboardImage} resizeMode="contain" />
      </View>

        <Text style={styles.topText}> Help center </Text>
      <Text style={styles.descText}> We are here to help you, please get in touch with us via one of these...</Text>

      <View style={styles.prtLayer}>
        <MaCon name="phone" style={styles.prtIcon} />
        <View style={styles.prtSubLayer}>
          <Text style={styles.prtTopText}>Phone number</Text>
          <Text style={styles.prtDownText}>+234 9160824324</Text>
        </View>
      </View>

       <View style={styles.prtLayer}>
        <MaCon name="mail-outline" style={styles.prtIcon} />
        <View style={styles.prtSubLayer}>
          <Text style={styles.prtTopText}>E-mail address</Text>
          <Text style={styles.prtDownText}>pandoppsales@hotmail.com</Text>
        </View>
      </View>

      <View style={styles.prtLayerr}>
        <View style={styles.prtSubLayerr}>
        <MaCon name="contact-support" style={styles.prtIcoon} />
        <View style={styles.lft}>
          <Text style={styles.prtTopText}>Contact live support</Text>
          <Text style={styles.prtDownText}>Chat with our live support </Text>
        </View>
        </View>
        <MiCon name="chevron-right" style={styles.prtIconn} />
      </View>


      </KeyboardAwareScrollView>

    </View>
  )
}

export default HelpCenter

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background
  },
  topLayer: {
    backgroundColor: Color.background,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: '20@vs',
    paddingBottom: '5@vs',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5@vs',
    justifyContent: 'space-between'
  },
  topLayerIcon: {
    fontSize: '30@vs',
    color: Color.text
  },
  topIcon: {
    fontSize: '20@vs',
    color: Color.text,
  },
  topText: {
    fontFamily: 'Gotham',
    color: Color.text,
    fontSize: '22@vs',
    textAlign: 'center'
  },
  onboardImageLay: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  onboardImage: {
    resizeMode: 'contain',
    width: width - 20,
    height: height / 2.7
  },
  descText: {
    fontFamily: 'Circular',
    fontSize: '14@vs',
    textAlign: 'center',
    marginBottom: '20@vs',
    paddingHorizontal: '10@vs',
    color: '#98afcf',
    marginTop: '2@vs'
  },
  prtLayer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginVertical: '20@vs',
    paddingHorizontal: '20@vs',
    alignItems: 'center',
    width: width,
  },
  prtSubLayer: {
    flexDirection: 'column',
    marginHorizontal: '20@vs'
  },
  prtIcon: {
    color: Color.text,
    fontSize: '23@vs',
    backgroundColor: '#eee',
    paddingHorizontal: '10@vs',
    borderRadius: '50@vs',
    paddingVertical: '10@vs'
  },
  prtTopText: {
    fontFamily: 'Gotham',
    color: Color.text,
    fontSize: '14@vs',
  },
  prtDownText: {
    fontFamily: 'Circular',
    color: '#98afcf',
    fontSize: '12@vs',
    marginTop: '3@vs'
  },
  prtIconn: {
    color: Color.text,
    fontSize: '25@vs'
  },
  prtLayerr: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: '20@vs',
    paddingHorizontal: '20@vs',
    alignItems: 'center',
    width: width,
    justifyContent: 'space-between',
  },
  prtSubLayerr: {
    flexDirection: 'row',
    paddingHorizontal: '10@vs',
    alignItems: 'center',
    justifyContent: 'center'
  },
  prtIcoon: {
    color: Color.background,
    fontSize: '25@vs',
    backgroundColor: Color.text,
    paddingHorizontal: '10@vs',
    borderRadius: '50@vs',
    paddingVertical: '10@vs'
  },
  lft: {
    marginLeft: '15@vs'
  }
})