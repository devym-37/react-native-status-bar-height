# react-native-safearea-height

> Small library that helps you to get status bar height
>
> Original https://github.com/ovr/react-native-status-bar-height

P.S :iPhone:X / iPhone 12 / iPhone 13mini / iPhone 14Pro supported :heart:

## Install

```bash
$ npm install --save react-native-safearea-height
# OR
$ yarn add react-native-safearea-height
```

## Usage getStatusBarHeight(skipAndroid: boolean = false)

```js
import { getStatusBarHeight } from "react-native-safearea-height";

// 59 - iPhone 14 Pro / 14Pro Max
// 50 - iPhone 13 mini
// 47 - iPhone 12 / 12Pro / 13 / 13Pro / 13Pro Max / 14 / 14 Plus
// 44 - on iPhoneX
// 20 - on iOS device
// X - on Android platfrom (runtime value)
// 0 - on all other platforms (default)
console.log(getStatusBarHeight());

// will be 0 on Android, because You pass true to skipAndroid
console.log(getStatusBarHeight(true));
```

## License

This project is open-sourced software licensed under the MIT License.

See the [LICENSE](LICENSE) file for more information.
