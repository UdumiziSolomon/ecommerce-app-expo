import { Text, View, Dimensions, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';


const Slides = ({ item }: any) => {
    const { width } = Dimensions.get('window');

    return (
        <View style={styles.container}>

            <View style={styles.onboardImageLay}>
                <Image source={item.image} style={[styles.onboardImage, { width : width - 90}]} resizeMode="contain" />
            </View>

           <View style={[styles.onboardLayout, { width }]}>
                <Text style={styles.title}>{item.title} </Text>
                <Text style={styles.subject}>{item.description} </Text>
           </View>

        </View>
    )
}



export default Slides;

const styles = ScaledSheet.create({
    container: {
        paddingTop: '45@vs',
        flex: .9,
    },
    onboardLayout: {
        paddingHorizontal: '3@vs',
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: '10@vs'
    },
    onboardImageLay: {
        flex: .7,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50@vs'
    },
   subject: {
       fontFamily: 'SFNS',
       fontSize: '12.5@vs',
       paddingHorizontal: '14@vs',
       color: '#98afcf',
       textAlign: 'center',
       marginTop: '20@vs'
   },
   title: {
       fontFamily: "Gotham",
       fontSize: '19@vs',
       marginTop: '60@vs',
       color: '#fff',
       paddingHorizontal: '10@vs',
       textAlign: 'center'
   },
   onboardImage: {
       resizeMode: 'contain',
   }
});