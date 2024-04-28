import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, Dimensions, Image, Pressable } from "react-native";
import InputText from "../../Components/InputText";
import MyButton from "../../Components/MyButton";
import { MaterialIcons } from "@expo/vector-icons";
import { FIREBASE_AUTH,db } from "../../../FirebaseConfiguration";
const upload = require("../../../assets/Image/uploadd.png");
import { storage } from "../../../FirebaseConfiguration";
import { FIREBASE_DB } from "../../../FirebaseConfiguration";
import {
  launchImageLibraryAsync,
  requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

function PostFarmerSpecialist({navigation}) {
  const [harvest, setHarvest] = useState("https://imagetolink.com/ib/cF5LuxR0qn.png");
  const [uriLink, setUriLink] = useState("");
  const [title, setTitle] =useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost ] = useState('');


  const handlePost = async () => {
    try {
      const response = await addDoc(collection(FIREBASE_DB, 'farmerHarvest'), {
        title: title,
        description: description,
        cost: cost,
        harvest:harvest
      });

      const docId = response.id; 

      console.log("New document ID:", docId);
      navigation.navigate('Home', { docId: docId });
    } catch (error) {
      console.error(error);
    }
  };




  const handleUploadImage = async () => {
    try {
      await requestMediaLibraryPermissionsAsync();
      let result = await launchImageLibraryAsync({
        aspect: [1, 1],
        allowsEditing: true,
        quality: 1,
        allowsMultipleSelection: true,
      });
      if (!result.canceled) {
        console.log(result);
        setHarvest(result.assets[0].uri);
        saveImage(result.assets[0].uri);
      }
    } catch (error) {
        console.error(error);
    }
  };
  const saveImage = async (img) => {
    try {
      if (!img) {
        alert("image is required");
      } else {
        const timestamp = Date.now();
        const fileExtension = img.split(".").pop();
        var response = await fetch(img);
        var blob = await response.blob();

        const storagePath = `profile/${timestamp}`;
        console.log(storagePath);
        const metadata = {
          contentType: `image/jpeg`,
        };
        const imageRef = ref(storage, storagePath);
        const upload = await uploadBytes(imageRef, blob, metadata);
        console.log(upload);
        const url = await getDownloadURL(imageRef);
        setUriLink(url);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={{ height: height, width: width, backgroundColor: "white", paddingTop:20 }}>
      {/* <View
        style={{
          backgroundColor: "green",
          flexDirection: "row",
          gap: 100,
          height: 120,
          alignItems: "center",
          padding: 20,
          paddingTop: 30,
        }}
      >
        <AntDesign name="arrowleft" size={30} color="white" />
        <Text style={{ color: "white", fontSize: 24 }}>Profile</Text>
      </View> */}
      <View style={{ backgroundColor: "white", padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "500", color: "white" }}>
          UPLOAD PICS
        </Text>
        <Pressable
          onPress={() => {
            console.log('peggy')
            handleUploadImage();
          }}
          style={{
            backgroundColor: "white",
            width: 200,
            height: 200,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal:10,
            alignSelf:'center'
          }}
        >
          <Image
            source={{uri:harvest}}
            style={{
              // marginVertical: 0,
              width: "100%",
              height: "100%",
              resizeMode:'cover',
            }}
          />
        </Pressable>
        {/* <View style={{ backgroundColor:'red', width:200, height:100 }}>
          <Image source={upload}  />
        </View> */}
      </View>
      <View style={{ backgroundColor: "white", marginTop: 20, margin: 15 }}>
        <InputText
          label=""
          underlineColor="transparent"
          placeholderTextColor="gray"
          placeholder="title"
          theme={{ colors: { primary: "transparent" } }}
          value={title}
          onChangeText={(e)=>setTitle(e)}
          style={{
            width: "98%",
            borderRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderWidth: 1,
            marginVertical: 20,
            textColor: "white",
            backgroundColor: "white",
          }}
        />
        <InputText
          label=""
          underlineColor="transparent"
          placeholderTextColor='gray'
          placeholder="cost"
          value={description}
          onChangeText={setDescription}
          theme={{ colors: { primary: "transparent" } }}
          style={{
            width: "98%",
            borderRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderWidth: 1,
            marginVertical: 20,
            textColor: "white",
            backgroundColor: "white",
          }}
        />
        <InputText
          label=""
          underlineColor="transparent"
          placeholder="Text  description here..."
          placeholderTextColor="gray"
          value={cost}
          onChangeText={setCost}
          style={{
            width: "98%",
            height:200,
            borderRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderWidth: 1,
            marginVertical: 20,
            textColor: "gray",
            backgroundColor: "white",
          }}
          theme={{ colors: { primary: "transparent" } }}
        />
      </View>
      <View>
        <MyButton title="Submit" onPress={()=>handlePost()} style={{ height: 55, margin: 18 }} />
      </View>
    </View>
  );
}

export default PostFarmerSpecialist;



