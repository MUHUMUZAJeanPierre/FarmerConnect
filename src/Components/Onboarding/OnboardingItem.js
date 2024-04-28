import React from "react";
import { View, Text, Image, useWindowDimensions, StyleSheet } from "react-native";

function OnboardingItem({ item }) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode:"cover"}]}
      />
      <View style={{flex:0.25, textAlign:'center'}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    flex: 0.4,
    width:5,
    justifyContent:'center'
  },
  title:{
    fontWeight: '500',
    fontSize: 28,
    marginTop: 30,
    color:'black',
    textAlign: 'start',
    // backgroundColor:'blue',
    marginHorizontal:'10%',
    textAlign:'center'
    // paddingHorizontal: 10,
    // backgroundColor:'red'
  },
  description:{
    fontWeight: '300',
    color:'gray',
    fontSize: 14,
    textAlign: 'start',
    marginVertical: '3%',
    marginHorizontal:'14%',
    paddingHorizontal: 10,
    // backgroundColor:'red'
  }
});

export default OnboardingItem;
