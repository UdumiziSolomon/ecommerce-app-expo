import { View, Text, TextInput, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { FC } from 'react';
import Colors from '../../../../constants/Colors';
import { ScaledSheet } from 'react-native-size-matters';
import FouCon from 'react-native-vector-icons/Foundation';
import { popularData } from './data';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack/';

import {HomeRouteParamList} from './SuperDeals';


const { width, height } = Dimensions.get('window');
const Color = Colors.light;

const Popular = () => {

  const navigation = useNavigation<StackNavigationProp<HomeRouteParamList>>();

  const ProductDisplayFunc = () => {
    navigation.navigate('ProductDisplay');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.topText}> Explore Popular</Text>

      <ScrollView>
        <View style={styles.alphaPop}>
        { popularData.map(dto => (
              <TouchableOpacity 
                onPress={ProductDisplayFunc} 
                key={dto.id} 
                style={styles.popLayer}>
                  <Text style={styles.cate}>{dto.category}</Text>
                  <Image source={dto.image} style={styles.itemImage} resizeMode="contain" />
                  <Text 
                    ellipsizeMode='tail' 
                    numberOfLines={3}
                    style={styles.productName}>
                    {dto.name}</Text>

                    <Text style={styles.productDesc}>{dto.desc}</Text>

                    <View style={styles.psol}>
                      <Text style={styles.productPrice}>{dto.price}</Text>
                      <View style={styles.sold}>
                        <FouCon name="burst-sale" style={styles.saleIcon} />
                        <Text style={styles.soldText}> {dto.purchased}</Text>
                      </View>
                    </View>

              </TouchableOpacity>      
        ))}
        </View>
      </ScrollView>

    </View>
  )
}

export default Popular

const styles = ScaledSheet.create({
  container: {
    marginTop: '5@vs',
    paddingHorizontal: '2@vs',
    backgroundColor: Color.background
  },
  topText: {
    color: Color.text,
    fontFamily: 'Gotham',
    fontSize: '14@vs',
    marginLeft: '10@vs'
  },
  alphaPop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: '10@vs',
    justifyContent: 'center',
    alignItems: 'center'
  },
  popLayer: {
    borderRadius: '15@vs',
    marginHorizontal: '2@vs',
    marginVertical: '5@vs',
    backgroundColor: Color.background,
    width: width / 2.1,
    paddingHorizontal: '10@vs',
    shadowColor: "#977676", 
    shadowOffset: { width: 0, height: 1 }, 
    shadowOpacity: 0.8, 
    shadowRadius: 1, 
    elevation: 3,
    justifyContent: 'center'
  },
  itemImage: {
    width: '75@vs',
    height: '75@vs',
    alignSelf: 'center'
  },
  productName: {
    fontFamily: 'SFNS',
    fontSize: '11@vs',
    marginLeft: '2@vs',
    color: Color.text,
  },
  productPrice: {
      fontFamily: 'Gotham',
      fontSize: '12@vs',
      marginVertical: '6@vs',
      color: Color.text,
  },
  cate: {
    backgroundColor: '#eee',
    alignSelf: 'center',
    marginTop: '5@vs',
    paddingVertical: '3@vs',
    paddingHorizontal: '12@vs',
    borderRadius: '10@vs',
    fontFamily: 'Circular',
    fontSize: '9@vs',
    color: '#acc1de'
},
  psol: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '10@vs',
    marginTop: '2@vs'
  },
  soldText: {
      fontFamily: 'Gotham',
      fontSize: '11@vs',
      color: '#657182'
  },
  sold: {
      flexDirection: 'row',
      alignItems: 'center', 
  },
  saleIcon: {
    color: Color.matchUp,
    fontSize: '16@vs'
  },
  productDesc: {
    fontFamily: 'Circular',
    fontSize: '10@vs',
    marginTop:'2@vs',
    width: '140@vs',
    color: '#98afcf',
    paddingRight: '10@vs'
  }
});