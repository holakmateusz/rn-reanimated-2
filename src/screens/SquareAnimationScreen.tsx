import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
} from "react-native-reanimated";

const DEFAULT_SIZE = 100;

const SquareAnimationScreen = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const handleRotation = (progress: Animated.SharedValue<number>) => {
    "worklet";
    return `${progress.value * 2 * Math.PI}rad`;
  };

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * DEFAULT_SIZE) / 2,
      transform: [{ scale: scale.value }, { rotate: handleRotation(progress) }],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), 3, true);
    scale.value = withRepeat(withSpring(1), 3, true);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.square, reanimatedStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    height: DEFAULT_SIZE,
    width: DEFAULT_SIZE,
    backgroundColor: "blue",
  },
});

export default SquareAnimationScreen;
