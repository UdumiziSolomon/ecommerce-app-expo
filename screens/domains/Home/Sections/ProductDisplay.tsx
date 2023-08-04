import { View, Text, TouchableOpacity, Dimensions, Image, Pressable, StatusBar, FlatList } from 'react-native';
import React, { FC, useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../../constants/Colors';
import { ScaledSheet, verticalScale as VS } from 'react-native-size-matters';
import MiCon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnCon from 'react-native-vector-icons/AntDesign';
import FoCon from 'react-native-vector-icons/Fontisto';
import {reviewData, imageData, lineOne, lineTwo } from './data';
import { StackNavigationProp } from '@react-navigation/stack/';
import SelectDropdown from 'react-native-select-dropdown';
import { CartUpdate } from '../../../../components';

const sizeData = ['S', 'M', 'L', 'XL', 'XXL'];
const colorData = ["BLACK", "BLUE", "WHITE", "TEAL", "YELLOW"];

const toBeAdded = {
  id: 1,
  title: 'Laptop Stand',
  desc: 'A stand for your laptop'
}



import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { GlobalContext } from '../../../../context/store/Provider';
  
const Color = Colors.light ;
const { width, height } = Dimensions.get('window');

const ProductDisplay: FC = () => {

  const navigation = useNavigation();
  const { cartState, cartDispatch } = useContext(GlobalContext);

  const [size, setSize] = useState('SIZE');
  const [color, setColor] = useState('COLOR');

  const [currIndex, setCurrIndex ] = useState(0);

  // get current idex of screen onSlide 
  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x 
    const currentIndex = Math.round( contentOffsetX / width );
    setCurrIndex(currentIndex);
};

  const addItemToCart = (item: {}) =>  {
    cartDispatch({ type: 'ADD_ITEM', payload: item});
  } 



  return (
    <View style={styles.container}>
      <View style={styles.topLayer}>
        <View style={styles.carnav}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MiCon name="chevron-left" style={styles.topIcon} />
          </TouchableOpacity>
          
          <CartUpdate />

        </View>

        {/* Image Carousel */}
          <FlatList 
            pagingEnabled
            onMomentumScrollEnd={updateCurrentSlideIndex}
            data={imageData}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item, index }) => (
              <Image key={index} source={item.image} style={styles.inIma} resizeMode="contain" />
            )}
          />
          <View style={styles.in}>
            {
              imageData.map((item, index) => (
                <View key={index} style={[styles.indicator, 
                  currIndex == index && {
                    backgroundColor: Color.text
                }
                ]} />
              ))
            }
          </View>

      </View>

      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.productLayer}>
          <Text style={styles.cate}> Gadget </Text>
        <Text style={styles.productTitle}> M16 New generation Drone pack </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width, marginTop: 10 }}>
          <Text style={styles.productPrice}> $200 </Text>
          <View style={styles.counter}>
            <TouchableOpacity>
              <Text style={styles.subText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.numText}>2</Text>
            <TouchableOpacity>
              <Text style={styles.addText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={{ justifyContent: 'center'}}>
          <Text style={styles.specs}> SPECIFICATIONS </Text>

          <View style={styles.specLayer}>

          <SelectDropdown 
            data={sizeData}
            onSelect={(selectedItem) => {
              setSize(selectedItem)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              return item
            }}
            renderCustomizedButtonChild={() => (
              <View style={styles.specSubLayer}>
                <Text style={styles.speText}> {size} </Text>
                  <MiCon name="chevron-down" style={styles.speIcon} />
              </View>
            )}
            buttonStyle={{ backgroundColor: '#fff'}}
            dropdownIconPosition="right"
            rowTextStyle={{
              fontFamily: 'Gotham',
              fontSize: VS(10),
              color: Color.text
            }}
            dropdownStyle={{
              borderRadius: VS(20)
            }}
          />

          <SelectDropdown 
            data={colorData}
            onSelect={(selectedItem, index) => {
              setColor(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              return item
            }}
            renderCustomizedButtonChild={() => (
              <View style={styles.specSubLayer}>
                <Text style={styles.speText}> {color} </Text>
                  <MiCon name="chevron-down" style={styles.speIcon} />
              </View>
            )}
            buttonStyle={{ backgroundColor: '#fff'}}
            dropdownIconPosition="right"
            rowTextStyle={{
              fontFamily: 'Gotham',
              fontSize: VS(10),
              color: Color.text
            }}
            dropdownStyle={{
              borderRadius: VS(20)
            }}
          />

          </View>

        </View>

        <View style={{ paddingHorizontal: VS(5)}}>
          <Text style={styles.desc}> Description </Text>
          <Text style={styles.productSubTitle}>{lineOne}</Text>
          <Text style={styles.productSubTitle}>{lineTwo}</Text>
        </View>

        <View style={{ paddingHorizontal: VS(10)}}>
          <View style={styles.commLayer}>
            <FoCon name="comments" style={styles.commIcon} />
            <Text style={styles.comm}> Customer's Review </Text>
          </View>

          {/* Reviews */}
          { reviewData.map( item => (
            <View style={styles.revLayer} key={item.id}>
              <AnCon name="alipay-circle" style={styles.revIcon}  />
              <View style={styles.revTopL}>
                <View style={styles.revTop}>
                  <Text style={styles.revName}> {item.name}</Text>
                  <Text style={styles.revCoun}> {item.country} </Text>
                </View>
                <Text style={styles.revRev}> {item.review} </Text>
              </View>
            </View>
          ))}


        </View>

        </View>
      </KeyboardAwareScrollView>

      <View style={styles.bottom}>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        {/* <MiCon name="wallet-outline" style={styles.bottomIcon} /> */}
        <Text style={styles.bottomSubText}>$200 </Text> 

  

        </View>
        <View style={styles.botx}>
        <TouchableOpacity>
          <Text style={styles.bottomTextt}> BUY NOW </Text> 
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addItemToCart(toBeAdded)}>
            <Text style={styles.bottomText}> ADD TO CART </Text> 
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProductDisplay

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background
  },
  topLayer: {
    height: '250@vs',
    backgroundColor: Color.background,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: '5@vs',
  },
  topIcon: {
    color: Color.text,
    fontSize: '30@vs',
  },
  carnav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '10@vs'
  },
  indicator: {
    height: '6@vs', 
    width: '6@vs',
    borderRadius: '6@vs',
    backgroundColor: '#ddd',
    marginHorizontal: '5@vs',
  },
  inIma: {
    width: width,
    height: '150@vs',
    alignSelf: 'center'
  },
  in: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '10@vs'
  },
  bottom: {
    height: 'auto',
    width: width,
    backgroundColor: Color.text,
    borderTopLeftRadius: '20@vs',
    borderTopRightRadius: '20@vs',
    // alignItems: 'center',
    paddingVertical: '10@vs'
  },
  botx: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width,
    paddingHorizontal: '25@vs',
    marginTop: '7@vs'

  },
  bottomText: {
    fontFamily: 'Gotham',
    fontSize: '12@vs',
    color: Color.background,
    backgroundColor: Color.matchUp,
    paddingVertical: '7@vs',
    paddingHorizontal: '25@vs',
    borderRadius: '10@vs'
  },
  bottomTextt: {
    fontFamily: 'Gotham',
    fontSize: '12@vs',
    color: Color.background,
    borderColor: Color.background,
    paddingVertical: '7@vs',
    paddingHorizontal: '30@vs',
    borderRadius: '10@vs',
    borderWidth: 1
  },
  bottomSubText: {
    fontFamily: 'Gotham',
    fontSize: '20@vs',
    marginLeft: '30@vs',
    color: Color.background,
  },
  bottomIcon: {
    color: Color.background,
    fontSize: '20@vs',
    marginLeft: '30@vs'
  },
  cate: {
    backgroundColor: '#ede9e9',
    alignSelf: 'flex-start',
    marginLeft: '10@vs',
    paddingVertical: '4@vs',
    paddingHorizontal: '15@vs',
    borderRadius: '5@vs',
    fontFamily: 'Gotham',
    fontSize: '10@vs',
    color: '#687990',
    marginVertical: '10@vs'
  },
  productTitle: {
    fontFamily: 'Gotham',
    fontSize: '16@vs',
    color: Color.text,
    marginLeft: '5@vs'
  },
  productPrice: {
    fontFamily: 'Gotham',
    fontSize: '19@vs',
    marginVertical: '4@vs',
    color: Color.text,
    marginLeft: '5@vs'
  },
  productLayer: {
    // paddingHorizontal: '10@vs'
  },
  productSubTitle: {
    fontFamily: 'Circular',
    fontSize: '12.5@vs',
    color: '#586373',
    marginVertical: '4@vs',
    paddingHorizontal: '5@vs'
  },
  desc: {
    fontFamily: 'Gotham',
    fontSize: '13@vs',
    color: '#3b4b62',
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
    paddingBottom: '3@vs',
    marginTop: '5@vs'
  },
  comm: {
    fontFamily: 'Gotham',
    fontSize: '15@vs',
    color: Color.text,
  },
  commLayer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '6@vs',
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
    marginTop: '20@vs'
  },
  commIcon: {
    fontSize: '17@vs',
    color: Color.text,
    marginRight: '5@vs'
  },
  revLayer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '6@vs',
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  revTopL: {
    marginVertical: '10@vs'
  },
  revName: {
    fontFamily: 'Gotham',
    color: Color.text,
    fontSize: '12@vs'
  },
  revTop: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  revCoun: {
    backgroundColor: '#ede9e9',
    marginLeft: '5@vs',
    paddingVertical: '4@vs',
    paddingHorizontal: '15@vs',
    borderRadius: '5@vs',
    fontFamily: 'Gotham',
    fontSize: '10@vs',
    color: '#687990',
  },
  revRev: {
    fontFamily: 'Circular',
    color: Color.text,
    fontSize: '12@vs',
    marginVertical: '2@vs'
  },
  revIcon: {
    fontSize: '30@vs',
    marginRight: '3@vs',
    color: Color.text
  },
  specs: {
    fontFamily: 'Gotham',
    fontSize: '13@vs',
    color: '#3b4b62',
    paddingBottom: '3@vs',
    marginTop: '10@vs',
    marginLeft: '5@vs',
  },
  specLayer: {
    flexDirection: 'row',
    width: width,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  specSubLayer: {
    flexDirection: 'row',
    width: width / 2.5,
    borderWidth: 1,
    paddingVertical: '2@vs',
    borderRadius: '4@vs',
    borderColor: '#687990',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  speText: {
    fontFamily: 'Gotham',
    color: Color.text
  },
  speIcon: {
    fontSize: '20@vs'
  },
  counter: {
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: '10@vs',
    paddingHorizontal: '10@vs',
    paddingVertical: '5@vs',
    borderRadius: '10@vs',
},
subText: {
    fontFamily: 'Gotham',
    fontSize: '15@vs',
    color: Color.text,
    marginHorizontal: '10@vs'
},
numText: {
    fontFamily: 'Gotham',
    fontSize: '16@vs',
    color: Color.text,
    marginHorizontal: '10@vs'
},
addText: {
    fontFamily: 'Gotham',
    fontSize: '15@vs',
    color: Color.text,
    marginHorizontal: '10@vs'
},
})