import Animated from "react-native-reanimated";
export declare const getIsAfterActive: (
  currentIndex: Animated.Node<number>,
  activeIndex: Animated.Node<number>
) => Animated.Node<number>;
export declare const getCellStart: (
  isAfterActive: Animated.Node<number>,
  offset: Animated.Node<number>,
  activeCellSize: Animated.Node<number>,
  scrollOffset: Animated.Node<number>
) => Animated.Node<number>;
export declare const getOnChangeTranslate: (
  translate: Animated.Node<number>,
  isAfterActive: Animated.Node<number>,
  initialized: Animated.Value<number>,
  toValue: Animated.Value<number>,
  isPressedIn: Animated.Node<number>
) => Animated.Node<number>;
export declare const hardReset: (
  position: Animated.Value<number>,
  finished: Animated.Value<number>,
  time: Animated.Value<number>,
  toValue: Animated.Value<number>
) => Animated.Node<number>;
export declare const setupCell: (
  currentIndex: Animated.Value<number>,
  initialized: Animated.Value<number>,
  size: Animated.Node<number>,
  offset: Animated.Node<number>,
  isAfterActive: Animated.Value<number>,
  translate: Animated.Value<number>,
  prevTrans: Animated.Value<number>,
  prevSpacerIndex: Animated.Value<number>,
  activeIndex: Animated.Node<number>,
  activeCellSize: Animated.Node<number>,
  hoverOffset: Animated.Node<number>,
  scrollOffset: Animated.Node<number>,
  isHovering: Animated.Node<number>,
  hoverTo: Animated.Value<number>,
  hasMoved: Animated.Value<number>,
  spacerIndex: Animated.Value<number>,
  toValue: Animated.Value<number>,
  position: Animated.Value<number>,
  time: Animated.Value<number>,
  finished: Animated.Value<number>,
  runSpring: Animated.Node<number>,
  onHasMoved: Animated.Node<number>,
  onChangeSpacerIndex: Animated.Node<number>,
  onFinished: Animated.Node<number>,
  isPressedIn: Animated.Node<number>,
  placeholderOffset: Animated.Value<number>
) => Animated.Node<number>;
export declare function springFill(
  clock: Animated.Clock,
  state: Animated.SpringState,
  config: Animated.SpringConfig
): Animated.Node<number>;
