import { View, Text, TextInput, Dimensions, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { FC } from 'react';
import Colors from '../../../../constants/Colors';
import { ScaledSheet } from 'react-native-size-matters';
import FouCon from 'react-native-vector-icons/Foundation';
import { superDealsData } from './data';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack/';


const { width, height } = Dimensions.get('window');
const Color = Colors.light;

export type HomeRouteParamList = {
    Home: undefined,
    ProductDisplay: undefined
}

const SuperDeals: FC = () => {
  const navigation = useNavigation<StackNavigationProp<HomeRouteParamList>>();

  const ProductDisplayFunc = () => {
    navigation.navigate('ProductDisplay');
  }

  return (
    <View style={styles.container}>

      <View style={styles.topTextLayer}>
        <Text style={styles.topText}>Super</Text>
        <Text style={styles.topTextt}> Deals</Text>
      </View>

        <FlatList 
            data={superDealsData}
            renderItem={({ item, index }) => (
                <TouchableOpacity 
                    onPress={ProductDisplayFunc} 
                    style={styles.alphaLayer}>

                <View style={styles.productLayer}>
                    <Text style={styles.cate}>{item.category}</Text>

                    <Image source={item.image} style={styles.itemImage} resizeMode="contain" />
                    <Text 
                        ellipsizeMode='tail' numberOfLines={3}
                        style={styles.productName}>
                    {item.name}</Text>
                    <Text style={styles.productDesc}>{item.desc}</Text>
                    <View style={styles.psol}>
                        <Text style={styles.productPrice}>{item.price}</Text>
                        <View style={styles.sold}>
                            <FouCon name="burst-sale" style={styles.saleIcon} />
                            <Text style={styles.soldText}> {item.purchased}</Text>
                        </View>
                    </View>
                </View>
                </TouchableOpacity>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
        />

    </View>
  )
}

export default SuperDeals

const styles = ScaledSheet.create({
    container: {
        marginTop: '10@vs',
        paddingHorizontal: '10@vs',
        backgroundColor: Color.background
    },
    topText: {
        color: Color.matchUp,
        fontFamily: 'Gotham',
        fontSize: '15@vs',
    },
    topTextt: {
        color: Color.text,
        fontFamily: 'Gotham',
        fontSize: '15@vs',
    },
    alphaLayer: {
        borderRadius: '20@vs',
        marginHorizontal: '5@vs',
        marginVertical: '10@vs',
        shadowColor: "#977676", 
        shadowOffset: { width: 0, height: 1 }, 
        shadowOpacity: 0.8, 
        shadowRadius: 1, 
        elevation: 3,
        backgroundColor: Color.background,
        justifyContent: 'center'
    },
    topTextLayer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: '10@vs'
    },
    itemImage: {
        width: '75@vs',
        height: '75@vs',
        alignSelf: 'center'
    },
    productLayer: {
        width: width / 2,
        paddingHorizontal: '5@vs',
        paddingVertical: '10@vs',
        borderRaius: '30@vs',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    productName: {
        fontFamily: 'SFNS',
        fontSize: '11@vs',
        textAlign: 'center',
        color: Color.text,
        fontWeight: '2000'
    },
    productDesc: {
        fontFamily: 'SFNS',
        fontSize: '9.5@vs',
        textAlign: 'center',
        marginTop:'4@vs',
        width: '140@vs',
        color: '#98afcf',
        alignSelf: 'center'
    },
    productPrice: {
        fontFamily: 'Gotham',
        fontSize: '15@vs',
        marginVertical: '5@vs',
        color: Color.text
    },
    cate: {
        backgroundColor: '#eee',
        alignSelf: 'flex-end',
        marginRight: '10@vs',
        paddingVertical: '4@vs',
        paddingHorizontal: '15@vs',
        borderRadius: '10@vs',
        fontFamily: 'Circular',
        fontSize: '9@vs',
        color: '#acc1de'
    },
    saleIcon: {
        color: Color.matchUp,
        fontSize: '14@vs'
    },
    psol: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '10@vs',
        marginTop: '5@vs'
    },
    soldText: {
        fontFamily: 'Gotham',
        fontSize: '12@vs',
        color: '#76859a'
    },
    sold: {
        flexDirection: 'row',
        alignItems: 'center', 
    }
})