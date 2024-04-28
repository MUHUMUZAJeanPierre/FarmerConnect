import React, { useEffect, useState, useContext } from "react";
import {
  View,
  FlatList,
  Text,
  Image,
  Pressable,
  Dimensions,
  ScrollView
} from "react-native";
import InputText from "../../Components/InputText";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { collection, getDocs } from "firebase/firestore";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../../FirebaseConfiguration";

// import { ScrollView } from "react-native-gesture-handler";
import { ThemeContext } from "../Context/ThemeContext";
// import { useNavigation } from "@react-navigation/native";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
function SearchHarvestCustomer() {
    // const navigation = useNavigation()
  const {
    harvestingData,
    search,
    setSearch,
  } = useContext(ThemeContext);
  

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          backgroundColor: "white",
          gap: 10,
          paddingTop: 80,
        }}
      >
        <InputText
          label=""
          underlineColor="transparent"
          placeholder="Search in here"
          style={{
            width: "75%",
            borderRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            textColor: "white",
            backgroundColor: "whitesmoke",
          }}
          right={<TextInput.Icon icon="magnify" />}
          theme={{ colors: { primary: "transparent" } }}
          onChangeText={(text) => setSearchData(text)}
        />
        <View
          style={{
            backgroundColor: "#48742c",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 500,
            width: 50,
            height: 50,
            marginTop: 5,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowColor: "black",
            shadowRadius: 5,
            elevation: 10,
          }}
        >
          <AntDesign name="plus" color="white" size={20} />
        </View>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            // height: height,
            width: width,
            paddingTop: 10,
            backgroundColor: "white",
          }}
        >
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={harvestingData}
            renderItem={({ item }) => (
              <Pressable
                style={{
                  backgroundColor: "#ffff",
                  margin: 14,
                  height: 140,
                  width:'90%',
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  borderRadius: 10,
                  shadowColor: "black",
                  shadowOffset: {
                    width: 2,
                    height: 2,
                  },
                  shadowOpacity: 0.55,
                  shadowRadius: 3.84,
                  elevation: 3,
                }}
                // onPress={() => navigation.navigate("Detail", item)}
              >
                <View
                  style={{
                    width: "45%",
                    height: 120,
                    alignItems: "center ",
                    borderWidth: 2,
                    borderColor: "green",
                    borderRadius: 10,
                  }}
                >
                  <Image
                    source={{ uri: item.harvest }}
                    style={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "cover",
                      borderRadius: 8,
                    }}
                  />
                </View>
                <View style={{}}>
                  <Text style={{ fontSize: 18 }}>{item.title}</Text>
                  <Text style={{ color: "#808080" }}>{item.description}</Text>
                  <Text>{item.cost} Rwf</Text>
                  <Pressable
                    style={{
                      backgroundColor: "green",
                      width: 80,
                      height: 38,
                      borderRadius: 5,
                      justifyContent: "center",
                      alignItems: "center",
                      marginVertical: 8,
                      marginLeft: 40,
                    }}
                  >
                    <Text style={{ color: "white" }}>add Cart</Text>
                  </Pressable>
                </View>
              </Pressable>
            )}
          />
        </View>
      </ScrollView>
    </>
  );
}

export default SearchHarvestCustomer;

