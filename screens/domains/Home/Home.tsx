import { View, Text, StatusBar,  Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../constants/Colors';
import { ScaledSheet, verticalScale as VS , vs} from 'react-native-size-matters';
import MiCon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnCon from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {CartUpdate} from '../../../components';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootTabParamList} from '../../../navigation/types/RootStack';

// SECTION COMPONENTS
import { Search, SuperDeals, Categories, Popular }  from './';

const Color = Colors.light;
const profilePhoto = require('../../../assets/images/face.png');

const Home: FC = () => {

  const navigation = useNavigation<StackNavigationProp<RootTabParamList | any>>();

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={Color.background} barStyle={'dark-content'}  />

      <View style={styles.topBarLayer}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center'}}>
          <AnCon name="alipay-circle" style={styles.barIcon} />
          <Text style={{ fontFamily: 'SFNS', fontSize: vs(11)}}> Alipay </Text>
        </TouchableOpacity>

        <View style={styles.leftTopLayer}>
          <TouchableOpacity onPress={() => navigation.navigate('Cart', { screen: 'CartedDisplay' })}>
            <CartUpdate />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => navigation.navigate('Profile', { screen: 'ProfileBio' })}>
            <Image source={profilePhoto} style={styles.imagePhoto} />
          </TouchableOpacity> */}
        </View>

      </View>
      {/* <Text style={styles.productTopText}> Explore </Text>
      <Text style={styles.productTopText}> Our Products </Text> */}

      <View>
        <Search />
      </View>

      <KeyboardAwareScrollView>
        <SuperDeals />
        <Categories />
        <Popular />
      </KeyboardAwareScrollView>


    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Color.background,
    flex: 1,
    paddingHorizontal: '1@vs'
  },
  topBarLayer: {
    backgroundColor: Color.background,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: '10@vs',
    paddingBottom: '5@vs',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '3@vs'
  },
  productTopText: {
    fontFamily: 'Gotham',
    fontSize: '18@vs',
    marginHorizontal: '10@vs',
    marginVertical: '1@vs',
    color: Color.text
  },
  imagePhoto: {
    width: '28@vs',
    height: '28@vs',
    borderRadius: '28@vs',
    borderColor: '#98afcf',
    borderWidth: 1,
    marginLeft: '5@vs'
  },
  leftTopLayer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: vs(10)
  },
  barIcon: {
    marginLeft: '10@vs',
    fontSize: '24@vs',
    color: Color.matchUp
  }
})

export default Home;