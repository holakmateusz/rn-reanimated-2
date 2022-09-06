import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  AnimationList: undefined;
  SquareAnimation: undefined;
  ResizeAnimation:undefined;
  GestureAnimation:undefined;
};

export type RootStackScreenProp<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
