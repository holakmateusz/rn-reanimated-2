import React from "react";
import { View, StyleSheet, Button } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const DEFAULT_SIZE = 100;

const ResizeAnimationScreen = () => {
  const SIZE = useSharedValue(DEFAULT_SIZE);
  const rotation = useSharedValue(0);
  const offset = useSharedValue(0);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(SIZE.value),
      height: withSpring(SIZE.value),
      transform: [
        {
          rotate: `${rotation.value}deg`,
        },
        {
          translateX: withSpring(offset.value * 255),
        },
      ],
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Button
          title="Resize"
          onPress={() => (SIZE.value = Math.random() * 300)}
        />
        <Button
          title="Rotate"
          onPress={() => (rotation.value = withSpring(Math.random() * 360))}
        />
        <Button title="Move" onPress={() => (offset.value = Math.random())} />
      </View>
      <View style={styles.bottomContainer}>
        <Animated.View style={[styles.square, reanimatedStyle]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topContainer: {
    flex: 1,
    justifyContent: "space-around",
    borderWidth: 1,
    width: "100%",
  },
  bottomContainer: {
    flex: 2,
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  square: {
    height: DEFAULT_SIZE,
    width: DEFAULT_SIZE,
    backgroundColor: "blue",
    borderRadius: 12,
  },
});

export default ResizeAnimationScreen;
