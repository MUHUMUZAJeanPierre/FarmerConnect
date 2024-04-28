import React from 'react';
import { View, Image } from 'react-native';
const facebook = require('../../../assets/Image/facebook (1).png')
const google = require('../../../assets/Image/google.png')

function SocialMedia({style}) {
  return (
    <View
        style={{
          backgroundColor: "white",
          height: 53,
          // width:'80%',
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 60,
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#3B5998",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={facebook} style={{ width: "50%", height: "50%" }} />
        </View>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: "white",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={google} style={{ width: "100%", height: "100%" }} />
        </View>
      </View>
  )
}

export default SocialMedia
