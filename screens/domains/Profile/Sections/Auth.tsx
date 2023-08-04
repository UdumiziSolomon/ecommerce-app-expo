import { View, Text, TouchableOpacity, Dimensions, Image, Pressable, StatusBar } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../../constants/Colors';
import { ScaledSheet } from 'react-native-size-matters';
import MiCon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StackNavigationProp} from '@react-navigation/stack';

const Color = Colors.light ;
const { width, height } = Dimensions.get('window');

 type ProfileRouteParamList = {
    Profile: undefined;
    Register: undefined;
    Login: undefined;
}

const Auth: FC = () => {
  const navigation = useNavigation<StackNavigationProp<ProfileRouteParamList>>();

  return (
    <View style={styles.authContainer}>

        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.regBtn}>
          <MiCon style={styles.regBtnIcon} name="account" />
          <Text style={styles.regBtnText}> Register </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.logBtn}>
          <Text style={styles.logBtnText}> Account login </Text>
          <MiCon style={styles.logBtnIcon} name="login" />
        </TouchableOpacity>

    </View>
  )
}

export default Auth

const styles = ScaledSheet.create({
  authContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: '5@vs'
  },
  regBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '5@vs',
    borderColor: Color.text,
    paddingVertical: '5@vs',
    paddingHorizontal: '16@vs',
    borderRadius: '20@vs',
    borderWidth: 1
  },
  logBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '5@vs',
    borderColor: '#4f5d70',
    paddingVertical: '5@vs',
    paddingHorizontal: '16@vs',
    borderRadius: '20@vs',
    borderWidth: 1
  },
  regBtnText: {
    fontFamily: 'SFNS',
    fontSize: '11@vs',
    color: Color.text
  },
  regBtnIcon: {
    fontSize: '13@vs',
    color: Color.text
  },
  logBtnText: {
    fontFamily: 'SFNS',
    fontSize: '11@vs',
    color: '#4f5d70'
  },
  logBtnIcon: {
    fontSize: '13@vs',
    color: '#4f5d70'
  }
});