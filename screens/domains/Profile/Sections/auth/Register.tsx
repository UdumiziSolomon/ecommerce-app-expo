import { View, Text, TouchableOpacity, Dimensions, Image, Pressable, StatusBar, TextInput } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../../../constants/Colors';
import { ScaledSheet } from 'react-native-size-matters';
import MiCon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnCon from 'react-native-vector-icons/AntDesign';
import FoCon from 'react-native-vector-icons/FontAwesome';


import {StackNavigationProp} from '@react-navigation/stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Color = Colors.light ;
const { width, height } = Dimensions.get('window');

 type ProfileRouteParamList = {
    Profile: undefined;
    Register: undefined;
    Login: undefined;
}

const Register = () => {

  const navigation = useNavigation<StackNavigationProp<ProfileRouteParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.topLayer}>
        <TouchableOpacity onPress={ () => navigation.goBack()} style={styles.int}>
          <MiCon style={styles.topLayerIcon} name="chevron-left" />
        </TouchableOpacity>
      </View>

      <View style={styles.top}>
          <AnCon style={styles.topIcon} name="alipay-circle" />
        </View>


      <View style={styles.intro}>
        <Text style={styles.introText}>Open a new account </Text>
        <Text style={styles.introSubText}>Create a new account with pandopp to start placing orders for your favourite items </Text>
      </View>

    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.intt}>
          <View style={[styles.inputLayer, {  }]}>
            <MiCon name="email-variant" style={styles.inputIcon} />
            <TextInput
              placeholder="Enter a valid email address..."
              style={styles.input}
              />
          </View>
        </View>
      

        <View style={styles.intt}>
          <View style={[styles.inputLayer, {  }]}>
            <AnCon name="user" style={styles.inputIcon} />
            <TextInput
              placeholder="Enter your preferred username..."
              style={styles.input}
              />
          </View>
        </View>

        <View style={styles.intt}>
          <View style={[styles.inputLayer, {  }]}>
            <MiCon name="shield-lock" style={styles.inputIcon} />
            <TextInput
              placeholder="Enter your password..."
              style={styles.input}
              />
          </View>
        </View>

        <View style={styles.intt}>
          <View style={[styles.inputLayer, {  }]}>
            <FoCon name="key" style={styles.inputIcon} />
            <TextInput
              placeholder="Confirm your password..."
              style={styles.input}
              />
          </View>
        </View>

        <View style={styles.intt}>
          <View style={[styles.inputLayer, {  }]}>
            <FoCon name="slideshare" style={styles.inputIcon} />
            <TextInput
              placeholder="Referral code..."
              style={styles.input}
              />
          </View>
        </View>

      <View style={styles.btnGr}>
        <TouchableOpacity style={styles.btnLay}>
          <Text style={styles.btnText}> REGISTER  </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.dont}> Already a member?,  Login here!!! </Text>
        </TouchableOpacity>
      </View>

     </KeyboardAwareScrollView>

    </View>
  )
}

export default Register

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
  int: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topLayerIcon: {
    fontSize: '30@vs',
    color: Color.text
  },
  topLayerText: {
    fontFamily: 'Gotham',
    color: Color.text
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  topIcon: {
    fontSize: '100@vs',
    color: Color.text
  },
  intro: {
    paddingHorizontal: '15@vs',
    marginVertical: '10@vs',
  },
  introText: {
    fontFamily: 'Gotham',
    color: Color.text,
    fontSize: '22@vs',
    textAlign: 'center'
  },
  introSubText: {
    fontFamily: 'Circular',
    color: '#687990',
    fontSize: '12.5@vs',
    textAlign: 'center'
  },
  intt: {
    paddingHorizontal: '10@vs',
    width: width,
    alignItems: 'center'
  },
  inputLayer: {
    position: 'relative',
    marginTop: '20@vs',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: '6@vs',
    width: width - 30,
    borderColor: '#eeeeee'
  },
  input: {
    width: width - 50,
    height: '43@vs',
    paddingHorizontal: '10@vs',
    fontFamily: 'Circular',
    position: 'relative'
  },
  inputIcon: {
    fontSize: '16@vs',
    color: '#98a3af',
    marginLeft: '5@vs'
  },
  btnGr: {
    alignItems: 'center',
    width: width
  },
  btnLay: {
    width: width - 30,
    backgroundColor: '#2e2f5b' ,
    marginVertical: '10@vs',
    borderRadius: '10@vs',
    paddingVertical: '14@vs',
    marginTop: '20@vs'
  },
  btnText: {
    fontFamily: 'Gotham',
    fontSize: '12@vs',
    color: '#fff',
    textAlign: 'center'
  },
  dont: {
    fontFamily: 'Circular',
    fontSize: '13@vs',
    color: '#515972',
    textAlign: 'center',
    marginVertical: '15@vs',
    borderBottomColor: '#e1dede',
    borderBottomWidth: 1
  },
})