import { View, Text, TextInput, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { FC } from 'react';
import Colors from '../../../../constants/Colors';
import { ScaledSheet } from 'react-native-size-matters';
import FouCon from 'react-native-vector-icons/Foundation';
import { categoriesData, topCategoryData  } from './data';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');
const Color = Colors.light;

const Display = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

        <Text style={styles.topText}>Picks</Text>

      <View style={styles.catWrapper}>
        { topCategoryData.map(item => (
            <TouchableOpacity onPress={() => navigation.navigate(item.title)} key={item.id} style={styles.catLayy}>
                <Text style={styles.catIconn}>{item.icon}</Text>
                <Text style={styles.catTitlee}>{item.title}</Text>
            </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.topText}>All Categories</Text>

      <View style={styles.catWrapper}>
        { categoriesData.map(item => (
            <TouchableOpacity onPress={() => navigation.navigate(item.title)} key={item.id} style={styles.catLay}>
                <Text style={styles.catIcon}>{item.icon}</Text>
                <Text style={styles.catTitle}>{item.title}</Text>
            </TouchableOpacity>
        ))}
      </View>

    </View>
  )
}

export default Display;

const styles = ScaledSheet.create({
    container: {
        marginTop: '15@vs',
        backgroundColor: Color.background  
    },
    topText: {
        color: Color.text,
        fontFamily: 'Gotham',
        fontSize: '15@vs',
        marginLeft: '20@vs',
        marginTop: '10@vs'
    },
    catWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width,
        marginVertical: '5@vs',
        justifyContent: 'center',
        alignItems: 'center'
    },
    catLay: {
        marginVertical: '10@vs',
        marginHorizontal: '20@vs',
        justifyContent: 'center'
    },
    catLayy: {
        marginVertical: '5@vs',
        marginHorizontal: '10@vs',
        justifyContent: 'center'
    },
    catIcon: {
        textAlign: 'center',
        backgroundColor: '#eee',
        color: Color.colorIn,
        paddingHorizontal: '10@vs',
        paddingVertical: '10@vs',
        borderRadius: '50@vs',
    },
    catIconn: {
        textAlign: 'center',
        backgroundColor: '#eee',
        color: Color.colorIn,
        paddingHorizontal: '15@vs',
        paddingVertical: '10@vs',
        borderRadius: '10@vs',
        fontSize: '20@vs'
    },
    catTitle: {
        fontFamily: 'Circular',
        fontSize: '10@vs',
        color: Color.text,
        textAlign: 'center',
        marginTop: '4@vs'
    },
    catTitlee: {
        fontFamily: 'Circular',
        fontSize: '9@vs',
        color: Color.text,
        textAlign: 'center',
        marginTop: '4@vs'
    }
})