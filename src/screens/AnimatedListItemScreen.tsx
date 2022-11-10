import React, { useCallback, useRef, useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  ZoomIn,
  ZoomOut,
  Layout,
} from "react-native-reanimated";

const DEFAULT_SIZE = 100;

interface Item {
  id: number;
}

const items: Item[] = new Array(10).fill(0).map((_, index) => ({ id: index }));

const AnimatedListItemScreen = () => {
  const initialMode = useRef<boolean>(true);

  useEffect(() => {
    initialMode.current = false;
  }, []);

  const [items, setItems] = useState<Item[]>(
    new Array(5).fill(0).map((_, index) => ({ id: index }))
  );

  const onAdd = useCallback(() => {
    setItems((currentItems) => {
      const nextItemId = (currentItems[currentItems.length - 1]?.id ?? 0) + 1;
      return [...currentItems, { id: nextItemId }];
    });
  }, []);

  const onDelete = useCallback(
    (itemId: number) => {
      setItems((currentItems) => {
        return currentItems.filter((item) => item.id !== itemId);
      });
    },
    [items]
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onAdd} style={styles.floatingButton}>
        <Text
          style={{
            fontSize: 30,
            color: "white",
            flex: 1,
            textAlign: "center",
            textAlignVertical: "center",
          }}
        >
          +
        </Text>
      </TouchableOpacity>
      <ScrollView style={{ flex: 1 }}>
        {items.map((item, index) => (
          <Animated.View
            style={styles.listItem}
            key={item.id}
            entering={initialMode ? ZoomIn.delay(100 * index) : ZoomIn}
            onTouchEnd={() => onDelete(item.id)}
            exiting={ZoomOut}
            layout={Layout.delay(150)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  listItem: {
    height: 100,
    backgroundColor: "#1798DE",
    width: "90%",
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 20,
    //shadow on android
    elevation: 5,
    shadowColor: "black",
    //shadow on iOS,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
  },
  floatingButton: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
    backgroundColor: "black",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 50,
    right: "5%",
    zIndex: 10,
  },
});

export default AnimatedListItemScreen;
