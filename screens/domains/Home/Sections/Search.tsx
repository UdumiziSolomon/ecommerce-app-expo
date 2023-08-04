import { View, Text, TextInput, Dimensions, TouchableOpacity, ScrollView, Image, Pressable } from 'react-native';
import React, { FC, useState } from 'react';
import Colors from '../../../../constants/Colors';
import { ScaledSheet } from 'react-native-size-matters';
import MiCon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeCon from 'react-native-vector-icons/Feather';
import FouCon from 'react-native-vector-icons/Foundation';

import { popularData } from './data';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack/';



const { width, height } = Dimensions.get('window');
const Color = Colors.light;


const Search: FC = () => {

    const [queryLen, setQueryLen] = useState<any>('');
    const [query, setQuery] = useState('');


  const navigation = useNavigation<StackNavigationProp<any>>();

    const clear = () => {
        setQueryLen('');
        setQuery('');
    }

    const searchFunc = (val: any) => {
        setQuery(val);
        setQueryLen(val);
    }

    const ProductDisplayFunc = () => {
        navigation.navigate('ProductDisplay');
    }

    const sort = () => {
        console.log('Sort')
    }
  return (
    <View style={styles.searchTopLayer}>
      <View style={styles.searchLayer}>
        <View style={styles.inputParent}>
            <FeCon name="search" style={styles.inputLeftIcon} />
            <TextInput
                placeholder='Search for any product...'
                placeholderTextColor={'#98afcf'}
                style={styles.inputLayer}
                onChangeText={(val: any) => searchFunc(val)}
                value={query}
            />
             <MiCon onPress={clear} name="close" style={[styles.inputRightIcon, { color: queryLen.length > 0 ? '#0f294e' : '#f4f4f4' }]} />
        </View>
        <TouchableOpacity style={styles.sortLayer} onPress={sort}>
            <MiCon name="sort" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

        
        <View>
        { queryLen.length > 0 && (
            <View style={styles.resultLayer}>
                <Text style={styles.resultLayerTopText}> Search Results </Text>
                    <ScrollView>
                    <View style={styles.alphaPop}>
                        { popularData.filter(item => 
                            item.name.toLowerCase().includes(query.toLowerCase()) || 
                            item.category.toLowerCase().includes(query.toLowerCase())
                        ).map(dto => (
                            <TouchableOpacity 
                                onPress={ProductDisplayFunc} 
                                key={dto.id} 
                                style={styles.popLayer}>
                                <Text style={styles.cate}>{dto.category}</Text>
                                <Image source={dto.image} style={styles.itemImage} resizeMode="contain" />
                                <Text 
                                    ellipsizeMode='tail' numberOfLines={3}
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
        </View>
    </View>
  )
}

const styles = ScaledSheet.create({
    searchTopLayer: {
        marginTop: '7@vs',
    },
    searchLayer: {
        flexDirection: 'row',
        width: width,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '10@vs',
        marginBottom: '5@vs',
    },
    inputParent: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        paddingHorizontal: '5@vs',
        paddingVertical: '10@vs',
        borderRadius: '10@vs',
        // width: width - 20
    },
    inputLeftIcon: {
        paddingLeft: '3@vs',
        fontSize: '15@vs',
        marginRight: '4@vs',
        color: '#98afcf'
    },
    inputRightIcon: {
        fontSize: '16@vs',
        paddingRight: '5@vs',
        paddingLeft: '5@vs',
    },
    searchIcon: {
        fontSize: '20@vs',
        color: Color.text
    },
    sortLayer: {
        marginRight: '5@vs',
        marginLeft: '6@vs'

    },
    inputLayer: {
        fontFamily: 'SFNS',
        width: width - 115,
        paddingLeft: '5@vs',
        fontSize: '12@vs'
    },
    resultLayer: {
        height: height,
        paddingHorizontal: '5@vs'
    },
    resultLayerTopText: {
        fontFamily: 'Gotham',
        fontSize: '18@vs',
        marginTop: '10@vs',
        color: Color.text,
        paddingHorizontal: '20@vs',
        marginBottom: '10@vs'
    },
    alphaPop: {
        flexDirection: 'column',
        marginVertical: '10@vs',
        justifyContent: 'center',
        alignItems: 'center',
    },
      popLayer: {
        marginBottom: '10@vs',
        borderRadius: '15@vs',
        marginHorizontal: '2@vs',
        marginVertical: '5@vs',
        backgroundColor: Color.background,
        width: width / 1.2,
        paddingHorizontal: '10@vs',
        shadowColor: "#977676", 
        shadowOffset: { width: 0, height: 1 }, 
        shadowOpacity: 0.8, 
        shadowRadius: 1, 
        elevation: 3,
        justifyContent: 'center'
      },
      itemImage: {
        width: '110@vs',
        height: '110@vs',
        alignSelf: 'center'
      },
      productName: {
        fontFamily: 'Gotham',
        fontSize: '14@vs',
        marginLeft: '2@vs',
        color: Color.text,
        textAlign: 'center'
      },
      productPrice: {
          fontFamily: 'Gotham',
          fontSize: '15@vs',
          marginVertical: '6@vs',
          color: Color.text,
      },
      cate: {
        backgroundColor: '#eee',
        alignSelf: 'flex-start',
        marginTop: '5@vs',
        paddingVertical: '3@vs',
        paddingHorizontal: '10@vs',
        borderRadius: '10@vs',
        fontFamily: 'Gotham',
        fontSize: '10@vs',
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
        fontSize: '11@vs',
        marginTop:'2@vs',
        width: width - 52,
        color: '#727f90',
        paddingRight: '10@vs',
        textAlign: 'center'
      }
});

export default Search;