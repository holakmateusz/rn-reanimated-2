import React from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
import getAvailableAnimations from "../data/animationList";
import { RootStackScreenProp } from "../navigation/types";

const AnimationListScreen = ({
  navigation,
}: RootStackScreenProp<"AnimationList">) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={getAvailableAnimations()}
        keyExtractor={(item) => item.route}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() => navigation.navigate(item.route)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
});

export default AnimationListScreen;
