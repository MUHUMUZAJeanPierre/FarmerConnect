import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  Pressable,
  ImageBackground,
  ScrollView,
} from "react-native";
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

import { TextInput } from "react-native-paper";
import InputText from "../../Components/InputText";
import { AntDesign } from "@expo/vector-icons";
import { Harvesting } from "./Harvesting";
import { collection, getDoc, getDocs, doc } from "firebase/firestore";
import { FIREBASE_DB } from "../../../FirebaseConfiguration";
// import Cart from "../Cart/Cart";
import { ThemeContext } from "../Context/ThemeContext";

function HomeCustomer({ navigation }) {

  const {
    harvestingData,
    selectedItems,
    addToSelectedItems,
    search,
    setSearch,
  } = useContext(ThemeContext);
console.log("harvestingData", harvestingData)
  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: "#FBF9F9",
        paddingTop: 50,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <InputText
          label=""
          underlineColor="transparent"
          placeholder="Search in here"
          onChangeText={(text) => setSearch(text)}
          style={{
            width: "82%",
            borderRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            // textColor: "white",
            backgroundColor: "whitesmoke",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 10,
          }}
          right={<TextInput.Icon icon="magnify" />}
          theme={{ colors: { primary: "red" } }}
        />
        <View
          style={{
            // backgroundColor: "#48742c",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 500,
            width: 55,
            height: 55,
            marginTop: 2,
            shadowOffset: { width: 0, height: 4 },
            // shadowOpacity: 0.2,
            // shadowRadius: 4,
            // elevation: 10,
          }}
        >
          <AntDesign name="shoppingcart" size={34} color="#48742c" />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          // backgroundColor: "white",
          gap: 95,
          marginTop: 13,
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 16,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Farm Connect Now
        </Text>
        <Text
          style={{
            color: "#48742c",
            fontSize: 15,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Farm Connect Now
        </Text>
      </View>
      <Pressable
        style={{
          marginTop: 15,
          gap: 10,
        }}
      >
        <FlatList
          data={harvestingData}
          horizontal
          showsHorizontalScrollIndicator={false}
          // keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                width: 68,
                height: 60,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#48742c",
                margin: 5,
              }}
            >
              <Image
                source={{ uri: item.harvest }}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "cover",
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          )}
        />
      </Pressable>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ borderStartColor: "red" }}
      >
        <View style={{ margin: 13 }}>
          <Text
            style={{ fontSize: 16, fontWeight: 500, fontStyle: "upperCase" }}
          >
            Imependekezwa
          </Text>
        </View>
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            flexWrap: "wrap",
            width: width,
            // height: height,
            marginBottom: 100,
          }}
          // onPress={console.log("dfdfdf")}
        >
          <FlatList
            data={harvestingData}
            keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
            numColumns={Math.floor(width / 180)}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: "white",
                  margin: 8,
                  width: 180,
                  borderRadius: 10,
                  marginBottom: 20,
                  elevation: 10,
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                }}
                
              >
                <Pressable onPress={() => navigation.navigate("Detail", item)}>
                  <ImageBackground
                    source={{ uri: item.harvest }}
                    imageStyle={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "cover",
                      borderRadius: 10,
                    }}
                    style={{
                      position: "relative",
                      borderRadius: 10,
                      overflow: "hidden",
                      backgroundColor: "white",
                      width: 180,
                      height: 170,
                    }}
                  >
                    <View
                      style={{
                        position: "absolute",
                        left: 120,
                        top: 10,
                        width: 40,
                        height: 40,
                        borderRadius: 25,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <AntDesign name="hearto" size={24} color="black" />
                    </View>
                  </ImageBackground>
                </Pressable>
                <Pressable  onPress={() => {addToSelectedItems(item)}}>
                  <View
                    style={{
                      backgroundColor: "white",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      gap: 40,
                      marginTop: 20,
                    }}
                  >
                    <Pressable>
                      <Text style={{ fontSize: 17 }}>{item.title}</Text>
                    </Pressable>
                    <Text style={{ fontSize: 15 }}>{item.description}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "space-evenly",
                      marginTop: 8,
                      gap: 40,
                      marginBottom: 10,
                      // backgroundColor:'red',
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 20, justifyContent: "center" }}>
                      {item.cost} $
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "green",
                        borderRadius: 50,
                        width: 35,
                        height: 35,
                      }}
                    >
                      <AntDesign name="shoppingcart" size={20} color="white" />
                    </View>
                  </View>
                  {/* <Cart selectedItems={selectedItems}/> */}
                </Pressable>
              </View>
            )}
          />
        </Pressable>
      </ScrollView>
    </View>
  );
}

export default HomeCustomer;

