import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AnimationListScreen from "../screens/AnimationListScreen";
import ResizeAnimationScreen from "../screens/ResizeAnimationScreen";
import SquareAnimationScreen from "../screens/SquareAnimationScreen";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AnimationList" component={AnimationListScreen} />
      <Stack.Screen name="SquareAnimation" component={SquareAnimationScreen} />
      <Stack.Screen name="ResizeAnimation" component={ResizeAnimationScreen} />
    </Stack.Navigator>
  );
};

export default Root;
