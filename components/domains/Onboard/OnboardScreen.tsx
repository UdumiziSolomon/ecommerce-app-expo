import React, { useState, useRef } from 'react'
import { StatusBar, FlatList, Dimensions, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScaledSheet , verticalScale} from 'react-native-size-matters';
import MiCon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackNavigationProp } from '@react-navigation/stack/';
import { HomeParamList } from '../../../navigation/domains/app/HomeStack';




// get data
import { OnboardData }  from './OnboardData';

import Slides from './Slides';

const OnboardScreen = () => {
    const navigation = useNavigation<StackNavigationProp<HomeParamList>>();

    const  { width } = Dimensions.get('window');
    const [currIndex, setCurrIndex ] = useState(0);

    const ref = useRef<any>();

      // get current idex of screen onSlide 
    const updateCurrentSlideIndex = (e: any) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x 
        const currentIndex = Math.round( contentOffsetX / width );
        setCurrIndex(currentIndex);
    };

    // move between slides
    const nextSlide = () => {
        const nextSlideIndex = currIndex + 1 ;
        if( nextSlideIndex != OnboardData.length) {
            const offset = nextSlideIndex * width ;
            ref?.current?.scrollToOffset({ offset });
            setCurrIndex(nextSlideIndex);
        }
    }

     const skipToApp = () => {
        navigation.replace('MainTab');
    }


    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='#222b45'  />
            <FlatList 
                pagingEnabled
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                data={OnboardData}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => <Slides key={item.id} 
                    item={item} 
                />}
            />

            {/* Indicators */}
            <View 
                style={[ styles.gen, { marginVertical: verticalScale(30) }]}>
                { OnboardData.map((_, index) => (
                <View key={index} style={[
                    styles.indicator,
                    currIndex == index && {
                    backgroundColor: '#505581'
                }]} />
            ))}
            </View>

            <View style={styles.indicatorLayout}>

            { currIndex === 3 
                ?
                <View style={styles.gen}>
                   <TouchableOpacity 
                    onPress={skipToApp} 
                    style={[styles.getStartedLay, { width: 'auto'}]}>
                        {/* <Text style={styles.getStarted}> Get Started </Text> */}
                        <MiCon name="cursor-default-click-outline" size={27} color="#fff" />
                   </TouchableOpacity>
                   </View>
                :

               <View style={styles.genn}>

                 <TouchableOpacity 
                    onPress={skipToApp} 
                    style={[styles.getStartedLayyt, { width: 'auto' }]}>
                        <Text style={styles.getStartedd}> Skip </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={nextSlide} 
                    style={[styles.getStartedLayyf, { width: 'auto' }]}>
                        <Text style={styles.getStartedd}> Next </Text>
                </TouchableOpacity>
               </View>
            }
                
          </View>

        </View>
    )
}

export default OnboardScreen;

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222b45'
    },
     indicator: {
        height: '10@vs', 
        width: '10@vs',
        borderRadius: '10@vs',
        backgroundColor: '#ddd',
        marginHorizontal: '5@vs',
   },
   indicatorLayout: {
       paddingHorizontal: '10@vs',
       flex: .2,
   },
      indicatorIcon: {
       backgroundColor: '#336699',
       color: '#fff',
       paddingVertical: '8@vs',
       borderRadius: '30@vs',
       paddingHorizontal: '8@vs'  
   },
   getStarted: {
      fontFamily: 'Gotham',
       fontSize: '13@vs',
       paddingHorizontal: '5@vs' ,
       color: '#fff', 
       textAlign: 'center',
       marginTop: '1@vs'
   },
   getStartedLay: {
       paddingHorizontal: '25@vs',
       paddingVertical: '11@vs',
       borderTopRightRadius: '40@vs',
       borderTopLeftRadius: '30@vs',
       borderBottomRightRadius: '60@vs',
       borderBottomLeftRadius: '50@vs',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#336699'
   },
   getStartedd: {
    fontFamily: 'Gotham',
     fontSize: '13@vs',
     paddingHorizontal: '5@vs' ,
     color: '#fff', 
     textAlign: 'center'
 },
 getStartedLayy: {
     paddingHorizontal: '15@vs',
     paddingVertical: '11@vs',
     borderRadius: '10@vs',
     backgroundColor: '#336699'
 },
 getStartedLayyt: {
    paddingHorizontal: '15@vs',
    paddingVertical: '11@vs',
    borderTopRightRadius: '40@vs',
    borderTopLeftRadius: '30@vs',
    borderBottomRightRadius: '60@vs',
    borderBottomLeftRadius: '40@vs',
    backgroundColor: '#505581'
},
getStartedLayyf: {
    paddingHorizontal: '15@vs',
    paddingVertical: '11@vs',
    borderTopRightRadius: '80@vs',
    borderTopLeftRadius: '60@vs',
    borderBottomRightRadius: '60@vs',
    borderBottomLeftRadius: '40@vs',
    backgroundColor: '#336699'
},
 gen: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
 },
 genn: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: '20@vs'
 }
});