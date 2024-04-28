import React, { useContext, useEffect, useState } from "react";
import { Dimensions, View, Image, Text, Pressable } from "react-native";
import { Button } from "react-native-paper";
import MyButton from "../../Components/MyButton";
const ImageOne = require("../../../assets/splash.png");
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { getItemAsync } from "expo-secure-store";
import { getDoc, doc } from "firebase/firestore";
import { FIREBASE_DB } from "../../../FirebaseConfiguration";
import { ThemeContext } from "../Context/ThemeContext";

function ProfileFarmerSpecialist({ navigation }) {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [profile, setProfile] = useState(
    "https://tse4.mm.bing.net/th?id=OIP.iPTS9UwAQrbSQxRyeU-Q0AHaHa&pid=Api&P=0&h=220"
  );
  const [userId, setUserId] = useState(null);
  const { us, userData } = useContext(ThemeContext);

  useEffect(async () => {
    const a = await getItemAsync("userDataOne");
    try {
      setUserId(us);
      console.log("userId FG", a);
      getFirestoreDocument(a)
    
    } catch (err) {
      console.error(err);
    }
  }, []);
 
  const getFirestoreDocument = async (a) => {
    const docRef = doc(FIREBASE_DB, "users", us);

    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const documentData = docSnap.data();
        console.log("Document data:", documentData);
        setEmail(documentData.registerEmail);
        setFullName(documentData.registerFullName);
        setProfile(documentData.registerProfile);
        console.log('userData from Profile: ',userData);
        return documentData;
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error fetching document:", error);
      throw error;
    }
  };

  // getItemAsync("userEmail").then((data) => {
  //   console.log("userId", data);
  //   setEmail(data);
  // });

  return (
    <View style={{ height: height, width: width, backgroundColor: "white" }}>
      <View
        style={{
          backgroundColor: "green",
          height: 270,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Pressable style={{ margin: 50 }}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </Pressable>
        <View
          style={{
            height: 140,
            width: 140,
            backgroundColor: "white",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 250,
            marginTop: 60,
            borderWidth: 4,
            borderColor: "gray",
          }}
        >
          <Image
            source={{ uri: profile }}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
              borderRadius: 250,
            }}
          />
        </View>
      </View>
      <View style={{ height: height, width: width, backgroundColor: "white" }}>
        <View
          style={{
            backgroundColor: "white",
            paddingHorizontal: "30%",
            // justifyContent: "center",
            // alignItems: "center",
            paddingVertical: 10,
            width: "100%",
            marginTop: 80,
          }}
        >
          <View style={{ flexDirection: "row", paddingBottom: 8 }}>
            <Text style={{ fontSize: 18, fontWeight: "400" }}>FullName:</Text>
            <Text style={{ fontSize: 18, fontWeight: "400" }}>{fullName}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 18, fontWeight: "400" }}>Email:</Text>
            <Text style={{ fontSize: 18, fontWeight: "400" }}>{email}</Text>
          </View>
        </View>
        <MyButton
          title="Edit Profile"
          style={{ height: "6%", width: "50%", alignSelf: "center" }}
          onPress={() => {
            navigation.navigate("EditProfile", userId);
          }}
        />
        <View style={{ margin: 5, backgroundColor: "white" }}>
          <View
            style={{
              backgroundColor: "white",
              justifyContent: "space-around",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              gap: 190,
              marginVertical: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 20,
              }}
            >
              <Ionicons
                name="language-outline"
                size={24}
                color="black"
                style={{ fontSize: 25 }}
              />
              <Text style={{ fontSize: 20 }}>Language</Text>
            </View>
            <View>
              <Entypo
                name="chevron-small-right"
                size={24}
                color="black"
                style={{ fontSize: 25 }}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              justifyContent: "space-around",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              gap: 190,
              marginVertical: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 20,
              }}
            >
              <MaterialIcons name="dark-mode" size={24} color="black" />
              <Text style={{ fontSize: 20 }}>DarkMode</Text>
            </View>
            <View>
              <Entypo
                name="chevron-small-right"
                size={24}
                color="black"
                style={{ fontSize: 25 }}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              justifyContent: "space-around",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              gap: 190,
              marginVertical: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 20,
              }}
            >
              <AntDesign name="wifi" size={24} color="black" />
              <Text style={{ fontSize: 20 }}>DarkMode</Text>
            </View>
            <View>
              <Entypo
                name="chevron-small-right"
                size={24}
                color="black"
                style={{ fontSize: 25 }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ProfileFarmerSpecialist;
