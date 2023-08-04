import { View, Text, TextInput, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { FC } from 'react';
import Colors from '../../../../constants/Colors';
import { ScaledSheet } from 'react-native-size-matters';
import { categoriesData } from './data';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack/';


type CategoryStackParamList = {
    CategoryRoute: undefined;
    Tech: undefined;
}


const { width, height } = Dimensions.get('window');
const Color = Colors.light;

const Categories = () => {
    const navigation = useNavigation<StackNavigationProp<CategoryStackParamList>>();
  return (
    <View style={styles.container}>
        <View style={styles.topLayer}>
            <Text style={styles.topText}> Categories</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Category')}>
                <Text style={styles.topRightText}> See All </Text>
            </TouchableOpacity>
        </View>

        <ScrollView>
            <View style={styles.all}>
                {categoriesData.map(item => (
                    <TouchableOpacity onPress={() => navigation.navigate('CategoryRoute', { screen: item.title})} key={item.id} style={styles.catLayer}>
                        <Text style={styles.catIcon}>{item.icon}</Text>
                        <Text style={styles.catTitle}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    </View>
  )
}

export default Categories

const styles = ScaledSheet.create({
    container: {
        marginTop: '15@vs',
        backgroundColor: Color.background  
    },
    topLayer: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginLeft: '5@vs',
        justifyContent: 'space-between',
        paddingHorizontal: '10@vs'
    },
    topText: {
        color: Color.text,
        fontFamily: 'Gotham',
        fontSize: '14@vs',
    },
    topRightText: {
        color: Color.matchUp,
        fontSize: '12@vs',
        fontFamily: 'Gotham',
    },
    all: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width,
        marginVertical: '10@vs',
        justifyContent: 'center',
        alignItems: 'center'
    },
    catLayer: {
        backgroundColor: '#f6f6f6',
        margin: '5@vs',
        borderRadius: '10@vs',
        paddingHorizontal: '18@vs',
        paddingVertical: '6@vs',
    },
    catIcon: {
        color: Color.colorIn,
        textAlign: 'center',
    },
    catTitle: {
        color: Color.colorIn,
        fontFamily: 'Circular',
        fontSize: '8.5@vs',
        textAlign: 'center',
        marginTop: '3@vs'
    }
});