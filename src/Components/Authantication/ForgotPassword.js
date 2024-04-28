import React, { useState } from "react";
import InputText from "../InputText";
import { Image, View, Dimensions, Text, Pressable } from "react-native";
import MyButton from "../MyButton";
import { TextInput } from "react-native-paper";
const resetPassWord = require("../../../assets/Image/resetPassword.png");
import { FIREBASE_AUTH } from "../../../FirebaseConfiguration";
import { sendPasswordResetEmail } from "firebase/auth";

const auth = FIREBASE_AUTH;
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

function ForgotPassword() {
  const [email, setEmail] = useState(" ");

  const handleForget = async () => {
    try {
        if (!email) {
          console.error("Email address is required.");
          return;
        }
    
        await sendPasswordResetEmail(FIREBASE_AUTH, email); // Pass email as argument
        console.log("Password reset email sent.");
      } catch (error) {
        console.error("Error sending password reset email:", error);
      }
    }

  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: "white",
        paddingTop: 120,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={resetPassWord} />
      </View>
      <View
        style={{ backgroundColor: "white", paddingVertical: 40, margin: 10 }}
      >
        <Text style={{ fontWeight: "500", fontSize: 30 }}>Forgot Password</Text>
        <Text
          style={{
            color: "#BFBBBB",
            fontWeight: "400",
            paddingTop: 10,
            fontSize: 15,
          }}
        >
          Enter the email address you used when you
        </Text>
        <Text style={{ color: "#BFBBBB", fontWeight: "400", fontSize: 15 }}>
          Joined and we'll send you instruction to
        </Text>
        <Text style={{ color: "#BFBBBB", fontWeight: "400", fontSize: 15 }}>
          reset your password.
        </Text>
      </View>
      <View style={{ margin: 10, backgroundColor: "white", marginTop: 10 }}>
        <InputText
          placeholder="email"
          right={<TextInput.Icon icon="email" />}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <MyButton
        title="Send Link"
        onPress={() => {
            console.log('peggy')
          handleForget();
        }}
        style={{
          backgroundColor: "#4BA26A",
          height: " 7%",
          marginVertical: 10,
          borderRadius: 8,
          justifyContent: "center",
          margin: 10,
          marginTop: 60,
        }}
      />
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          gap: 80,
          justifyContent: "center",
          marginTop: 100,
        }}
      >
        <Text>Having Problem?</Text>
        <Pressable>
          <Text style={{ color: "#4BA26A", fontWeight: 700 }}>Send Again</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default ForgotPassword;
