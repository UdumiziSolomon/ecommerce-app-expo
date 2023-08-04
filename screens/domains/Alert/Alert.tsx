import { View, Text, TouchableOpacity, Dimensions, Image, Pressable, StatusBar } from 'react-native';
import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../constants/Colors';
import { ScaledSheet, verticalScale as VS } from 'react-native-size-matters';
import MiCon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnCon from 'react-native-vector-icons/AntDesign';
import InCon from 'react-native-vector-icons/Ionicons';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { OrderAlerts, ActivityAlerts } from './';


const Color = Colors.light;
const { width, height } = Dimensions.get('window');

const Alert: FC = () => {

  const [active, setActive] = useState({
    order: true,
    activity: false
  });

  const { order, activity } = active ;

  const OrderFunc = () => {
    setActive({ ...active,  order: true, activity: false });
  }

  const ActivityFunc = () => {
    setActive({ ...active,  order: false, activity: true });
  }

  return (
    <View style={styles.container}>

      <View style={styles.topLayer}>
        <Text style={styles.topText}>Notifications </Text>
        <Text style={styles.topSubText}>Don't miss out on notifications... orders and app activities alerts are monitored from here!! </Text>
      </View>

        <View style={styles.switchLayer}>

          <TouchableOpacity style={!order ? styles.switchOne : styles.switchOneActive} onPress={OrderFunc}>
            <MiCon name="basket-outline" style={!order ? styles.switchIcon : styles.switchIconActive} />
            <Text style={!order ? styles.switchText : styles.switchTextActive}> Orders </Text>
          </TouchableOpacity>

          <TouchableOpacity style={!activity ? styles.switchTwo : styles.switchTwoActive } onPress={ActivityFunc}>
            <MiCon name="bell-outline" style={!activity ? styles.switchIcon : styles.switchIconActive} />
            <Text style={!activity ? styles.switchText : styles.switchTextActive}> Activities </Text>
          </TouchableOpacity>

        </View>

        <View style={{ flex: 1 }}>
          { order && <OrderAlerts /> }
          { activity && <ActivityAlerts /> }
        </View>

    </View>
  )
}

export default Alert;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Color.background,
    flex: 1,
  },
  topLayer: {
    backgroundColor: Color.background,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: '20@vs',
    paddingBottom: '5@vs',
    marginBottom: '1@vs',
  },
  topText: {
    fontFamily: 'Gotham',
    fontSize: '20@vs',
    marginVertical: '5@vs',
    color: Color.text,
    marginTop: '15@vs'
  },
  topSubText: {
    fontFamily: 'SFNS',
    fontSize: '12.3@vs',
    color: '#798698'
  },
  switchLayer: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: '10@vs',
    marginTop: '10@vs',
    paddingBottom: '15@vs'
  },
  switchOne: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '22@vs',
    paddingVertical: '6@vs',
    borderRadius: '10@vs',
    borderColor: '#7c8da5'
  },
  switchTwo: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '20@vs',
    paddingVertical: '5@vs',
    borderRadius: '10@vs',
    borderColor: '#7c8da5'
  },
  switchIcon: {
    color: '#7c8da5',
    fontSize: '14@vs'
  },
  switchText: {
    color: '#7c8da5',
    fontFamily: 'Circular'
  },
  switchOneActive: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '22@vs',
    paddingVertical: '7@vs',
    borderRadius: '10@vs',
    backgroundColor: Color.matchUp
  },
  switchTwoActive: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '22@vs',
    paddingVertical: '7@vs',
    borderRadius: '10@vs',
    backgroundColor: Color.text
  },
  switchIconActive: {
    color: Color.background,
    fontSize: '14@vs'
  },
  switchTextActive: {
    color: Color.background,
    fontFamily: 'Circular'
  }
})