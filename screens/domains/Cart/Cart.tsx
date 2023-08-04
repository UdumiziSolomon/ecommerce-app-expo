import { View, Text, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../constants/Colors';
import { ScaledSheet, verticalScale as VS } from 'react-native-size-matters';
import MiCon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoCon from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack/';
import {RootTabParamList} from '../../../navigation/types/RootStack';
import { Checkout, CartedProducts } from './';
import { cartedProducts } from './Sections/data';
import {CartUpdate} from '../../../components';



import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Color = Colors.light;
const { width, height } = Dimensions.get('window');

const Cart: FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootTabParamList>>();
  
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={Color.background} barStyle={'dark-content'}  />

      <View style={styles.topLayer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MiCon name="chevron-left" style={styles.barIcon} />
        </TouchableOpacity>
        <Text style={styles.topTextt}> Cart  </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>

          <CartUpdate />

          <TouchableOpacity>
            <IoCon name="ios-trash-bin" style={styles.barIcontn} />
          </TouchableOpacity>
        </View>
      </View>


      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: VS(5) }}>    
        <View style={styles.cartedLayer}>
          {cartedProducts.map(item => (
              <CartedProducts 
                key={item.id} 
                desc={item.desc} 
                title={item.title}
                image={item.image}
                price={item.price}
              />
            )) }
        </View>
      </KeyboardAwareScrollView>

        <Checkout />
    </View>
  )
}

export default Cart;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Color.background,
    flex: 1,
  },
  topLayer: {
    backgroundColor: Color.background,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: '5@vs',
    paddingBottom: '5@vs',
    marginBottom: '1@vs',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  barIcon: {
    marginLeft: '10@vs',
    fontSize: '30@vs',
    color: Color.text,
    paddingTop: '5@vs'
  },
  barIconn: {
    marginRight: '10@vs',
    fontSize: '23@vs',
    color: Color.matchUp,
    paddingTop: '5@vs'
  },
  barIcontn: {
    marginRight: '10@vs',
    fontSize: '20@vs',
    color: Color.text,
    paddingTop: '5@vs',
    marginLeft: '10@vs'
  },
  topText: {
    fontFamily: 'Gotham',
    fontSize: '15@vs',
    marginHorizontal: '1@vs',
    color: Color.text,
    textAlign: 'center'
  },
  scLayer: {
    paddingHorizontal: '10@vs',
    marginTop: '3@vs',
    paddingVertical: '3@vs'
  },
  topTextt : {
    fontFamily: 'Gotham',
    fontSize: '18@vs',
    marginHorizontal: '1@vs',
    color: Color.text
  },
  cartedLayer: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  }
});