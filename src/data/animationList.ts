import { RootStackParamList } from "../navigation/types";

interface AnimationType {
  name: string;
  route: keyof RootStackParamList;
}

const getAvailableAnimations = (): AnimationType[] => {
  return [
    {
      name: "Square animation with rotation",
      route: "SquareAnimation",
    },
    {
      name:"Resize square animation",
      route:"ResizeAnimation",
    }
  ];
};

export default getAvailableAnimations;
