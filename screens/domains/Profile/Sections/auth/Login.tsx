import { View, Text, TouchableOpacity, Dimensions, Image, Pressable, StatusBar , TextInput} from 'react-native';
import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../../../constants/Colors';
import { ScaledSheet } from 'react-native-size-matters';
import MiCon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnCon from 'react-native-vector-icons/AntDesign';

import {StackNavigationProp} from '@react-navigation/stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Color = Colors.light ;
const { width, height } = Dimensions.get('window');

 type ProfileRouteParamList = {
    Profile: undefined;
    Register: undefined;
    Login: undefined;
}

const Login = () => {

  const navigation = useNavigation<StackNavigationProp<ProfileRouteParamList>>();

  const [dis, setDis] = useState('flex');

  console.log(dis);

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
      <Text style={styles.topLayerText}> Pandoop Sales Service </Text>

      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>

       <View style={styles.intt}>
          <View style={[styles.inputLayer, {  }]}>
            <TextInput
              placeholder="Enter your email address..."
              style={styles.input}
             />
            <View style={styles.absLay}>
            <MiCon name="email-fast-outline" style={styles.inputIcon} />
            </View>
          </View>
       </View>

       <View style={styles.intt}>
          <View style={[styles.inputLayer, {  }]}>
            <TextInput
              placeholder="Enter your password..."
              style={styles.input}
             />
            <View style={styles.absLay}>
            <MiCon name="key-outline" style={styles.inputIcon} />
            </View>
          </View>
       </View>

      <TouchableOpacity>
        <Text style={styles.for}>Forgot your password?</Text>
      </TouchableOpacity>

      <View style={styles.btnGr}>
        <TouchableOpacity style={styles.btnLay}>
          <Text style={styles.btnText}> Login to your account </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.dont}> Don't have a pandopp account., Register here!!! </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.orr}> OR </Text>
        <Text style={styles.orrr}> Login with your social accounts </Text>
        <View style={styles.logLayer}>
          <TouchableOpacity>
            <MiCon name="facebook" style={styles.logIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MiCon name="instagram" style={styles.logIconnn} />
          </TouchableOpacity>
          <TouchableOpacity>
            <AnCon name="googleplus" style={styles.logIconn} />
          </TouchableOpacity>
        </View>
      </View>

      </KeyboardAwareScrollView>

    </View>
  )
}

export default Login;

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
    color: Color.text,
    textAlign: 'center',
    fontSize: '20@vs',
    marginBottom: '20@vs',
    marginTop: '4@vs'
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  topIcon: {
    fontSize: '100@vs',
    color: Color.text,
    marginTop: '20@vs'
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
    fontSize: '21@vs',
    color: '#98a3af'
  },
  absLay: {
    position: 'absolute',
    left: '10@vs',
    top: '50%',
    transform: [{
      translateY: -36
    }],
    zIndex: 100,
    backgroundColor: '#ffffff',
    paddingHorizontal: '5@vs'
  },
  absText: {
    fontFamily: 'Circular',
    color: '#222b45',
    fontSize: '12@vs'
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
    paddingVertical: '13@vs'
  },
  btnText: {
    fontFamily: 'Circular',
    fontSize: '13@vs',
    color: '#fff',
    textAlign: 'center'
  },
  dont: {
    fontFamily: 'Circular',
    fontSize: '13@vs',
    color: '#515972',
    textAlign: 'center',
    marginTop: '10@vs',
    borderBottomColor: '#e1dede',
    borderBottomWidth: 1
  },
  for: {
    marginRight: '20@vs',
    fontFamily: 'Circular',
    color: '#222b45',
    width: 'auto',
    fontSize: '12.5@vs',
    marginVertical: '6@vs',
    alignSelf: 'flex-end'
  },
  orr: {
    textAlign: 'center',
    fontFamily: 'Gotham',
    color: '#999696',
    marginTop: '20@vs',
    fontSize: '12@vs'
  },
  orrr: {
    fontFamily: 'Circular',
    fontSize: '12@vs',
    textAlign: 'center',
    marginTop: '20@vs',
    color: '#aaa'
  },
  logLayer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width,
    paddingHorizontal: '10@vs',
    justifyContent: 'center',
    marginVertical: '5@vs'
  },
  logIcon: {
    fontSize: '25@vs',
    color: '#336699',
    marginHorizontal: '7@vs'
  },
  logIconn: {
    fontSize: '25@vs',
    color: '#336699',
    marginHorizontal: '7@vs'
  },
    logIconnn: {
    fontSize: '25@vs',
    color: '#993388',
    marginHorizontal: '7@vs'
  }
})