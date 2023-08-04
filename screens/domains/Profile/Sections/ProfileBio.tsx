import { View, Text, StatusBar,  TextInput, TouchableOpacity, Dimensions } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../../constants/Colors';
import { ScaledSheet } from 'react-native-size-matters';
import MiCon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnCon from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Color = Colors.light;

const {width, height} = Dimensions.get('window');


const ProfileBio: FC = () => {

  const navigation = useNavigation();
    

  return (
    <View style={styles.container}>
      <View style={styles.topBarLayer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MiCon name="chevron-left" style={styles.barIcon} />
        </TouchableOpacity>
        <View style={styles.logoLayer}>
            <AnCon name="alipay-circle" style={styles.logo} />
            <Text style={styles.logoText}> @NODE_BLAST </Text>
        </View>
      </View>
      <View style={styles.bottomLayer}>

        <View style={styles.topBot}>
            {/* <Text style={styles.botText}> BIO-DATA </Text> */}
            <TouchableOpacity style={styles.botEditLayer}>
                <MiCon name="pencil" style={styles.editTopIcon} />
                <Text style={styles.editTopText}> Edit profile </Text>
            </TouchableOpacity>
        </View>

        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>

            <View style={styles.perLayer}>
                <Text style={styles.perTopText}> Personal Information </Text>

            <View style={styles.intt}>
                <View style={[styles.inputLayer, {  }]}>
                    <TextInput
                    placeholder="Enter your email address..."
                    style={styles.input}
                    value="solomonudumizi@gmail.com"
                    />
                    <View style={styles.absLay}>
                        <Text style={styles.absText}> Email </Text>
                    </View>
                </View>
            </View>

            <View style={styles.intt}>
                <View style={[styles.inputLayer, {  }]}>
                    <TextInput
                    placeholder="Enter your phone number..."
                    style={styles.input}
                    value="solomonudumizi@gmail.com"
                    />
                    <View style={styles.absLay}>
                        <Text style={styles.absText}> Phone number </Text>
                    </View>
                </View>
            </View>

            </View>

            <View style={styles.shipLayer}>
                <Text style={styles.shipTopText}> Shipping Information </Text>

            <View style={styles.intt}>
                <View style={[styles.inputLayer, {  }]}>
                    <TextInput
                    placeholder="Enter your country of residence..."
                    style={styles.input}
                    value="Nigeria"
                    />
                    <View style={styles.absLay}>
                        <Text style={styles.absText}> Country </Text>
                    </View>
                </View>
            </View>

            <View style={styles.intt}>
                <View style={[styles.inputLayer, {  }]}>
                    <TextInput
                    placeholder="Enter your phone number..."
                    style={styles.input}
                    value="Ondo"
                    />
                    <View style={styles.absLay}>
                        <Text style={styles.absText}> State of residence </Text>
                    </View>
                </View>
            </View>

            <View style={styles.intt}>
                <View style={[styles.inputLayer, {  }]}>
                    <TextInput
                    placeholder="Enter your country of residence..."
                    style={styles.input}
                    value="Akure"
                    />
                    <View style={styles.absLay}>
                        <Text style={styles.absText}> Locality </Text>
                    </View>
                </View>
            </View>

            <View style={styles.intt}>
                <View style={[styles.inputLayer, {  }]}>
                    <TextInput
                    placeholder="Enter your phone number..."
                    style={styles.input}
                    value="2nd Avenue, Millenium Road, Akure Ondo State"
                    />
                    <View style={styles.absLay}>
                        <Text style={styles.absText}> Shipping address </Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.btnLay}>
          <Text style={styles.btnText}> Save Changes</Text>
        </TouchableOpacity>

            </View>

        </KeyboardAwareScrollView>
      </View>
    </View>
  )
}

export default ProfileBio

const styles = ScaledSheet.create({
    container: {
        backgroundColor: Color.background,
        flex: 1,
    },
    topBarLayer: {
        backgroundColor: Color.background,
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: '10@vs',
        paddingBottom: '5@vs',
        marginBottom: '1@vs',
        flex: 0.3
    },
    bottomLayer: {
        flex: 1,
        backgroundColor: Color.background,
        shadowColor: "#977676", 
        shadowOffset: { width: 0, height: 1 }, 
        shadowOpacity: 0.8, 
        shadowRadius: 1, 
        elevation: 3,
        borderTopLeftRadius: '40@vs',
        borderTopRightRadius: '40@vs',
    },
    barIcon: {
        marginLeft: '10@vs',
        fontSize: '27@vs',
        color: Color.text,
    },
    logo: {
        fontSize: '80@vs',
        color: Color.text, 
    },
    logoLayer: {
        alignItems: 'center',
        marginVertical: '10@vs'
    },
    logoText: {
        fontFamily: 'Gotham',
        fontSize: '13.5@vs',
        marginVertical: '5@vs',
        color: Color.text
    },
    topBot: {
        width : width,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '20@vs',
        justifyContent: 'flex-end',
        paddingHorizontal: '20@vs'
    },
    botEditLayer: {
        justifyContent: 'center',
        width: 'auto',
        borderWidth: 1,
        paddingVertical: '3@vs',
        paddingHorizontal: '10@vs',
        borderRadius: '4@vs',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#a4aab2'
    },
    editTopIcon: {
        textAlign: 'center',
        fontSize: '12@vs',
        color: '#a4aab2',
    },
    editTopText: {
        textAlign: 'center',
        fontFamily: 'Circular',
        fontSize: '11@vs',
        color: '#a4aab2'
    },
    botText: {
        fontFamily: 'Gotham',
        fontSize: '17@vs',
        color: Color.text,
    },
    perLayer: {
        paddingHorizontal: '10@vs',
        marginVertical: '10@vs',
        width: width,
        alignItems: 'center'
    },
    shipLayer: {
        paddingHorizontal: '10@vs',
        marginVertical: '10@vs',
        width: width,
        alignItems: 'center'
    },
    perTopText: {
        fontFamily: 'Gotham',
        fontSize: '14@vs',
        color: Color.text,
        alignSelf: 'flex-start'
    },
    shipTopText: {
        fontFamily: 'Gotham',
        fontSize: '14@vs',
        color: Color.text,
        alignSelf: 'flex-start'
    },
    intt: {
        width: width,
        alignItems: 'center',
        marginVertical: '10@vs'
      },
      inputLayer: {
        position: 'relative',
        marginTop: '10@vs',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: '6@vs',
        width: width - 30,
        borderColor: '#eeeeee'
      },
      input: {
        width: width - 50,
        height: '43@vs',
        paddingHorizontal: '10@vs',
        fontFamily: 'Circular',
        position: 'relative',
        color: '#a49a9a'
      },
      inputIcon: {
        fontSize: '16@vs',
        color: '#98a3af',
        marginLeft: '5@vs'
      },
      absLay: {
        position: 'absolute',
        left: '10@vs',
        top: '50%',
        transform: [{
          translateY: -33
        }],
        zIndex: 100,
        backgroundColor: '#ffffff',
        paddingHorizontal: '5@vs'
      },
      absText: {
        fontFamily: 'Circular',
        color: Color.text,
        fontSize: '12@vs'
      },
      btnLay: {
        width: width - 30,
        backgroundColor: '#2e2f5b' ,
        marginVertical: '10@vs',
        borderRadius: '10@vs',
        paddingVertical: '13@vs'
      },
      btnText: {
        fontFamily: 'Circular',
        fontSize: '13@vs',
        color: '#fff',
        textAlign: 'center'
      },
});