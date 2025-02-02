import { Dimensions, Platform, StatusBar } from "react-native";

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get("window");

const DEVICE_LAYOUT = {
  iphoneX: {
    width: 375,
    height: 812,
  },
  iphoneXMax: {
    width: 414,
    height: 896,
  },
  iphone12: {
    width: 390,
    height: 844,
  },
  iphone12Max: {
    width: 428,
    height: 926,
  },
  iphone14Pro: {
    width: 393,
    height: 852,
  },
  iphone14ProMax: {
    width: 430,
    height: 932,
  },
  iphone16Pro: {
    width: 402,
    height: 874,
  },
  iphone16ProMax: {
    width: 440,
    height: 956,
  },
};

const {
  iphoneX,
  iphoneXMax,
  iphone12,
  iphone12Max,
  iphone14Pro,
  iphone14ProMax,
  iphone16Pro,
  iphone16ProMax,
} = DEVICE_LAYOUT;

const STATUSBAR_DEFAULT_HEIGHT = 20;

let statusBarHeight = STATUSBAR_DEFAULT_HEIGHT;
let isIPhoneX_v = false;
let isIPhoneXMax_v = false;
let isIPhone12_v = false;
let isIPhone12Max_v = false;
let isIPhoneWithMonobrow_v = false;
let isIPhoneWithDynamicIsland_v = false;

const DEVICE_LAYOUT_TYPE = {
  [`${iphoneX.width}${iphoneX.height}`]: "iPhoneX",
  [`${iphoneXMax.width}${iphoneXMax.height}`]: "iPhoneXMax",
  [`${iphone12.width}${iphone12.height}`]: "iPhone12",
  [`${iphone12Max.width}${iphone12Max.height}`]: "iPhone12Max",
  [`${iphone14Pro.width}${iphone14Pro.height}`]: "iPhone14Pro",
  [`${iphone14ProMax.width}${iphone14ProMax.height}`]: "iPhone14ProMax",
  [`${iphone16Pro.width}${iphone16Pro.height}`]: "iPhone16Pro",
  [`${iphone16ProMax.width}${iphone16ProMax.height}`]: "iPhone16ProMax",
};

const targetIPhoneUpdate = {
  iPhoneX: () => {
    isIPhoneWithMonobrow_v = true;
    isIPhoneX_v = true;
    statusBarHeight = 44;
  },
  iPhoneXMax: () => {
    isIPhoneWithMonobrow_v = true;
    isIPhoneXMax_v = true;
    statusBarHeight = 44;
  },
  iPhone12: () => {
    isIPhoneWithMonobrow_v = true;
    isIPhone12_v = true;
    statusBarHeight = 47;
  },
  iPhone12Max: () => {
    isIPhoneWithMonobrow_v = true;
    isIPhone12Max_v = true;
    statusBarHeight = 47;
  },
  iPhone14Pro: () => {
    isIPhoneWithMonobrow_v = true;
    isIPhoneWithDynamicIsland_v = true;
    statusBarHeight = 59;
  },
  iPhone14ProMax: () => {
    isIPhoneWithMonobrow_v = true;
    isIPhoneWithDynamicIsland_v = true;
    statusBarHeight = 59;
  },
  iPhone16Pro: () => {
    isIPhoneWithMonobrow_v = true;
    isIPhoneWithDynamicIsland_v = true;
    statusBarHeight = 62;
  },
  iPhone16ProMax: () => {
    isIPhoneWithMonobrow_v = true;
    isIPhoneWithDynamicIsland_v = true;
    statusBarHeight = 62;
  },
};

const targetIphoneDevice = (width, height) => {
  return DEVICE_LAYOUT_TYPE?.[`${width}${height}`] ?? "iPhoneX";
};

if (Platform.OS === "ios" && !Platform.isPad && !Platform.isTVOS) {
  const iPhoneDeviceType = targetIphoneDevice(W_WIDTH, W_HEIGHT);
  targetIPhoneUpdate[iPhoneDeviceType]();
}

export const isIPhoneX = () => isIPhoneX_v;
export const isIPhoneXMax = () => isIPhoneXMax_v;
export const isIPhone12 = () => isIPhone12_v;
export const isIPhone12Max = () => isIPhone12Max_v;
export const isIPhoneWithMonobrow = () => isIPhoneWithMonobrow_v;
export const isIPhoneWithDynamicIsland = () => isIPhoneWithDynamicIsland_v;

const getExpoRoot = () => global.Expo || global.__expo || global.__exponent;

export const isExpo = () => getExpoRoot() !== undefined;

export function getStatusBarHeight(skipAndroid) {
  return Platform.select({
    ios: statusBarHeight,
    android: skipAndroid ? 0 : StatusBar.currentHeight,
    default: 0,
  });
}
