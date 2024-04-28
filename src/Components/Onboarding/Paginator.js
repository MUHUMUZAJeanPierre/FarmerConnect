import React from "react";
import { View, StyleSheet, Animated, useWindowDimensions } from "react-native";

function Paginator({ data, scrollX }) {
  const { width } = useWindowDimensions();
  return (
    <View style={{ flexDirection: "row", height: 64, paddingTop: 20 }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp"
        });
        const animatedStyle = {
          width: dotWidth, // This should be an animated value
        };
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[
              styles.rectangle,
              animatedStyle,
              { opacity }
            ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  rectangle: {
    height: 5,
    borderRadius: 10,
    width: '80px', // Set initial width of rectangle
    backgroundColor: "green",
    marginHorizontal: 8,
  },
});

export default Paginator;
