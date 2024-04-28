import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  TouchableOpacity, View, Image, StyleSheet, Dimensions } from 'react-native';
const splashi = require('../../assets/Image/splashTwo.png');

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width
const Splash = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('Onboarding')} style={{backgroundColor:'#4BA26A',}}>
                <Image source={splashi} resizeMode='cover' style={{}} />
            </TouchableOpacity>
            {/* <StatusBar color='white'/>  */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4BA26A',
        alignItems: 'center',
        justifyContent: 'center',
        height: height,
        width: width,

    },

})
export default Splash;
