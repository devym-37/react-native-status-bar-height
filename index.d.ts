declare module "react-native-safearea-height" {
    export function getStatusBarHeight(skipAndroid?: boolean): number;
    export function isIPhoneX(): boolean;
    export function isIPhoneXMax(): boolean;
    export function isIPhone12(): boolean;
    export function isIPhone12Max(): boolean;
    export function isIPhoneWithMonobrow(): boolean;
    export function isIPhoneWithDynamicIsland(): boolean;
    export function isExpo(): boolean;
}
