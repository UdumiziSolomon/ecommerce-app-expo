import { View, Text, StatusBar } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../constants/Colors';
import { ScaledSheet } from 'react-native-size-matters';
import MiCon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnCon from 'react-native-vector-icons/AntDesign';
import InCon from 'react-native-vector-icons/Ionicons';


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Display } from './';

const Color = Colors.light;

const Category: FC = () => {

  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={Color.background} barStyle={'dark-content'}  />

      <View style={styles.topBarLayer}>
          <AnCon name="alipay-circle" style={styles.barIcon} />
          <InCon name="ios-grid" style={styles.barIconn} />
      </View>

      <View style={styles.topBarLayerr}>
        <Text style={styles.catTopText}> Product Categories </Text>
        {/* <Text style={styles.catTopText}> Categories </Text> */}
        <Text style={styles.catTopSubText}>Select a category to choose products from and add them to your cart or place an instant buy...  </Text>
      </View>

      <KeyboardAwareScrollView>
        <Display />
      </KeyboardAwareScrollView>

    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Color.background,
    flex: 1,
  },
  topBarLayer: {
    backgroundColor: Color.background,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: '10@vs',
    paddingBottom: '5@vs',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1@vs',
  },
  barIcon: {
    marginLeft: '10@vs',
    fontSize: '25@vs',
    color: Color.matchUp,
    paddingTop: '5@vs'
  },
  barIconn: {
    marginRight: '10@vs',
    fontSize: '17@vs',
    color: Color.text,
    paddingTop: '5@vs'

  },
  topBarLayerr: {
    backgroundColor: Color.background,
    paddingHorizontal: '10@vs',
    paddingBottom: '5@vs',
    marginBottom: '1@vs',
    marginTop: '10@vs'
  },
  catTopText: {
    fontFamily: 'Gotham',
    fontSize: '18@vs',
    marginHorizontal: '1@vs',
    color: Color.text
  },
  catTopSubText: {
    fontFamily: 'Circular',
    fontSize: '11@vs',
    marginHorizontal: '7@vs',
    marginVertical: '5@vs',
    color: '#98afcf'
  },
})

export default Category;