import { View, Text,  Dimensions, Image, Pressable, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../../constants/Colors';
import { ScaledSheet, verticalScale as VS } from 'react-native-size-matters';
import IoCon from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';


const Color = Colors.light;
const { width, height } = Dimensions.get('window');

type CartRouteParam = {
    Cart: undefined;
    CartedDisplay: undefined;
    CartedProducts: undefined;
}

const CartedProducts: FC = props => {

    const navigation = useNavigation<StackNavigationProp<CartRouteParam>>();

    const { title, desc, image, price } = props ;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.prod}  onPress={() => navigation.navigate('CartedDisplay')}>
        <Image source={image} style={styles.img} resizeMode="contain" />
        <View style={styles.leftIt}>
            <Text style={styles.cartTitle}>{title}</Text>
            <Text style={styles.cartDesc} ellipsizeMode="tail" numberOfLines={2} >{desc}</Text>
            <Text style={styles.cartPrice}>{price}</Text>
        </View>
      </TouchableOpacity>

        {/* counter */}
        <View style={styles.counterLayer}>
            <View style={styles.counter}>
            <TouchableOpacity>
              <Text style={styles.subText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.numText}>2</Text>
            <TouchableOpacity>
              <Text style={styles.addText}>+</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <IoCon name="trash-bin" style={styles.bin} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CartedProducts

const styles = ScaledSheet.create({
    container: {
        width: width - 20,
        height: 'auto',
        shadowColor: "#977676", 
        shadowOffset: { width: 0, height: 1 }, 
        shadowOpacity: 0.8, 
        shadowRadius: 1, 
        elevation: 4,
        backgroundColor: Color.background,
        marginVertical: '5@vs',
        borderRadius: '20@vs',
        paddingVertical: '12@vs',
        paddingHorizontal: '15@vs'
    },
    img: {
        width: '80@vs',
        height: '80@vs'
    },
    prod: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cartTitle: {
        fontFamily: 'Gotham',
        fontSize: '14@vs',
        color: Color.text
    },
    cartDesc: {
        fontFamily: 'Circular',
        fontSize: '11.3@vs',
        color: '#98afcf',
        width: '190@vs',
        marginTop: '4@vs'
    },
    cartPrice: {
        fontFamily: 'Gotham',
        fontSize: '15@vs',
        color: Color.text,
        marginTop: '5@vs'
    },
    counter: {
        backgroundColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginRight: '50@vs',
        paddingHorizontal: '10@vs',
        paddingVertical: '5@vs',
        borderRadius: '10@vs',
    },
    leftIt: {
        marginLeft: '3@vs'
    },
    counterLayer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
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
    bin: {
        fontSize: '14@vs',
        color: Color.text
    }
})