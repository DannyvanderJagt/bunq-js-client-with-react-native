## Re-produce process
- `react-native init [name]` (version 0.59.8 of react-native)
- `yarn add @bunq-community/bunq-js-client@0.40.2`

- Issue: Unable to resolve module 'url' / Module 'url' does not exist in the Haste module map
- Resolve by: `yarn add url`

- Issue: (>= v0.41) Module 'dns' does not exist in the Haste module map 
- Resolve by: ?????

- `yarn add react-native-rsa-native`
- `react-native link react-native-rsa-native`
- (Re)build native project




// TODO:
- Resolve issue with >= v0.41.0 -> dns module
- @react-native-community/async-storage instead of { AsyncStorage } from 'react-native'