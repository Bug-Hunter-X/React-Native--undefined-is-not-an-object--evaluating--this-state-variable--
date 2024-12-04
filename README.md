# React Native: Handling 'undefined is not an object' Error

This repository demonstrates a common error in React Native applications where you attempt to access a state variable before it has been properly initialized. The error usually manifests as `undefined is not an object (evaluating 'this.state.variable')`.

The example showcases the issue and provides a solution using optional chaining and nullish coalescing operators to gracefully handle the undefined state.

## Steps to Reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npx react-native run-android` or `npx react-native run-ios` to run the app.
4. Observe the console for the error before the fix is applied, and then see how the fix resolves it.

## Solution

The solution utilizes optional chaining (`?.`) and the nullish coalescing operator (`??`) to safely access the state variable.  If `this.state.variable` is `undefined` or `null`, the optional chaining prevents an error, and the nullish coalescing operator provides a default value.