# Expo Starter [template]

web demo: [Expo Starter](https://expo-quick-prototype.vercel.app)

[![follow @calebnance](https://img.shields.io/twitter/follow/calebnance.svg?style=for-the-badge&logo=TWITTER&logoColor=FFFFFF&labelColor=00aced&logoWidth=20&color=lightgray)](https://twitter.com/calebnance)

## Table of Contents

- [Install & Build](#install--build)
- [Features](#features)
- [Linting](#linting)
- [Release Notes](#release-notes)

## Install & Build

First, make sure you have Expo CLI installed: `npm install -g expo-cli`

**Install:**

```bash
yarn
```

**Run Project Locally:**

```bash
yarn dev
```

## Features

- Expo SDK 48
- iOS, Android and PWA (Progressive Web App)
- React Navigation v6
- [React Context](https://reactjs.org/docs/context.html)
- Dark mode (with preference stored via [AsyncStorage](https://github.com/react-native-async-storage/async-storage))
- Linting
- [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

## Linting

- run: `yarn lint` for a list of linting warnings/error in cli
- prettier and [react-native-community eslint config](https://github.com/facebook/react-native/tree/master/packages/eslint-config-react-native-community)
- make sure you have prettier package installed:
  - [prettier for atom](https://atom.io/packages/prettier-atom)
  - [prettier for vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- then make sure to enable these options (packages → prettier):
  - eslint integration
  - automatic format on save (toggle format on save)

**Update Linting Packages:**

```
yarn add @babel/core eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-import-helpers eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native prettier --dev
```

## Release Notes

**version 1.0.0 (current)**

- upgraded to [Expo SDK 48](https://blog.expo.dev/expo-sdk-48-ccb8302e231)
- upgraded to [Expo SDK 47](https://blog.expo.dev/expo-sdk-47-a0f6f5c038af)
- upgraded to [Expo SDK 46](https://blog.expo.dev/expo-sdk-46-c2a1655f63f7)
- upgraded to [Expo SDK 45](https://blog.expo.dev/expo-sdk-45-f4e332954a68)
- added Dark mode support
- added two modal examples: Full screen and fade-in/slide-in half modal card
- added [React Context](https://reactjs.org/docs/context.html) for main App state
- upgraded to [Expo SDK 44](https://blog.expo.dev/expo-sdk-44-4c4b8306584a)
- upgraded to [Expo SDK 43](https://blog.expo.dev/expo-sdk-43-aa9b3c7d5541)

**version 0.3.0**

- upgraded to [React Navigation v6](https://reactnavigation.org/docs/getting-started)
- upgraded to [Expo SDK 42](https://blog.expo.io/expo-sdk-42-579aee2348b6)
- upgraded to [Expo SDK 41](https://blog.expo.io/expo-sdk-41-12cc5232f2ef)

**version 0.2.0**

- upgraded to [React Navigation v5](https://reactnavigation.org/docs/5.x/getting-started)
- upgraded to [Expo SDK 40](https://blog.expo.io/expo-sdk-40-is-now-available-d4d73e67da33)
- upgraded to [Expo SDK 39](https://blog.expo.io/expo-sdk-39-is-now-available-4c10aa825e3f)
- upgraded to [Expo SDK 38](https://blog.expo.io/expo-sdk-38-is-now-available-ab6cd30ca2ee)

**version 0.1.0**

- upgraded to [Expo SDK 37](https://blog.expo.io/expo-sdk-37-is-now-available-dd5770f066a6)
- started with [React Navigation v4](https://reactnavigation.org/docs/4.x/getting-started)
- started with [Expo SDK 36](https://blog.expo.io/expo-sdk-36-is-now-available-b91897b437fe)
