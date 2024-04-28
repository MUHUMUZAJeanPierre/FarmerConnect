import React from "react";
import { Button, Pressable, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";

export default function MyButton({ title, onPress, style, isLoading }) {
  return (
    <TouchableOpacity style={[styles.button, style, { backgroundColor: isLoading ? '#4BA26A80' : '#4BA26A' }]} onPress={onPress} disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <Text style={{ color: 'white', fontSize: 18 }}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    height: "12%",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "800",
  },
});
