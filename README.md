<h1 align="center">ORACLE</h1>

## 🚀 Tech Stack

- React Native CLI
- TypeScript
- styled-components
- eslint
- Husky
- Storybook
- Detox

## ✔️ About

Oracle goes through crypto market history to get a glance at the current conditions, depending on specific time frames.

## ✔️ Install

```
yarn install
yarn husky-init
```

## Possible build Issues

### (Android for linux users) If you end up with the "SDK location not found" issue
Create a local.properties file at the android folder and paste this:
```
sdk.dir = /home/$USER/Android/Sdk
```


### 'cz' is not a git command.
```
git: 'cz' is not a git command. See 'git --help'.
```
Install commitizen as a global npm package
```
npm install -g commitizen
```
