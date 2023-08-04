import { View, Text, TouchableOpacity, Dimensions, Image, Switch, StatusBar, Share  } from 'react-native';
import React, { FC, useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../constants/Colors';
import { ScaledSheet, verticalScale as VS } from 'react-native-size-matters';
import MiCon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnCon from 'react-native-vector-icons/AntDesign';
import MaCon from 'react-native-vector-icons/MaterialIcons';
import FoCon from 'react-native-vector-icons/FontAwesome';
import { StackNavigationProp } from '@react-navigation/stack';

import { settingsData } from './Sections/data';
import { Auth } from './';
import {GlobalContext} from '../../../context/store/Provider';


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
  
const Color = Colors.light ;
const { width, height } = Dimensions.get('window');


const Profile: FC = () => {

    const navigation = useNavigation<StackNavigationProp<any>>();
    const { themeState, themeDispatch } = useContext<any>(GlobalContext);

    const token = null ;
    const user_email = 'solomonudumizi@gmail.com'
    const {theme} = themeState;

    
    const [darkModeStat, setDarkModeStat] = useState(false);
    
    const changeTheme = async () => {
      await setDarkModeStat(!darkModeStat);
      let mode = darkModeStat ? 'dark' : 'light'
      themeDispatch({ type: 'SWAP_THEME', theme: mode });
    }

    const onShare = async () => {
      try {
        const result = await Share.share({
          message: `Pandopp sales services is available`,
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        console.log(error);
      }
    }



  return (
    <View style={styles.container}>

      <View style={styles.topSection}>
        <AnCon name="alipay-circle" style={styles.barIcon} />

        <View>
          <Text style={styles.topSectText}> User Account </Text>

          {
            token == null ? (
                <Auth /> 
              ) :
              <View>
                <Text ellipsizeMode="tail" numberOfLines={1} style={styles.topSectSubText}> {user_email} </Text>
              </View>
          }


        </View>

      </View>



      <View>
        <Text style={styles.ordText}> My Orders </Text>
        <View style={styles.topDisplayLayer}>
            <View style={styles.topDisplay}>

              <TouchableOpacity onPress={() => navigation.navigate('CartRoute')} style={styles.ort}>
                <MiCon name="basket-outline" style={styles.ortIcon} />
                <Text style={styles.ortText}> Unpaid </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.ort} onPress={() => navigation.navigate('Processing')}>
                <MiCon name="airplane-clock" style={styles.ortIcon} />
                <Text style={styles.ortText}> Processing </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.ort} onPress={() => navigation.navigate('Shipped')}>
                <MiCon name="airplane-marker" style={styles.ortIcon} />
                <Text style={styles.ortText}> Shipped </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.ort} onPress={() => navigation.navigate('Reviewed')}>
                <MaCon name="rate-review" style={styles.ortIcon} />
                <Text style={styles.ortText}> Reviewed </Text>
              </TouchableOpacity>

            </View>
        </View>
      </View>

    <KeyboardAwareScrollView  contentContainerStyle={{ flexGrow: 1}}>

      <Text style={styles.acctText}> Account Settings</Text>

      <View style={styles.topDisplayLayer}>
        {settingsData.map( dto => (
          <TouchableOpacity onPress={() => navigation.navigate(dto.link)} key={dto.id} style={styles.setLay}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
              <Text style={[styles.st, { color: Color.text}]}>{dto.icon}</Text>
              <Text style={styles.setText}>{dto.name}</Text>
            </View>
            <MiCon name="chevron-right" style={styles.setIcon} />
          </TouchableOpacity> 
        ))}

      <TouchableOpacity style={styles.setLayyy} onPress={onShare}>
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <MaCon name="share" size={22} color={Color.text} />
            <Text style={styles.setText}> Share </Text>
          </View>
          <MiCon name="chevron-right" style={styles.setIcon} />
      </TouchableOpacity>

        <TouchableOpacity style={styles.setLayy} onPress={changeTheme}>
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <MiCon name="theme-light-dark" size={22} color={Color.text} />
            <Text style={styles.setText}> Dark mode </Text>
          </View>
          <Switch
            value={darkModeStat}
            onValueChange={changeTheme}
            trackColor={{ false: "#767577", true: '#687990' }}
            thumbColor={darkModeStat ? Color.text : "#f4f3f4"}
            ios_backgroundColor="#636262"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnLay}>
          <Text style={styles.btnText}> Log Out </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.lstText}> Pandopp </Text>
      <Text style={styles.lsttText}> All rights reserved @2022 </Text>


      </KeyboardAwareScrollView>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background
  },
  topSection: {
    backgroundColor: Color.background,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: '20@vs',
    paddingBottom: '10@vs',
    marginBottom: '1@vs',
    borderBottomLeftRadius: '30@vs',
    borderBottomRightRadius: '30@vs',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '20@vs',
    borderColor: '#efecec',
    borderWidth: 1
  },
  topSectText: {
    fontFamily: 'Gotham',
    fontSize: '18@vs',
    color: Color.text
  },
  barIcon: {
    fontSize: '40@vs',
    color: Color.background,
    backgroundColor: '#687990',
    paddingHorizontal: '5@vs',
    borderRadius: '50@vs',
    paddingVertical: '5@vs',
    marginRight: '5@vs'
  },
  barIconn: {
    fontSize: '25@vs',
    color: '#526176',
    marginRight: '3@vs'
  },
  topSectSubText: {
    fontFamily: 'Circular',
    fontSize: '13.5@vs',
    width: '200@vs',
    color: '#879bb7'
  },
  topDisplayLayer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topDisplay: {
    width: width - 20,
    borderRadius: '10@vs',
    backgroundColor: Color.background,
    marginTop: '5@vs',
    shadowColor: "#977676", 
    shadowOffset: { width: 0, height: 1 }, 
    shadowOpacity: 0.8, 
    shadowRadius: 3, 
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: '12@vs',
    paddingHorizontal: '5@vs'
  },
  ordText: {
    fontSize: '15@vs',
    color: Color.text,
    marginLeft: '15@vs',
    fontFamily: 'Gotham',
    marginTop: '15@vs'
  },
  topDisplayLayerr: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: '5@vs',
    flexWrap: 'wrap',
  },
  acctText: {
    fontSize: '15@vs',
    color: Color.text,
    fontFamily: 'Gotham',
    marginTop: '20@vs',
    marginLeft : '10@vs',
    marginBottom: '1@vs'
  },
  protLayer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '10@vs',
    borderWidth: 1,
    borderColor: '#687990',
    paddingHorizontal: '20@vs',
    paddingVertical: '5@vs',
    borderRadius: '40@vs'
  },
  protIcon: {
    color: '#687990',
    fontSize: '13@vs'
  },
  protText: {
    fontFamily: 'Gotham',
    fontSize: '12@vs',
    color: '#687990'
  },
  ort: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  ortIcon: {
    fontSize: '18@vs',
    color: '#687990'
  },
  ortText: {
    fontFamily: 'SFNS',
    fontSize: '10.2@vs',
    color: '#687990',
    marginTop: '1@vs'
  },
  setLay: {
    width: width - 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '15@vs',
    paddingVertical: '13.5@vs',
    shadowColor: "#bba2a2", 
    shadowOffset: { width: 0, height: 1 }, 
    shadowOpacity: 0.8, 
    shadowRadius: 3, 
    elevation: .8,
    backgroundColor: Color.background,
    marginVertical: '3@vs',
  },
  setLayy: {
    width: width - 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '15@vs',
    paddingVertical: '3@vs',
    shadowColor: "#bba2a2", 
    shadowOffset: { width: 0, height: 1 }, 
    shadowOpacity: 0.8, 
    shadowRadius: 3, 
    elevation: .8,
    backgroundColor: Color.background,
    marginVertical: '3@vs',
  },
  setLayyy: {
    width: width - 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '15@vs',
    paddingVertical: '12@vs',
    shadowColor: "#bba2a2", 
    shadowOffset: { width: 0, height: 1 }, 
    shadowOpacity: 0.8, 
    shadowRadius: 3, 
    elevation: .8,
    backgroundColor: Color.background,
    marginVertical: '3@vs',
  },
  setText: {
    fontFamily: 'SFNS',
    color: Color.text,
    fontSize: '12@vs',
    marginLeft: '6@vs'
  },
  setIcon: {
    fontSize: '15@vs',
    color: '#687990',

  },
  btnLay: {
    width: width / 1.1,
    backgroundColor: Color.matchUp,
    paddingVertical: '13@vs',
    marginVertical: '10@vs',
    borderRadius: '70@vs'
  },
  btnText: {
    color: Color.background,
    fontFamily: 'Gotham',
    fontSize: '13@vs',
    textAlign: 'center'
  },
  lstText: {
    textAlign: 'center',
    fontFamily: 'Gotham',
    fontSize: '15@vs',
    color: Color.text,
    marginTop: '5@vs'
  },
  lsttText: {
    textAlign: 'center',
    fontFamily: 'SFNS',
    fontSize: '11@vs',
    color: '#687990',
    marginTop: '2@vs',
    marginBottom: '5@vs'
  },
  st: {
    backgroundColor: '#f7f6f6',
    paddingHorizontal: '3@vs',
    borderRadius: '50@vs',
    paddingVertical: '3@vs'
  }
})

export default Profile;