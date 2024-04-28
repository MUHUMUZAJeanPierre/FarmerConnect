import {
  View,
  Text,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
const ImageOne = require("../../../assets/Image/authanticationImage.png");
const facebook = require("../../../assets/Image/facebook (1).png");
const google = require("../../../assets/Image/google.png");
import InputText from "../InputText";
import MyButton from "../MyButton";
import { TextInput } from "react-native-paper";
import SocialMedia from "./SocialMedia";
import { ThemeContext } from "../../Screen/Context/ThemeContext";
// import { ScrollView } from "react-native-gesture-handler";
import RNPickerSelect from "react-native-picker-select";
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
import { useNavigation } from "@react-navigation/native";
import { confirmPasswordReset } from "firebase/auth";

const SignUp = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassWord, setShowPassWord] = useState(false);
  const [showPassWordTwo, setShowPassWordTwo] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dropdownItems = [
    { label: "Farmer specialist", value: "farmerSpecialist" },
    { label: "Farmer", value: "farmer" },
    { label: "Customer", value: "customer" },
  ];
  // function to update how to see password show passwords
  const handleToggleViewPassWord = () => {
    setShowPassWord((prevShowPassWord) => !prevShowPassWord);
  }
  const handleToggleViewPassWordTwo = () => {
    setShowPassWordTwo((prevShowPassWordTwo) => !prevShowPassWordTwo);
  }

  const {
    signUp,
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    validForm,
    fullName,
    setFullName,
    userType,
    setUserType,
  } = useContext(ThemeContext)

  const handleSignUp = async () => {
    try {
      setIsLoading(true)
      if (validForm() && password === confirmPassword) {
        const response = await signUp(email, password, fullName, userType);
        setIsLoading(false)
        // navigation.navigate("Login")
        console.log(response);
      }
    } catch (error) {
      console.error(error.message);
      setIsLoading(false);
    }
  }

  return (
    <ScrollView>
      <View
        style={{
          height: height,
          width: width,
          backgroundColor: "white",
          paddingTop: 50,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            alignItems: "center",
            width: "40%",
            alignSelf: "center",
          }}
        >
          <Image source={ImageOne} />
        </View>
        <View style={{ backgroundColor: "white", marginHorizontal: 15, }}>
          <Text style={{ fontWeight: 500, fontSize: 22 }}>Sign Up</Text>
          <Text
            style={{
              color: "#BFBBBB",
              paddingLeft: 15,
              fontSize: 15,
              marginTop: 3,

            }}
          >
            create an account to continue
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            backgroundColor: "white",
            height: "50%",
          }}
        >
          <InputText
            label="Full Name"
            theme={{ colors: { primary: "#BFBBBB" } }}
            value={fullName}
            onChangeText={setFullName}
            left={<TextInput.Icon icon="account-circle" />}
          />
          <InputText
            theme={{ colors: { primary: "#BFBBBB" } }}
            label="Email"
            left={<TextInput.Icon icon="email" />}
            value={email}
            onChangeText={setEmail}
          />
          {emailError ? (
            <Text style={{ color: "red", fontSize: 12, marginHorizontal: 60 }}>
              {emailError}
            </Text>
          ) : null}
          <InputText
            label="Password"
            secureTextEntry={!showPassWord}
            theme={{ colors: { primary: "#BFBBBB" } }}
            left={<TextInput.Icon icon="lock" />}
            right={<TextInput.Icon icon={showPassWord ? "eye-off" : "eye"} onPress={handleToggleViewPassWord} />}
            value={password}
            onChangeText={setPassword}
          />
          {passwordError ? (
            <Text style={{ color: "red", fontSize: 12, marginHorizontal: 60 }}>
              {passwordError}
            </Text>
          ) : null}
          <InputText
            label="Confirm password"
            theme={{ colors: { primary: "#BFBBBB" } }}
            secureTextEntry={!showPassWordTwo}
            left={<TextInput.Icon icon="lock" />}
            right={<TextInput.Icon icon={showPassWordTwo ? "eye-off" : "eye"} onPress={handleToggleViewPassWordTwo} />}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <View style={{ borderBottomWidth: 1, borderBottomColor: "gray" }}>
            <RNPickerSelect
              value={userType}
              onChangeText={setUserType}
              placeholder={{ label: "Select...", value: null }}
              items={dropdownItems}
              onValueChange={(value) => { setUserType(value) }}
              style={{
                inputIOS: {
                  fontSize: 16,
                  paddingVertical: 12,
                  paddingHorizontal: 10,
                  borderWidth: 2,
                  borderColor: "red",
                  borderRadius: 4,
                  color: "black",
                  paddingRight: 30,
                  marginBottom: 10,
                  backgroundColor: "red",
                  borderStyle: "dotted",
                },
                inputAndroid: {
                  fontSize: 16,
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                  borderWidth: 0.5,
                  borderColor: "purple",
                  borderRadius: 8,
                  color: "black",
                  paddingRight: 30,
                  marginBottom: 10,
                  borderWidth: 10,
                  borderBottomColor: "gray",
                  borderBottomWidth: 10,
                  // backgroundColor: 'purple',
                  borderStyle: "dashed",
                  // margin:10
                },
              }}
            />
          </View>
          <MyButton
            onPress={() => {
              console.log("");
              handleSignUp();
              navigation.navigate("Login");
              // console.log('navigation.navigate')
            }}
            title="Sign up"
            isLoading={isLoading}
            style={{
              backgroundColor: "#4BA26A",
              height: "12%",
              // marginTop: 3,
              borderRadius: 8,
              justifyContent: "center",
              marginTop: 25,
            }}
          />
          {/* </View> */}
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            backgroundColor: "whit",
            // marginVertical: 10,
          }}
        >
          <View
            style={{
              //  backgroundColor:'green',
              borderColor: "#BFBBBB",
              borderWidth: 0.2,
              margin: 18,
              width: 100,
            }}
          ></View>
          <Text style={{ color: "black", marginTop: 5, fontSize: 18 }}>
            or sign in with
          </Text>
          <View
            style={{
              borderColor: "#BFBBBB",
              borderWidth: 0.2,
              margin: 18,
              width: 100,
            }}
          ></View>
        </View>
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
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "white",
            margin: 10,
            gap: 20,
          }}
        >
          <Text style={{ color: "#BFBBBB" }}>Already have an account?</Text>
          <Pressable
            onPress={() => {
              // console.log("Already have an account");
              navigation.navigate("Login");
            }}
          >
            <Text style={{ color: "#4BA26A", fontWeight: "800" }}>Sign In</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
