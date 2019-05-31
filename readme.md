## Notes on versions:
- **React-Native:** I tested this on versions 0.58.0 & 0.59.8 but should work on most versions.
- **BunqJSClient:** There is an issue on versions >= 0.41. For now use 0.40.2.

## Create new project or use your own:
- Create a new project by: `react-native init [name]`
- Use a react-native project.

## How to implement in your own project:
- `yarn add @bunq-community/bunq-js-client@0.40.2`

- Issue: Unable to resolve module 'url' / Module 'url' does not exist in the Haste module map
- Resolved by: `yarn add url`

- `yarn add react-native-rsa-native`
- `react-native link react-native-rsa-native`
- (Re)build native project

Optional:
- Use `@react-native-community/async-storage` instead of `import { AsyncStorage } from 'react-native'` in `src/Store.js` because of deprecation notice in this react-native version


## TODO:
- Resolve issue with >= v0.41.0 -> `Module 'dns' does not exist in the Haste module map`
