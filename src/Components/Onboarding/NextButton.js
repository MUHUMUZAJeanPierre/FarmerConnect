import React, { useEffect, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Animated } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import Slides from "./Slides"; // Assuming this contains your slides data

function NextButton({ percentage, scrollToNext }) {
  const size = 99;
  const strokeWidth = 1.2; // Increased stroke width for better visibility
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progressAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loopAnimation = Animated.loop(
      Animated.timing(progressAnimation, {
        toValue: 100,
        duration: 1000, // Adjust duration as needed
        useNativeDriver: false, // Not using native driver for SVG animations
      })
    );
    loopAnimation.start();
    return () => loopAnimation.stop();
  }, []);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size} backgroundColor="transparent">
        <G rotation="-90" origin={center}>
          {/* Background Circle */}
          <Circle
            stroke="#E6E7E8"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          {/* Progress Circle */}
          <Circle
            stroke="#4BA26A"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={progressAnimation.interpolate({
              inputRange: [0, 100],
              outputRange: [circumference, 0],
            })}
          />
        </G>
      </Svg>
      <TouchableOpacity
        onPress={scrollToNext}
        style={styles.button}
        activeOpacity={0.6}
      >
        <AntDesign name="arrowright" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 / 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
  },
  button: {
    position: "absolute",
    backgroundColor: "#4BA26A",
    borderRadius: 100,
    padding: 20,
  },
});

export default NextButton;
