import React, { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";

function InputText({
  label,
  onChangeText,
  theme,
  color,
  textColor,
  placeholderTextColor,
  value,
  onPress,
  forceTextInputFocus,
  secureTextEntry,
  style,
  left,
  right,
  size,
  placeholder,
  underlineColor
}) {
  return (
    <>
      <TextInput
        label={label}
        theme={theme}
        color={color}
        underlineColor={underlineColor}
        placeholder={placeholder}
        textColor={textColor}
        placeholderTextColor={placeholderTextColor}
        value={value}
        size={size} 
        outCompleteType="email"
        onChangeText={onChangeText}
        style={[{
          marginTop: 2,
          backgroundColor: "transparent",
        }, style]}
        
        onPress={onPress}
        forceTextInputFocus={forceTextInputFocus}
        secureTextEntry={secureTextEntry}
        left={left}
        right={right}
      />
      {/* <TextInput
        label={label}
        theme={theme}
        color={color}
        textColor={textColor}
        placeholderTextColor={placeholderTextColor} 
        outCompleteType="password"
        value={value}
        onchangeText={onchangeText}
        style={{
          marginTop: 10,
          backgroundColor: "transparent",
        }}
        onPress={onPress}
        forceTextInputFocus={forceTextInputFocus}
        secureTextEntry={secureTextEntry}
        left={<TextInput.Icon icon="lock" />}
        right={<TextInput.Icon icon="eye" />}
      /> */}
    </>
  );
}

export default InputText;
